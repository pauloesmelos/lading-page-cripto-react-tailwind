import React from 'react';
import {
    FaFacebookSquare,
    FaGithubSquare,
    FaTwitterSquare,
    FaWhatsappSquare,
    FaYoutubeSquare
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-slate-950">
      <div className="w-full max-w-[1200px] px-5 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-24">
            <div className="flex flex-col gap-5">
                <h1 className="text-4xl font-bold text-green">
                    CRIPTOS.
                </h1>
                <p className="text-neutral-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum, quam accusantium voluptatum dolor inventore.
                </p>
                <div className="flex items-center gap-6">
                    <FaFacebookSquare size={33} className="text-white cursor-pointer hover:scale-[1.1] duration-150 ease-linear hover:text-emerald-500" />
                    <FaYoutubeSquare size={33} className="text-white cursor-pointer hover:scale-[1.1] duration-150 ease-linear hover:text-emerald-500" />
                    <FaTwitterSquare size={33} className="text-white cursor-pointer hover:scale-[1.1] duration-150 ease-linear hover:text-emerald-500" />
                    <FaGithubSquare size={33} className="text-white cursor-pointer hover:scale-[1.1] duration-150 ease-linear hover:text-emerald-500" />
                    <FaWhatsappSquare size={33} className="text-white cursor-pointer hover:scale-[1.1] duration-150 ease-linear hover:text-emerald-500" />
                </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-16 col-span-2">
                <div className="text-white">
                    <h3 className="text-neutral-400 font-bold text-lg">
                        Solutions
                    </h3>
                    <ul  className="flex flex-col gap-4">
                        <li className="mt-6">
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Analytics
                            </a>
                        </li>
                        <li>
                            <a
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Marketing
                            </a>
                        </li>
                        <li>
                            <a
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Commerce
                            </a>
                        </li>
                        <li>
                            <a
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Insights
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="text-neutral-400 font-bold text-lg">
                        Support
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li className="mt-6">
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Pricing
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Documentation
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Guides
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                API Status
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="text-neutral-400 font-bold text-lg">
                        Company
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li className="mt-6">
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Jobs
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Press
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Careers
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="text-white">
                    <h3 className="text-neutral-400 font-bold text-lg">
                        Legal
                    </h3>
                    <ul className="flex flex-col gap-4">
                        <li className="mt-6">
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Claim
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Policy
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Terms
                            </a>
                        </li>
                        <li>
                            <a 
                                href="#" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-green duration-150 ease-linear"
                            >
                                Careers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;