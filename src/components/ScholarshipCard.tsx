import { Scholarship } from "../types";

interface ScholarshipCardProps {
  scholarship: Scholarship;
  onApply: (link: string, e: React.MouseEvent) => void;
}

export function ScholarshipCard({ scholarship, onApply }: ScholarshipCardProps) {
  return (
    <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
      <div className="p-6 space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-900 line-clamp-2">
            {scholarship.name}
          </h3>
          <div className="text-lg font-medium text-green-600">
            {scholarship.amount}
          </div>
        </div>
        <p className="text-gray-700 line-clamp-3">{scholarship.description}</p>
      </div>
      <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center bg-gray-50/80">
        <div className="flex items-center text-sm text-gray-500">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">{scholarship.deadline}</span>
        </div>
        <button
          onClick={(e) => onApply(scholarship.link, e)}
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:opacity-90 transition-opacity"
        >
          Apply
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </button>
      </div>
    </div>
  );
}