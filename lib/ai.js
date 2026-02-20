import OpenAI from "openai";

export async function generateReply(message) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      console.error("OPENAI KEY missing");
      return "Server configuration error.";
    }

    if (!message || message.trim() === "") {
      return "Tell me how you're feeling.";
    }

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "You are a calm, supportive mental wellness assistant. Reply briefly and empathetically.",
        },
        { role: "user", content: message },
      ],
      temperature: 0.7,
      max_tokens: 120,
    });

    return completion?.choices?.[0]?.message?.content || "No reply generated.";
  } catch (error) {
    console.error("AI ERROR:", error);
    return "AI temporarily unavailable. Try again.";
  }
}