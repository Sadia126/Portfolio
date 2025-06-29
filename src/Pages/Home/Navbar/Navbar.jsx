import { NavLink } from "react-router-dom";


const Navbar = () => {


    const navLink = <>
    
    <li  className="m-2 md:mr-5 text-lg hover:text-[#c3902c] hover:underline">
        <NavLink to="/">Home</NavLink></li>
    <li  className="m-2 md:mr-5 text-lg hover:text-[#c3902c] hover:underline"><a href="#aboutme">About me</a></li>
    <li  className="m-2 md:mr-5 text-lg hover:text-[#c3902c] hover:underline"><a href="#skill">Skill</a></li>
    <li  className="m-2 md:mr-5 text-lg hover:text-[#c3902c] hover:underline"><a href="#project">Project</a></li>
    <li  className="m-2 md:mr-5 text-lg hover:text-[#c3902c] hover:underline"><a href="#education">Education</a></li>
    <li  className="m-2 md:mr-5 text-lg hover:text-[#c3902c] hover:underline"><a href="#contact">Contact</a></li>

    </>

    return (
        <div className="navbar bg-base-100 md:shadow-xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className=" menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
           {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Umme Sadia Sayti</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className=" menu-horizontal px-1">
        {navLink}
          </ul>
        </div>
     
      </div>
    );
};

export default Navbar;