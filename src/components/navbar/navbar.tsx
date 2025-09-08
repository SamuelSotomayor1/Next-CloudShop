import Link from "next/link";

export default function Navbar() {

  return (
    <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Left column - Logo */}
          <Link
            href="/"
            className="text-3xl font-extrabold text-gray-900 hover:text-blue-600 transition-colors duration-200"
          >
            CloudShop
          </Link>

          {/* Center column - Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <Link
              href="/products"
              className="text-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Productos
            </Link>
            <Link
              href="/contact"
              className="text-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Contacto
            </Link>
            <Link
              href="/about"
              className="text-lg text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Nosotros
            </Link>
          </div>

          {/* Right column - Auth Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-lg font-medium text-gray-700 hover:text-blue-600 hover:scale-105 transition-all duration-200"
            >
              Login
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/register"
              className="text-lg font-semibold text-blue-600 hover:text-blue-800 hover:scale-105 transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
