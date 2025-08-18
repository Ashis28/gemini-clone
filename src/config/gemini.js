import { GoogleGenAI } from "@google/genai";

let text = "Abraca dabra * there are so many content but at this movement lets ** return ** on this muchremember more knowledge is harmful"
// Set this to true to pause API calls for 30 minutes (or as needed)
const PAUSE_API = true;

// Optionally, you can set a timestamp to automatically resume after 30 minutes
// For a more robust solution, persist this in localStorage or backend
const PAUSE_UNTIL =  new Date(Date.now() + 30 * 60 * 1000)

const GEMINI_API_KEY = "AIzaSyA29AHIu4yEZ8m_stknMngvkokYfQppNPQ";

// Initialize the GoogleGenAI client with the API key
const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

// Function to send a prompt to Gemini and log the response to the console
export async function runChatExample(prompt) {
  // Check if API calls are paused
  if (PAUSE_API) {
    console.warn("Gemini API calls are currently paused to save quota.");
    return text;
  }
  // Optionally, check for time-based pause
//   if (PAUSE_UNTIL && Date.now() < new Date(PAUSE_UNTIL).getTime()) {
//     console.warn(
//       `Gemini API calls are paused until ${new Date(PAUSE_UNTIL).toLocaleString()}`
//     );
//     return;
//   }
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    // Log the response to the console as requested
    console.log(response.text || response.candidates?.[0]?.content || "");
    return response.text;

  } catch (error) {
    console.error("Error communicating with Gemini API:", error);
    return error;
  }
}