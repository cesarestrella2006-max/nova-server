import express from "express";
import cors from "cors";
import OpenAI from "openai";

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/nova", async (req, res) => {
  try {
    const userText = req.body.text;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Eres Nova, una IA amable, calmada y cercana. Responde natural y con cariño."
        },
        {
          role: "user",
          content: userText
        }
      ]
    });

    res.json({
      reply: completion.choices[0].message.content
    });

  } catch (e) {
    res.json({ reply: "Estoy aquí contigo, algo falló pero no te dejé sola." });
  }
});

app.listen(3000, () => {
  console.log("Nova está viva en la nube");
});
