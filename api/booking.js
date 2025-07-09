// /api/booking.js

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ result: "error", error: "Method Not Allowed" });
  }

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbz8SeG6hRe8j5jxUfbRE3BBdjWmI_jwrNEYz0x9aKgoROFwesAzyE1zKAeK_f7kLSPo/exec";

  try {
    const scriptRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const data = await scriptRes.json();

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
