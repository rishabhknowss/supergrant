import { Navbar } from "../components/Navbar";
import  ScholarshipDetailsResponse from "../components/ScholarshipDetailsResponse";

export const Search = () => {
  return (
    <div className="bg-gradient-to-b from-[#e0f2ff] via-[#b3d8ff] to-[#a1c4fd]">
        <Navbar />
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="grid sm:flex justify-center text-4xl sm:text-5xl md:text-6xl font-bold mt-10 text-center">
      <span className="whitespace-nowrap">Search Your</span> <span className="text-blue-600 mx-2">Scholarships</span>
      </div>
      <div className="flex justify-center my-4">
        <span className="text-white p-2 px-4 rounded-full bg-slate-400 text-sm sm:text-base">
          Powered by gemini
        </span>
      </div>
      <div>
        <ScholarshipDetailsResponse />
      </div>
    </div>
    </div>
  );
};
