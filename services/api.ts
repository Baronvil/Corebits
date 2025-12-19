
import { db, InquiryData } from '../lib/storage';
import { analyzeInquiry } from '../lib/gemini';

interface SubmitResponse {
  success: boolean;
  data?: InquiryData;
  error?: string;
}

export const api = {
  submitContactForm: async (formData: {
    name: string;
    organization: string;
    email: string;
    type: string;
    message: string;
  }): Promise<SubmitResponse> => {
    // 1. Simulate Network Latency
    await new Promise((resolve) => setTimeout(resolve, 1500));

    try {
      // 2. AI Backend Processing
      const analysis = await analyzeInquiry(
        formData.name,
        formData.organization,
        formData.message,
        formData.type
      );

      // 3. Database Persistence
      const savedRecord = db.saveInquiry({
        ...formData,
        backendAnalysis: analysis
      });

      return {
        success: true,
        data: savedRecord
      };

    } catch (error) {
      console.error("API Error", error);
      return {
        success: false,
        error: "Internal Server Error. Please try again."
      };
    }
  }
};
