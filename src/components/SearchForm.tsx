import { useState } from "react";

interface SearchFormProps {
  onSearch: (personalDetails: string, scholarshipPurpose: string) => void;
  loading: boolean;
  error: string;
}

export function SearchForm({ onSearch, loading, error }: SearchFormProps) {
  const [personalDetails, setPersonalDetails] = useState("");
  const [scholarshipPurpose, setScholarshipPurpose] = useState("");

  const handleSubmit = () => {
    onSearch(personalDetails, scholarshipPurpose);
  };

  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-6 mb-8">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="personalDetails" className="block text-lg font-semibold text-gray-700">
            Personal Details
          </label>
          <input
            id="personalDetails"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
            placeholder="(e.g., Undergraduate, Hindu, General, Maharashtra)"
            value={personalDetails}
            onChange={(e) => setPersonalDetails(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="scholarshipPurpose" className="block text-lg font-semibold text-gray-700">
            Scholarship Purpose
          </label>
          <textarea
            id="scholarshipPurpose"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none min-h-[100px] resize-y"
            placeholder="Describe the purpose of scholarship (e.g., BTech, MBBS, etc.)"
            value={scholarshipPurpose}
            onChange={(e) => setScholarshipPurpose(e.target.value)}
          />
        </div>
      </div>
      {error && (
        <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
          {error}
        </div>
      )}
      <button
        className="cursor-pointer mt-6 w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-opacity flex items-center justify-center gap-2"
        onClick={handleSubmit}
        disabled={loading}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        {loading ? "Searching..." : "Find Scholarships"}
      </button>
    </div>
  );
}