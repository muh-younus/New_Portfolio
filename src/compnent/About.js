import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  const technologies = ["HTML", "CSS", "JavaScript", "React"]

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-purple-700 to-purple-400 h-screen flex items-center justify-center">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-xl p-8 sm:p-10 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800 mb-6">
          My Technologies
        </h1>

        <p className="text-gray-600 text-base sm:text-lg mb-6">
          These are some of the technologies I've been working with recently:
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm sm:text-base font-medium shadow-sm hover:bg-blue-200 transition duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        <Link
          to="/"
          className="inline-block mt-4 text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-sm font-semibold transition duration-200"
        >
          Back to Home
        </Link>
      </div>
    </section>
  )
}

export default About
