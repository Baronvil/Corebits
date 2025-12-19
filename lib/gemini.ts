
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export interface AIAnalysisResult {
  department: string;
  priority: 'High' | 'Medium' | 'Low';
  estimatedResponse: string;
  summary: string;
}

export const analyzeInquiry = async (
  name: string,
  org: string,
  message: string,
  type: string
): Promise<AIAnalysisResult> => {
  try {
    const prompt = `
      You are the Backend Intake System for Corebit Consulting. 
      Analyze this contact form submission:
      Client: ${name} from ${org}
      Inquiry Type: ${type}
      Message: ${message}

      Output a JSON object with:
      1. 'department': The most specific internal department to handle this (e.g., 'PMS Implementation Unit', 'Cloud Infrastructure Team', 'Executive Strategy').
      2. 'priority': 'High' if it sounds urgent or high-value, else 'Medium' or 'Low'.
      3. 'estimatedResponse': A professional timeframe (e.g., 'Within 2 hours', 'By EOD', '24-48 hours').
      4. 'summary': A 10-word executive summary of the request.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            department: { type: Type.STRING },
            priority: { type: Type.STRING },
            estimatedResponse: { type: Type.STRING },
            summary: { type: Type.STRING }
          }
        }
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI backend");
    
    return JSON.parse(text) as AIAnalysisResult;

  } catch (error) {
    console.error("AI Backend Error:", error);
    // Fallback if AI fails
    return {
      department: "General Inquiries",
      priority: "Medium",
      estimatedResponse: "24 Hours",
      summary: "Client inquiry received."
    };
  }
};
