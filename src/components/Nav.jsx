
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import GlobalContext from "../controlstates/GlobalProvider" 

const Nav = () => {
  const { isOpen, setIsOpen, } = useContext(GlobalContext); 

  return (
    <nav className="bg-[#cae3e6] border-b border-gray-200">
      <div className="flex justify-between px-4 py-3">
        {isOpen ? (
          <NavLink className="text-lg font-semibold text-gray-800 hover:text-gray-600" to="/">
            Home Page
          </NavLink>
        ) : (
          <div>
            <NavLink className="text-lg font-semibold text-gray-800 hover:text-gray-600" to="/">
              Home Page
            </NavLink>
            <NavLink className="block text-gray-800 hover:text-gray-600" to="/characters">
              Character List
            </NavLink>
            <NavLink className="block text-gray-800 hover:text-gray-600" to="/locations">
              Location List
            </NavLink>
            <NavLink className="block text-gray-800 hover:text-gray-600" to="/random">
              Random Character
            </NavLink>
          </div>
        )}
        <div className="mr-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:border-[#64748b] focus:border-4 border border-[#64748b] focus:outline-none "
            type="button"
          >
            <svg className="w-10 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
