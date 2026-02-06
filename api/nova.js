export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { text } = req.body;

  return res.json({
    reply: "Hola, soy Nova ✨ Recibí: " + text
  });
}
