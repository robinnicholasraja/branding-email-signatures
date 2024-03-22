"use client";
import Link from "next/link";
import { useToggle } from "../../../util";
import { useEffect } from "react";

const Header = () => {
  const [toggleNavbar, setToggleNavbar, toggleNavbarOff] = useToggle(false);

  const handleOutsideClick = (event: MouseEvent) => {
    toggleNavbarOff(event);
  };
  useEffect(() => {
    const handleClick = (event: MouseEvent) => handleOutsideClick(event);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <>
      <header className="lg:px-16 px-4 bg-white flex flex-wrap items-center py-4 shadow-md">
        <div className="flex-1 flex justify-between items-center">
          <a href="#" className="text-xl">
            Anywhere
          </a>
        </div>

        <label htmlFor="menu-toggle" className="pointer-cursor md:hidden block">
          <svg
            className="fill-current text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <div
          className="hidden md:flex md:items-center md:w-auto w-full"
          id="menu"
        >
          <nav>
            <ul className="md:flex items-center justify-between text-base text-gray-700 pt-4 md:pt-0">
              <li className="relative inline-block text-left">
                <div>
                  <button
                    data-toggle-off
                    type="button"
                    className="inline-flex justify-center items-center w-full px-6 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:bg-gray-700"
                    onClick={setToggleNavbar}
                  >
                    Brands
                    <svg
                      className="w-4 h-4 ml-2 -mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path fillRule="evenodd" d="M10 12l-5-5h10l-5 5z" />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 w-40 mt-1 origin-top-left bg-white divide-y divide-gray-100 rounded-md shadow-lg ${
                      toggleNavbar
                        ? "visible opacity-100"
                        : "opacity-0 invisible"
                    } transition duration-300`}
                  >
                    <div className="py-1">
                      <Link
                        href="/signatures/wr"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 leading-5 rounded-full font-semibold "
                      >
                        Wellreceived
                      </Link>
                      <Link
                        href="/signatures/sf"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 leading-5 rounded-full font-semibold "
                      >
                        Serviceforge
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
