import OpenAI from "openai";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  try {
    const { text } = req.body;

    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });

    const response = await client.responses.create({
      model: "gpt-4.1-mini",
      input: text
    });

    res.json({
      reply: response.output_text
    });

  } catch (error) {
    console.error(error);
    res.json({
      reply: "Estoy aquí contigo, pero hubo un error interno 💙"
    });
  }
}
