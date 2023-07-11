import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="flex items-center justify-center py-4">
      <ul className="flex space-x-6 relative z-10">
        <li>
          <Link href="/">
            <span className="text-gray-600 transition-colors duration-300 hover:text-gray-900 cursor-pointer text-xl">HOME</span>
          </Link>
        </li>
        <li className="relative">
        <Link href="/recipes">
          <span
            className={`text-gray-600 transition-colors duration-300 hover:text-gray-900 cursor-pointer text-xl ${
              showDropdown ? 'active' : ''
            }`}
            onClick={toggleDropdown}
          >
            RECIPES
          </span>
          </Link>
          {/*
          <div className={`dropdown-menu ${showDropdown ? 'active' : ''}`}>
            <ul className="mt-2 space-y-2 bg-white rounded-md shadow-md">
              <li className="dropdown-item">
                <Link href="/recipes/meals">
                  <span className="block px-4 py-2 cursor-pointer">MEALS</span>
                </Link>
              </li>
              <li className="dropdown-item">
                <Link href="/recipes/snacks">
                  <span className="block px-4 py-2 cursor-pointer">SNACKS</span>
                </Link>
              </li>
            </ul>
          </div>
          */}
        </li>
        <li>
          <Link href="/about">
            <span className="text-gray-600 transition-colors duration-300 hover:text-gray-900 cursor-pointer text-xl">ABOUT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
