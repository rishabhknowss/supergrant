export const LandingPage = () => {
    return (
      <div className="min-h-screen bg-white text-black  flex mt-20 justify-center px-4">
        <div className="max-w-7xl mx-auto py-20 text-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your <span className="text-blue-600">Scholarships</span> Search Simplified
            <br />
            <span className="block mt-2 text-2xl md:text-6xl">
              AI powered. Fast. <span className="text-blue-600 mx-1">NO BS.</span>
            </span>
          </h1>
  
          {/* Button */}
          <div className="mt-10">
            <button className="shadow-xl shadow-blue-500 text-xl md:text-2xl cursor-pointer bg-blue-600 px-6 py-2 md:px-8 md:py-3 rounded-full text-white hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>
      </div>
    );
  };