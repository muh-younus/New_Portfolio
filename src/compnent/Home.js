import { Link } from "react-router-dom"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative">
      {/* Background blur elements */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 flex items-center min-h-screen p-6 md:p-20">
        <div className="max-w-4xl space-y-8">
          {/* Main content */}
          <div className="space-y-4">
            <p className="text-purple-300 text-lg font-medium animate-pulse">Hello there! 👋</p>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              I am{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Muhammad Younus
              </span>
            </h1>
            <p className="text-slate-300 text-xl md:text-2xl leading-relaxed max-w-2xl">
            I’m a developer who loves building websites and apps using the latest technologies
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/about"
              className="group flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
            >
              Learn More About Me
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              to="/"
              className="flex items-center gap-2 border-2 border-purple-400 text-purple-300 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300"
            >
              Get In Touch
              <Mail className="w-5 h-5" />
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-purple-400 transition-colors hover:scale-110 transform">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors hover:scale-110 transform">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-400 hover:text-pink-400 transition-colors hover:scale-110 transform">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
