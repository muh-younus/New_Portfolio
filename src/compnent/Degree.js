import React from 'react';
import { Link } from 'react-router-dom';
function Degree({isOpen}) {
  return (
    <section className={`py-20 bg-gradient-to-br  from-slate-900 via-purple-900 to-slate-900 ${isOpen?'w-[1300px]':'w-full'}`}>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-white text-center mb-8">
          <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="space-y-6">
          {/* Bachelor */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Bachelor's Degree</h3>
            <p className="text-purple-300">Computer Science</p>
            <p className="text-slate-400">2020 - 2024</p>
          </div>

          {/* FSc */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white">FSc (Faculty of Science)</h3>
            <p className="text-purple-300">Pre-Engineering</p>
            <p className="text-slate-400">2018 - 2020</p>
          </div>

          {/* Matric */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h3 className="text-xl font-semibold text-white">Matriculation</h3>
            <p className="text-purple-300">Science Group</p>
            <p className="text-slate-400">2016 - 2018</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Degree;


