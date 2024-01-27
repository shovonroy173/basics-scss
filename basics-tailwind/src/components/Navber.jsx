import logo from "../assets/logo.jpg";
import SchemaIcon from "@mui/icons-material/Schema";
import LanguageIcon from "@mui/icons-material/Language";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from "react";
const Navber = () => {
    const [isOpen , setIsOpen] = useState(false);
    const toggleMenu = ()=>{
        setIsOpen(!isOpen);
    };
  return (
    <>
    <div className="flex items-center mx-auto justify-between px-8 py-4">
      <div className="flex items-center ">
        <div className="mr-10">
          <a href="/" className="flex items-center mx-auto">
            <img src={logo} alt="logo" />
            <p className="text-primary font-extrabold text-2xl ml-4">XYZ</p>
          </a>
        </div>
        <div className="hidden lg:flex items-center mx-auto ">
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md ">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>{" "}
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>{" "}
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>{" "}
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex items-center  text-primary font-semibold text-md " >
        <div className="flex items-center mr-6">
          <LanguageIcon />
          <p>Language</p>
        </div>
        <button className="bg-secondary py-2 px-3 transition-all duration-300 focus:text-white focus:rounded-lg">
          <p>Sign Up</p>
        </button>
      </div>
      {/* menu btn on tablet and mobile screen */}
      <div className="lg:hidden ">
      <button onClick={toggleMenu} className="transition-all duration-1000 focus:text-secondary" >
      {isOpen? (<CloseIcon className="text-primary font-extrabold"/>)  : (<MenuIcon className="text-primary font-extrabold "/>) }
      </button>
      </div>
    </div>
    <div className={` py-8 space-y-6 bg-secondary ${isOpen? "flex-col":"hidden"}`}>
    <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
          <div className="mx-4">
            <a href="overview" className="flex items-center mx-auto text-primary font-semibold text-md">
              <SchemaIcon />
              <p>Overview</p>
            </a>
          </div>
          <div className="flex items-center  text-primary font-semibold text-md " >
        <div className="flex items-center mr-6">
          <LanguageIcon />
          <p>Language</p>
        </div>
        <button className="bg-primary text-white py-2 px-3 transition-all duration-300 focus:bg-white focus:text-primary focus:rounded-lg">
          <p>Sign Up</p>
        </button>
      </div>
    </div>

    </>
  );
};

export default Navber;
