import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { SearchForm } from "./SearchForm";
import { ScholarshipResults } from "./ScholarshipResult";
import { cleanJsonResponse, transformScholarshipData, validateUrl } from "../utils/scholarshipUtils";
import type { Scholarship } from "../types";

export default function ScholarshipDetailsResponse() {
  const [loading, setLoading] = useState(false);
  const [scholarships, setScholarships] = useState<Scholarship[]>([]);
  const [error, setError] = useState("");

  const fetchScholarships = async (personalDetails: string, scholarshipPurpose: string) => {
    setLoading(true);
    setError("");
    
    if (!personalDetails || !scholarshipPurpose) {
      setError("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_GEMINI_API_KEY || "");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

      const prompt = `I am looking for scholarships that match the following criteria:
            - Personal details: ${personalDetails}
            - Purpose of scholarship: ${scholarshipPurpose}
            ${import.meta.env.VITE_SYSTEM_PROMPT || ""}`;

      const result = await model.generateContent(prompt);
      const response = result.response.text();
      
      const cleanedJson = cleanJsonResponse(response);
      const rawScholarshipsData = JSON.parse(cleanedJson);
      const transformedData = transformScholarshipData(rawScholarshipsData);
      
      const validatedData = transformedData.map(scholarship => ({
        ...scholarship,
        link: validateUrl(scholarship.link)
      }));
      
      setScholarships(validatedData);
    } catch (error) {
      console.error("Error fetching scholarships:", error);
      setError("Failed to fetch scholarships. Please try again.");
      setScholarships([]);
    } finally {
      setLoading(false);
    }
  };

  const handleScholarshipClick = (link: string, e: React.MouseEvent) => {
    if (!link || link === '#') {
      e.preventDefault();
      setError("Invalid scholarship link provided");
      return;
    }
    window.open(validateUrl(link), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <SearchForm
          onSearch={fetchScholarships}
          loading={loading}
          error={error}
        />
        {scholarships.length > 0 && (
          <ScholarshipResults
            scholarships={scholarships}
            onScholarshipClick={handleScholarshipClick}
          />
        )}
      </div>
    </div>
  );
}