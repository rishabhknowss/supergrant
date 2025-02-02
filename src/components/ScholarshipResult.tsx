import { Scholarship } from '../types';
import { ScholarshipCard } from './ScholarshipCard';

interface ScholarshipResultsProps {
  scholarships: Scholarship[];
  onScholarshipClick: (link: string, e: React.MouseEvent) => void;
}

export function ScholarshipResults({ scholarships, onScholarshipClick }: ScholarshipResultsProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {scholarships.map((scholarship, index) => (
        <ScholarshipCard
          key={index}
          scholarship={scholarship}
          onApply={onScholarshipClick}
        />
      ))}
    </div>
  );
}