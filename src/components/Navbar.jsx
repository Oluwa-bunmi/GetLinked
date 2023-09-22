import { Link, NavLink } from "react-router-dom";
import logo from "../assets/getlinked.png";
import menu from "../assets/menu.png";
import exit from "../assets/exit.png";
import { useState } from "react";
const Navbar = () => {
   const [nav, setNav] = useState(false);
   const handleNav = () => {
     setNav(!nav);
   };
  return (
    <nav className="fixed w-full z-[1000] primaryGradient font-mont flex px-5 justify-between items-center pt-8 pb-4 md:px-20 border-b border-white">
      <Link to="/">
        <img src={logo} alt={logo} width="150" />
      </Link>
      <div className="hidden lg:flex gap-28 text-[16px] text-white items-center">
        <ul className="flex gap-10 items-center">
          <li>
            <NavLink>Timeline</NavLink>
          </li>
          <li>
            <NavLink>Overview</NavLink>
          </li>
          <li>
            <NavLink>FAQs</NavLink>
          </li>
          <li>
            <NavLink to="/contact-us">Contact</NavLink>
          </li>
        </ul>
        <button className="buttonGradient rounded-[4px] w-[172px] h-[53px] border-none">
          Register
        </button>
      </div>
      <div className="block lg:hidden">
        {/* <FaBars size={25} onClick={handleNav} className="text-white" /> */}
        <img src={menu} alt="menu" onClick={handleNav} />
      </div>
      {/* Mobile dropdown menu */}
      <div
        className={
          nav
            ? "absolute top-0 right-0 bottom-0 w-full"
            : "absolute right-[-100%]"
        }
      >
        <div className="flex flex-col py-6 menuBg z-10 relative h-screen text-white">
          <div className="flex justify-end">
            {/* <IoMdClose
              size={20}
              className="mr-9 mt-2 borderGradient"
              onClick={handleNav}
            /> */}
            <img src={exit} alt="" onClick={handleNav} className="mr-9 mt-2" />
          </div>

          <ul className="flex gap-6 flex-col pl-12 pt-16">
            <li>
              <NavLink>Timeline</NavLink>
            </li>
            <li>
              <NavLink>Overview</NavLink>
            </li>
            <li>
              <NavLink>FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
            <button className="buttonGradient rounded-[4px] w-[172px] h-[53px]">
              Register
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
