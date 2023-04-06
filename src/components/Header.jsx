import React, { useState } from "react";
import { Bars3Icon, BookOpenIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  let [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="h-12 mx-auto mb-12">
      <div className="hidden w-full md:flex justify-between items-center bg-gray-300 md:px-16 md:py-4">
        <Link to="/" className="hidden md:flex items-center">
          <BookOpenIcon className="h-6 w-6 md:h-8 md:w-8 mt-2 text-sky-500" />
          <h1 className="md:text-2xl font-bold ml-2">
            Gyani<span className="text-sky-500">Manush</span>
          </h1>
        </Link>
        <ul className="hidden md:flex">
          <li className="ml-4">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Home
            </NavLink>
          </li>
          <li className="ml-4">
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              Books
            </NavLink>
          </li>
          <li className="ml-4">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "active" : "default")}
            >
              About us
            </NavLink>
          </li>
        </ul>
      </div>

      <div
        className={`md:hidden flex justify-between px-8 bg-gray-200 rounded-sm py-4 z-10 ${
          menuOpen ? "mb-96 p-2 shadow-xl" : ""
        }`}
      >
        <div className="">
          <Link to="/" className="flex justify-center items-center">
            <BookOpenIcon className="h-6 w-6 md:h-10 md:w-10 mt-1 text-sky-500" />
            <h1 className="text-xl md:text-2xl font-bold ml-2">
              Gyani<span className="text-sky-500">Manush</span>
            </h1>
          </Link>
          <ul className={menuOpen ? "pt-4" : "hidden"}>
            <li className="ml-4">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Home
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink
                to="/books"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                Books
              </NavLink>
            </li>
            <li className="ml-4">
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "default")}
              >
                About us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="">
          {menuOpen ? (
            <XMarkIcon
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-6 w-6 md:h-10 md:w-10 text-sky-500 mt-1"
            />
          ) : (
            <Bars3Icon
              onClick={() => setMenuOpen(!menuOpen)}
              className="h-6 w-6 md:h-10 md:w-10 mt-1 text-sky-500"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
