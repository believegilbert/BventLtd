"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <div className="bg-white shadow-xl">
      <div className="  w-[90%] mx-auto">
        <div className="flex w-full relative items-center justify-between py-4 pb-3">
          {/* logo */}
          <Image
            src="/BventLogo.png"
            alt="Bvent Construction Ltd Logo"
            width={200}
            height={60}
          />

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-8 text-[19px] font-bold text-[#d11d29] mr-3">
            <li
              className="group hover:text-[#95151d] font-normalcursor-pointer relative inline-block font-bold
after:absolute after:left-0 after:-bottom-0.75
after:h-1 after:w-0
after:bg-current
after:transition-all after:duration-300
hover:after:w-full"
            >
              <Link href={""} className="pb-8">
                Company
              </Link>
              {/* dropdown */}
              <div
                className="
      absolute left-[-40] z-50 top-full mt-4
      w-45 bg-gray-200 shadow-2xl
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition duration-200
    "
              >
                <ul className="py-3">
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    About Us
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    DEI Pledge
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Leadership
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    News & Awards
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Blog
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Contact Us
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="group hover:text-[#95151d] font-normalcursor-pointer relative inline-block font-bold
after:absolute after:left-0 after:-bottom-0.75
after:h-1 after:w-0
after:bg-current
after:transition-all after:duration-300
hover:after:w-full"
            >
              <Link href={""} className="pb-8">
                Expertise
              </Link>
              {/* dropdown */}
              <div
                className="
      absolute left-[-40] z-50 top-full mt-4
      w-45 bg-gray-200 shadow-2xl
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition duration-200
    "
              >
                <ul className="py-3">
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Design build
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    PreConstruction
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Prefabrication
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Construction
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="group hover:text-[#95151d] font-normalcursor-pointer relative inline-block font-bold
after:absolute after:left-0 after:-bottom-0.75
after:h-1 after:w-0
after:bg-current
after:transition-all after:duration-300
hover:after:w-full"
            >
              <Link href={""} className="pb-8">
                Portfolio
              </Link>

              {/* dropdown */}
              <div
                className="
      absolute left-[-40] z-50 top-full mt-4
      w-45 bg-gray-200 shadow-2xl
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition duration-200
    "
              >
                <ul className="py-3">
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Education
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Housing
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Institutional
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Mixed-Use
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Work Place
                  </li>
                </ul>
              </div>
            </li>
            <li
              className="group hover:text-[#95151d] font-normalcursor-pointer relative inline-block font-bold
after:absolute after:left-0 after:-bottom-0.75
after:h-1 after:w-0
after:bg-current
after:transition-all after:duration-300
hover:after:w-full"
            >
              <Link href={""} className="pb-8">
                Careers
              </Link>
              {/* dropdown */}
              <div
                className="
      absolute left-[-40] z-50 top-full mt-4
      w-45 bg-gray-200 shadow-2xl
      opacity-0 invisible
      group-hover:opacity-100 group-hover:visible
      transition duration-200
    "
              >
                <ul className="py-3">
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Student & Recent Grad
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Employee Development
                  </li>
                  <li className="px-5 py-2 hover:bg-white font-medium text-gray-500 text-17px">
                    Opportunities
                  </li>
                </ul>
              </div>
            </li>
          </ul>

          {/* Mobile hamburger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden relative w-8 h-8"
          >
            <span className="sr-only">Menu</span>

            {/* top bar */}
            <span
              className={`absolute left-0 top-2 w-8 h-0.5 bg-[#d11d29] transition ${
                open ? "rotate-45 top-6" : ""
              }`}
            ></span>

            {/* middle bar */}
            <span
              className={`absolute left-0 top-4 w-8 h-0.5 bg-[#d11d29] transition ${
                open ? "opacity-0" : ""
              }`}
            ></span>

            {/* bottom bar */}
            <span
              className={`absolute left-0 top-6 w-8 h-0.5 bg-[#d11d29] transition ${
                open ? "-rotate-45 top-4" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile dropdown */}
        {open && (
          <ul className="md:hidden absolute top-30 left-0 bg-white w-full h-full z-50 flex flex-col gap-2 pb-4 font-bold text-[19px] text-[#d11d29] shadow-xl">
            <div className="w-[85%] mx-auto">
            {/* Company */}
            <li className="flex flex-col border-b border-[#f0b6ba]">
              <button
                onClick={() => {setCompanyOpen(!companyOpen); 
                     setExpertiseOpen(false);
                      setPortfolioOpen(false);
                       setCareersOpen(false)
                }}
                className="flex justify-between items-center w-full py-4"
              >
                <span>Company</span>
                <span>
                  {companyOpen ? (
                    <span className="inline-block w-4 h-[2px] bg-[#d11d29]"></span>
                  ) : (
                    <span className="text-[30px]">+</span>
                  )}
                </span>
              </button>

              {companyOpen && (
                <ul className="flex flex-col bg-gray-200 text-[#95151d] font-normal">
                  <li className="px-6 py-2 hover:font-bold">About Us</li>
                  <li className="px-6 py-2 hover:font-bold">DEI Pledge</li>
                  <li className="px-6 py-2 hover:font-bold">Leadership</li>
                  <li className="px-6 py-2 hover:font-bold">News & Awards</li>
                  <li className="px-6 py-2 hover:font-bold">Blog</li>
                  <li className="px-6 py-2 hover:font-bold">Contact Us</li>
                </ul>
              )}
            </li>

            {/* Expertise */}
            <li className="flex flex-col border-b border-[#f0b6ba]">
              <button
                onClick={() => {setExpertiseOpen(!expertiseOpen);
                    setCompanyOpen(false);
                    setPortfolioOpen(false);
                    setCareersOpen(false);
                }
                }
                className="flex justify-between items-center w-full py-4"
              >
                <span>Expertise</span>
                <span>
                  {expertiseOpen ? (
                    <span className="inline-block w-4 h-[2px] bg-[#d11d29]"></span>
                  ) : (
                    <span className="text-[30px]">+</span>
                  )}
                </span>
              </button>

              {expertiseOpen && (
                <ul className="flex flex-col bg-gray-200 text-[#95151d] font-normal">
                  <li className="px-6 py-2 hover:font-bold">Service 1</li>
                  <li className="px-6 py-2 hover:font-bold">Service 2</li>
                  <li className="px-6 py-2 hover:font-bold">Service 3</li>
                </ul>
              )}
            </li>

            {/* Portfolio */}
            <li className="flex flex-col border-b border-[#f0b6ba]">
              <button
                onClick={() => {setPortfolioOpen(!portfolioOpen);
                    setCompanyOpen(false);
                    setExpertiseOpen(false);
                    setCareersOpen(false);
                }}
                className="flex justify-between items-center w-full py-4"
              >
                <span>Portfolio</span>
                <span>
                  {portfolioOpen ? (
                    <span className="inline-block w-4 h-[2px] bg-[#d11d29]"></span>
                  ) : (
                    <span className="text-[30px]">+</span>
                  )}
                </span>
              </button>

              {portfolioOpen && (
                <ul className="flex flex-col bg-gray-200 text-[#95151d] font-normal">
                  <li className="px-6 py-2 hover:font-bold">Project 1</li>
                  <li className="px-6 py-2 hover:font-bold">Project 2</li>
                  <li className="px-6 py-2 hover:font-bold">Project 3</li>
                </ul>
              )}
            </li>

            {/* Careers */}
            <li className="flex flex-col border-b border-[#f0b6ba]">
              <button
                onClick={() => {setCareersOpen(!careersOpen)
                    setCompanyOpen(false);
                    setExpertiseOpen(false);
                    setPortfolioOpen(false);
                }}
                className="flex justify-between items-center w-full py-4"
              >
                <span>Careers</span>
                <span>
                  {careersOpen ? (
                    <span className="inline-block w-4 h-[2px] bg-[#d11d29]"></span>
                  ) : (
                    <span className="text-[30px]">+</span>
                  )}
                </span>
              </button>

              {careersOpen && (
                <ul className="flex flex-col bg-gray-200 text-[#95151d] font-normal">
                  <li className="px-6 py-2 hover:font-bold">Open Positions</li>
                  <li className="px-6 py-2 hover:font-bold">Internships</li>
                </ul>
              )}
            </li>
            </div>
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavBar;
