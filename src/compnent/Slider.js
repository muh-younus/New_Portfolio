import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Home,
  Info,
  FolderKanban,
  FormInput,
  GraduationCap,
  ChevronDown,
} from "lucide-react";

function Slider({ isOpen }) {
  const [openMenu, setOpenMenu] = useState(false);

  const toggle = () => {
    const newState =!openMenu;
    setOpenMenu(newState);

    if(!newState){

      setColor(false)
    }
  };
  const [about, setAbout] = useState(false);

  
  const toggle1 = () => {
    setAbout((prev) => !prev);
  };

  const [projectDropdown , setProjectDropdown] = useState(false);
  const projectToggle = ()=>{

    setProjectDropdown((prev)=>!prev)
  }

  const [color, setColor]=useState(false);
  const changeColor = ()=>{

    setColor(prev => !prev)
    console.log("color")
  }


  return (
    <aside
      className={`flex flex-col h-screen  shadow-2xl  ${
        isOpen
          ? "w-64 shadow-2xl transition-all delay-4    00 duration-500 ease-in-out"
          : "w-0 overflow-hidden"
      }  bg-purple-950 text-white`}
    >
      {console.log("the slide is: ", isOpen)}
      <div className="p-4 text-2xl font-bold border-b border-gray-700">
        Navigation
      </div>
      <nav className="flex-1 py-4">
        <ul className="space-y-1 transition-all delay-400 duration-500">
          <li>
            <button onClick={toggle}>
              <Link
                href="#"
                className="flex items-center hover:text-gray-500 gap-3 px-4 py-2 text-lg hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
              >
                <Home className="h-5 w-5 text-gray-500" />
                Home
                <ChevronDown className={`h-5 w-5 ml-[70px] transition-all duration-500   ${openMenu ? 'rotate-180' : ''} text-gray-500`} />
              </Link>
            </button>

            <ul
              className={`ml-20 mt-4  overflow-hidden transition-all duration-100 ease-in-out
          ${openMenu ? "max-h-30 opacity-100" : "max-h-0 opacity-0"}
        `}
            >
              <Link to="/">
                <li className="hover:text-gray-500">
                    <Link className={color? "text-blue-400": ""} to="/" onClick={changeColor}>Hero-Section</Link>
                </li>
              </Link>
            </ul>
          </li>
          <li className="transition-all delay-400 duration-500">
              <button onClick={toggle1}>
                            <Link
              href="#"
              className="flex  items-center gap-3 px-4 py-2 text-lg hover:text-gray-700 rounded-md mx-2 transition-colors duration-200"
            >
              <Info className="h-5 w-5 text-gray-500" />
             About
              <ChevronDown className={`h-5 w-5 ml-[68px] transition-all duration-500 ${about ? 'rotate-180' : ''} text-gray-500`} />
            </Link>
            </button>

            <ul
              className={`ml-20 mt-4  overflow-hidden transition-all duration-100 ease-in-out
          ${about ? "max-h-30 opacity-100" : "h-0 opacity-0"}
        `}
            >
              <Link to="/">
                <li className="hover:text-gray-500 transition-all delay-400 duration-500"> 
                    <Link className="" to="/about">Skill</Link>
                    </li>
              </Link>
            </ul>
          </li>
          <li>
            <button onClick={projectToggle}>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-lg hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
            >
              <FolderKanban className="h-5 w-5 text-gray-500" />
              <Link to="/project">Project</Link>
              <ChevronDown className={`h-5 transition-all duration-500 w-5 ml-[61px] ${projectDropdown?'rotate-180': ''} text-gray-500`} />
            </Link>
            </button>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-lg hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
            >
              <FormInput className="h-5 w-5  text-gray-500" />
              <Link to="/form">Form</Link>
              <ChevronDown className="h-5 w-5 ml-[75px] text-gray-500" />
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="flex items-center gap-3 px-4 py-2 text-lg hover:bg-gray-700 rounded-md mx-2 transition-colors duration-200"
            >
              <GraduationCap className="h-5 w-5 text-gray-500" />
              <Link to="/degree">Education</Link>
              <ChevronDown className="h-5 w-5 ml-[35px] text-gray-500" />
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
export default Slider;
