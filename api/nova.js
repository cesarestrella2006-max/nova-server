export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { text } = req.body || {};

  if (!text) {
    return res.status(400).json({ error: "Missing text" });
  }

  return res.status(200).json({
    reply: "Hola, soy Nova ✨ Recibí: " + text
  });
}

