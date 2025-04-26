import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="relative flex items-center justify-between py-8">
      <div className="flex items-center gap-10">
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

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="flex items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-400 to-blue-500 mr-1.5"></div>
            <span className="text-xl font-bold tracking-tight">Groviaus</span>
          </div>
        </Link>
      </div>

      <Link
        to="/contact"
        className="text-gray-800 hover:text-gray-600 text-sm font-medium tracking-wide"
      >
        Contact with us
      </Link>
    </nav>
  );
}
