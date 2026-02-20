import OpenAI from "openai";

// Create client LAZILY (only when function runs)
function getClient() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is missing. Check your .env file.");
  }

  return new OpenAI({ apiKey });
}

export async function generateReply(message) {
  const openai = getClient();

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content:
          "You are MindScoreAI, a calm and supportive mental wellness assistant. Respond with empathy and short helpful advice.",
      },
      { role: "user", content: message },
    ],
    temperature: 0.7,
    max_tokens: 150,
  });

  return completion.choices[0].message.content;
}
