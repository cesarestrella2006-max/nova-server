export default async function handler(req, res) {
  // Solo permitir POST
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Only POST requests are allowed"
    });
  }

  try {
    // Asegurarnos de que el body exista
    const { text } = req.body || {};

    if (!text) {
      return res.status(400).json({
        error: "Missing 'text' in request body"
      });
    }

    // Respuesta de prueba (sin OpenAI aún)
    return res.status(200).json({
      reply: "Hola, soy Nova ✨ Recibí: " + text
    });

  } catch (error) {
    console.error("Nova error:", error);

    return res.status(500).json({
      reply: "Nova tuvo un error interno 💙"
    });
  }
}
