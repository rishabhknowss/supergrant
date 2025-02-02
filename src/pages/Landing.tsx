import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-b from-[#e0f2ff] via-[#b3d8ff] to-[#a1c4fd]">
    <Navbar />
    <div className="min-h-screen flex justify-center px-4  text-black">
      
      <div className="max-w-7xl mx-auto py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Your <span className="text-blue-600">Scholarships</span> Search
          Simplified
          <br />
          <span className="block mt-2 text-2xl md:text-6xl">
            AI powered. Fast. <span className="text-blue-600 mx-1">NO BS.</span>
          </span>
        </h1>

        <div className="mt-10">
          <button
            onClick={() => navigate("/search")}
            className="shadow-xl shadow-blue-500 text-xl md:text-2xl cursor-pointer bg-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-full text-white hover:bg-blue-700 transition-colors"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};
