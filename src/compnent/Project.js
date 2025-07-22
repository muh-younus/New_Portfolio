function Project({isOpen}) {
  return (
    <div className={`bg-gray-900 min-h-screen px-4 bg-gradient-to-br  from-slate-900 via-purple-900 to-slate-900 ${isOpen?'w-[1300px]':'w-full'}  py-10 text-white`}>
      <h1 className="text-3xl font-bold text-center mb-4">Projects</h1>
      <hr className="h-0.5 w-[200px] bg-white mx-auto mb-12" />

      <div className={` ${isOpen?'grid grid-cols-2 w-[1300px]':'w-full flex flex-wrap justify-center '} gap-6  sm:gap-8`}>
        {/* Project 1 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="Project 1" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-1</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="Project 2" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-2</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="Project 3" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-3</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="Project 4" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-4</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap mt-16 justify-center gap-6 sm:gap-8">
        {/* Project 5 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="Project 5" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-5</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>

        {/* Project 6 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="Project 6" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">Project-6</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>

        {/* Project 7 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="ChitChat" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">ChitChat</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>

        {/* Project 8 */}
        <div className="w-full sm:w-[300px] bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex items-center gap-4 p-5 sm:p-6">
          <div className="shrink-0">
            <img className="w-12 h-12" src="/img/favicon.ico" alt="ChitChat" />
          </div>
          <div>
            <div className="text-xl font-semibold text-black">ChitChat</div>
            <p className="text-gray-500 text-sm">You have a new message!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
