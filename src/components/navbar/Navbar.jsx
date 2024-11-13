import React from 'react';
import { LuMenu } from "react-icons/lu";
import Mobile from './mobile/Mobile';

const Navbar = () => {
  const [nav, setNav] = React.useState(false); // mobile nav
  const handleNav = () => {
    setNav(e => !e);
  }

  return (
    <header className="w-full">
      <nav className="w-full max-w-[1200px] mx-auto p-5">
        <div className="w-full flex justify-between">
            <h1 className="text-3xl font-bold text-[#00df9a] cursor-pointer hover:opacity-60 duration-100 ease-linear">
                CRIPTOS.
            </h1>
            <ul className="text-white font-semibold hidden md:flex items-center gap-10">
                <li className="hover:text-emerald-400 duration-150 ease-linear cursor-pointer">
                    Home
                </li>
                <li className="hover:text-emerald-400 duration-150 ease-linear cursor-pointer">
                    Company
                </li>
                <li className="hover:text-emerald-400 duration-150 ease-linear cursor-pointer">
                    Account
                </li>
                <li className="hover:text-emerald-400 duration-150 ease-linear cursor-pointer">
                    Criptos
                </li>
                <li className="bg-white text-neutral-800 p-2 rounded-md hover:bg-emerald-400 hover:text-white
                duration-150 ease-linear cursor-pointer hover:shadow-md hover:shadow-emerald-600">
                    Get Started
                </li>
            </ul>
            <div className={`${nav? "hidden" : "flex md:hidden"}`}>
                <LuMenu 
                    className="flex text-white hover:text-[#00df9a] duration-100 ease-linear cursor-pointer" 
                    size={35}
                    onClick={handleNav}
                />
            </div>
        </div>
      </nav>
      <Mobile state={nav} onClick={handleNav} />
    </header>
  )
}

export default Navbar;