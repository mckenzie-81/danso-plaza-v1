// /api/booking.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ result: "error", error: "Method Not Allowed" });
  }

  const scriptUrl = process.env.VITE_BOOKING_WEBAPP_URL;

  try {
    const scriptRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const text = await scriptRes.text();
    let data;
    try {
      data = JSON.parse(text);
    } catch (err) {
      // The response was not JSON, maybe an HTML error page
      console.error("Non-JSON response from Apps Script:", text);
      // Optionally you can log this somewhere more persistent
      return res
        .status(500)
        .json({
          result: "error",
          error: "Google Apps Script did not return JSON",
          raw: text,
        });
    }

    // If Apps Script failed only because of Telegram, still show success
    // Telegram errors often have "chat not found", "wrong chat", or similar.
    if (
      data.result === "error" &&
      data.error &&
      (data.error.toLowerCase().includes("chat not found") ||
        data.error.toLowerCase().includes("forbidden") ||
        data.error.toLowerCase().includes("bot was blocked") ||
        data.error.toLowerCase().includes("bad request") ||
        data.error.toLowerCase().includes("user not found") ||
        data.error.toLowerCase().includes("group chat was upgraded")) // catch all common TG fails
    ) {
      // Optionally, log the Telegram error somewhere for yourself
      console.warn("Telegram delivery failed, but booking saved:", data.error);

      // Always tell the user booking was successful
      return res.status(200).json({ result: "success" });
    }

    // Any other error (eg, sheet write fails, bad promo) should bubble up
    return res.status(200).json(data);
  } catch (err) {
    // Only fails if Apps Script is unreachable, or network error
    return res.status(500).json({ result: "error", error: err.message });
  }
}
