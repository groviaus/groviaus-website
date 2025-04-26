import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between py-8 px-4 sm:px-6">
      {/* Mobile menu button */}
      <button
        className="sm:hidden p-2 rounded-md hover:bg-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Desktop Navigation */}
      <div className="hidden sm:flex items-center gap-10">
        <Link
          to="#"
          className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
        >
          Home
        </Link>
        <Link
          to="#"
          className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
        >
          Portfolio
        </Link>
        <Link
          to="#"
          className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
        >
          Blog
        </Link>
      </div>

      {/* Logo - Centered */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mr-1.5"></div>
            <span className="text-xl font-bold tracking-tight">Groviaus</span>
          </div>
        </Link>
      </div>

      {/* Contact Link - Desktop */}
      <Link
        to="/contact"
        className="hidden sm:block text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
      >
        Contact with us
      </Link>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-18 shadow-lg rounded-lg   left-0 right-0  bg-white z-10 sm:hidden">
          <div className="flex flex-col items-center gap-4 py-4">
            <Link
              to="#"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="#"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="#"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact with us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
