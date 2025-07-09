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
    console.log("RAW Apps Script Response:", text);
    try {
      data = JSON.parse(text);
    } catch (err) {
      // Not JSON (probably an Apps Script HTML error page or deployment warning)
      // You might log this somewhere else for devs
      console.error("Google Apps Script returned non-JSON:", text);

      // Only show a friendly error to the user
      return res
        .status(500)
        .json({
          result: "error",
          error: "Sorry, booking service is temporarily unavailable. Please try again soon.",
        });
    }

    // If Apps Script failed only because of Telegram, still show success to user
    if (
      data.result === "error" &&
      data.error &&
      (
        data.error.toLowerCase().includes("chat not found") ||
        data.error.toLowerCase().includes("forbidden") ||
        data.error.toLowerCase().includes("bot was blocked") ||
        data.error.toLowerCase().includes("bad request") ||
        data.error.toLowerCase().includes("user not found") ||
        data.error.toLowerCase().includes("group chat was upgraded")
      )
    ) {
      // Log for yourself, but hide from user
      console.warn("Telegram delivery failed, but booking saved:", data.error);

      // Show success to the user
      return res.status(200).json({ result: "success" });
    }

    // All other Apps Script errors or success
    return res.status(200).json(data);

  } catch (err) {
    // Fetch failed (network, env, deployment error)
    console.error("Booking endpoint error:", err);

    return res
      .status(500)
      .json({
        result: "error",
        error: "Booking service is temporarily unavailable. Please try again later."
      });
  }
}
