

function Project({ isOpen }) {
 

  return (
    <div
      className={`bg-gray-900 min-h-screen px-4 py-10 text-white bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 ${
        isOpen ? "lg:w-[calc(100vw-256px)]" : "w-full"
      } transition-all duration-500 ease-in-out`}
    >
      <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
      <hr className="h-0.5 w-[200px] bg-white mx-auto mb-12" />
      <div className={`max-w-screen-xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-8`}>
        {/* Project 1 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P1" alt="Project 1" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-1</div>
            <p className="text-gray-500 text-sm">A brief description of Project 1.</p>
          </div>
        </div>
        {/* Project 2 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P2" alt="Project 2" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-2</div>
            <p className="text-gray-500 text-sm">A brief description of Project 2.</p>
          </div>
        </div>
        {/* Project 3 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P3" alt="Project 3" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-3</div>
            <p className="text-gray-500 text-sm">A brief description of Project 3.</p>
          </div>
        </div>
        {/* Project 4 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P4" alt="Project 4" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-4</div>
            <p className="text-gray-500 text-sm">A brief description of Project 4.</p>
          </div>
        </div>
        {/* Project 5 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P5" alt="Project 5" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-5</div>
            <p className="text-gray-500 text-sm">A brief description of Project 5.</p>
          </div>
        </div>
        {/* Project 6 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P6" alt="Project 6" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-6</div>
            <p className="text-gray-500 text-sm">A brief description of Project 6.</p>
          </div>
        </div>
        {/* Project 7 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P7" alt="Project 7" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-7</div>
            <p className="text-gray-500 text-sm">A brief description of Project 7.</p>
          </div>
        </div>
        {/* Project 8 */}
        <div className="w-full bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/placeholder.svg?height=48&width=48&text=P8" alt="Project 8" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-8</div>
            <p className="text-gray-500 text-sm">A brief description of Project 8.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Project
