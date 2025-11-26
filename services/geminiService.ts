import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY is missing from environment variables.");
    }
  }
  return aiClient;
};

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  const client = getClient();
  if (!client) {
    return "I'm sorry, I cannot connect to the AI service right now. Please contact the school directly.";
  }

  try {
    const response = await client.models.generateContent({
      model: "gemini-2.5-flash",
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
    });

    return response.text || "I'm not sure how to answer that. Please call us for more details.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered an error while processing your request. Please try again later.";
  }
};
