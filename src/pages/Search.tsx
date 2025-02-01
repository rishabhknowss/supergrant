export const Search = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center text-4xl sm:text-5xl md:text-6xl font-bold mt-10 text-center">
        Search Your <span className="text-blue-600 mx-2">Scholarships</span>
      </div>
      <div className="flex justify-center my-4">
        <span className="text-white p-2 px-4 rounded-full bg-slate-400 text-sm sm:text-base">
          Powered by gemini
        </span>
      </div>

      <div className="flex flex-col gap-4 max-w-lg mx-auto w-full">
        <div className="grid gap-2">
          <div className="text-lg sm:text-xl font-semibold">
            Personal Details
          </div>
          <input
            className="border p-3 sm:p-4 rounded-xl w-full"
            placeholder="(e.g., Undergraduate, Hindu, General, Maharashtra)"
          ></input>
        </div>

        <div className="grid gap-2">
          <div className="text-lg sm:text-xl font-semibold">
            Scholarship Purpose
          </div>
          <textarea
            className="border p-3 sm:p-4 rounded-xl w-full"
            placeholder="Describe the purpose of scholarship (e.g., BTech, MBBS, etc.)"
          ></textarea>
        </div>

        <button className="bg-blue-600 text-white py-3 sm:py-4 px-6 rounded-xl w-full text-lg font-semibold hover:bg-blue-700 cursor-pointer shadow-2xl shadow-blue-600">
          Find Scholarships
        </button>
      </div>
    </div>
  );
};
