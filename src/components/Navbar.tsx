import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className=" text-black ">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={()=>navigate('/')}>
          <img src="/logo.png" height={30} width={30} alt="Supergrant Logo" />
          <span className="font-bold text-2xl text-black ml-2">
            Super<span className="text-blue-600">grant</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-black">
        <button onClick={()=>navigate('/')} className="cursor-pointer hover:text-blue-500 transition-colors">HOME</button>
         
          <a href='https://x.com/rishabhknows' className="cursor-pointer hover:text-blue-500 transition-colors">CONTACT</a>
          <button className="cursor-pointer bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-black p-4 flex flex-col gap-4 shadow-lg">
          <button onClick={()=>navigate('/')} className="hover:text-blue-500 transition-colors">HOME</button>
          <a href='https://x.com/rishabhknows' className="cursor-pointer hover:text-blue-500 transition-colors flex justify-center">CONTACT</a>
          <button className="cursor-pointer bg-blue-600 px-6 py-2 rounded-full text-white font-semibold hover:bg-blue-700 transition-colors">
            Search
          </button>
        </div>
      )}
    </nav>
  );
};
