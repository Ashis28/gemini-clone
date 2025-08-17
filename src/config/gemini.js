const GEMINI_API_KEY = "AIzaSyA29AHIu4yEZ8m_stknMngvkokYfQppNPQ"

import { GoogleGenAI } from "@google/genai";

// The client gets the API key from the environment variable `GEMINI_API_KEY`.
// const ai = new GoogleGenAI({});

// async function main() {
//   const response = await ai.models.generateContent({
//     model: "gemini-2.5-flash",
//     contents: "Explain how AI works in a few words",
//   });
//   console.log(response.text);
// }

main();

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({});

async function main(promot) {
  const chat = ai.chats.create({
    model: "gemini-2.5-flash",
    history: [
      {
        role: "user",
        parts: [{ text: "Hello" }],
      },
      {
        role: "model",
        parts: [{ text: "Great to meet you. What would you like to know?" }],
      },
    ],
  });

  const response1 = await chat.sendMessage({
    message: promot,
  });
  console.log("Chat response 1:", response1.text);

}

export default main;