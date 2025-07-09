// /api/booking.js
export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ result: "error", error: "Method Not Allowed" });
  }

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbz3RMt_jN12oU4V5HdTkVNdh6TbBVzuYkEWov05rsca0n3j9UqEDJcPud_MYwxaqFXF/exec";
  try {
    const scriptRes = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(req.body),
    });
    const data = await scriptRes.json();
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ result: "error", error: err.message });
  }
}
