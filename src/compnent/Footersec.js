import { Link } from "react-router-dom"
import { Facebook, Twitter, Instagram, Heart } from "lucide-react"

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-8  border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h1 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Muhammad Younus
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              Made with <Heart className="w-4 h-4 inline text-red-400" /> © 2025
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6 text-sm">
            <Link to="/" className="hover:text-purple-400 transition-colors duration-300">
              Home
            </Link>
            <Link to="/about" className="hover:text-purple-400 transition-colors duration-300">
              About
            </Link>
            <Link to="/services" className="hover:text-purple-400 transition-colors duration-300">
              Services
            </Link>
            <Link to="/contact" className="hover:text-purple-400 transition-colors duration-300">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-blue-600 transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-blue-400 transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-slate-800 hover:bg-pink-500 transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer