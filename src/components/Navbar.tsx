import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="w-full lg:max-w-[1000px] border-2 border-red-950 py-3 px-5 md:px-12 lg:rounded-full flex justify-between items-center mx-auto mt-0 lg:mt-10 bg-[#E88F62] z-50 fixed left-1/2 -translate-x-1/2">
      <Link to="/" className="w-12 hover:scale-125">
        <img src="/logo-v2-untext.svg" alt="logo" className="w-full" />
      </Link>

      <div className="hidden sm:block font-pixel text-red-950 text-[11px]">
        <ul className="flex flex-row items-center gap-7">
          <li className="hover:scale-125">
            <Link to="#features">Features</Link>
          </li>
          <li className="hover:scale-125">
            <Link to="#tasks">Tasks</Link>
          </li>
          <li className="hover:scale-125">
            <Link to="#about">About</Link>
          </li>
          <li>
            <button className="px-5 py-2 bg-red-950 text-white hover:bg-[#F9B78B] hover:text-red-950 cursor-pointer hover:scale-125">
              Login
            </button>
          </li>
        </ul>
      </div>

      <div className="sm:hidden">
        <GiHamburgerMenu size={30} />
      </div>
    </nav>
  );
}
