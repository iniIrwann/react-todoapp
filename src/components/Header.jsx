import React, { useState } from "react";
import "@/index.css";
import logo from "@assets/logo.png";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // Untuk icon hamburger

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white fixed top-0 left-0 shadow-xs right-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex">
          <ul className="flex items-center space-x-6">
            <li>
              <Link to="/" className="hover:text-blue-500">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-500">
                Services
              </Link>
            </li>
            <li>
              <Link to="/use-cases" className="hover:text-blue-500">
                Use Cases
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="hover:text-blue-500">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" className="hover:text-blue-500">
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/quote"
                className="border border-gray-300 rounded-lg px-6 py-2 hover:bg-blue-500 hover:text-white transition"
              >
                Request a quote
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <HiX className="h-8 w-8" />
            ) : (
              <HiMenu className="h-8 w-8" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-xs">
          <ul className="flex flex-col items-center py-4 space-y-4">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setMenuOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/use-cases" onClick={() => setMenuOpen(false)}>
                Use Cases
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setMenuOpen(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </Link>
            </li>
            <li>
              <Link
                to="/quote"
                className="border border-gray-300 rounded-lg px-6 py-2"
                onClick={() => setMenuOpen(false)}
              >
                Request a quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
