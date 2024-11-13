import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const Mobile = ({ state, onClick }) => { // alt shift F = identar
  const style = {
    nav: {
        active: "fixed w-[70%] h-screen top-0 bg-slate-950 border-r border-slate-900 duration-200 ease-linear ml-0",
        notActive: "fixed w-[70%] h-screen top-0 bg-slate-950 border-r border-slate-900 duration-200 ease-linear ml-[-100%]"
    }
  }
  return (
    <nav className={state ? style.nav.active : style.nav.notActive}>
      <div className="w-full p-5">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-green font-bold text-3xl hover:opacity-70 duration-150 ease-linear cursor-pointer">
            CRIPTOS.
          </h1>
          <IoCloseSharp 
            className="text-white hover:text-green duration-150 ease-linear cursor-pointer" 
            size={35}
            onClick={onClick}
          />
        </div>
        <div className="pt-10 uppercase">
            <ul className="flex flex-col gap-4 text-white font-semibold">
                <li className="p-3 border-b border-neutral-700 hover:bg-white hover:text-green duration-150 ease-linear cursor-pointer">
                    Home
                </li>
                <li className="p-3 border-b border-neutral-700 hover:bg-white hover:text-green duration-150 ease-linear cursor-pointer">
                    Company
                </li>
                <li className="p-3 border-b border-neutral-700 hover:bg-white hover:text-green duration-150 ease-linear cursor-pointer">
                    Account
                </li>
                <li className="p-3 border-b border-neutral-700 hover:bg-white hover:text-green duration-150 ease-linear cursor-pointer">
                    Criptos
                </li>
                <li className="p-3 border-b border-white bg-white text-neutral-800 duration-150 cursor-pointer rounded-md
                hover:scale-[1.02] ease-in-out">
                    Get Started
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
};

export default Mobile;
