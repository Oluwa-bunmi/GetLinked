import { Link, NavLink } from "react-router-dom";
import logo from "../assets/getlinked.png";
import menu from "../assets/menu.png";
import exit from "../assets/exit.png";
import { useState } from "react";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const changeColor = () => {
    if (window.scrollY >= 75) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <nav className="fixed bg-transparent border-b border-[#ffffff2e] top-0 h-[70px] lg:h-[80px] left-0 z-[100] ease-in duration-300 w-full overflow-hidden">
      <div
        className={`font-mont flex px-5 justify-between
       items-center md:px-20 h-full layout ${
         color ? "primaryGradient w-full border-none" : ""
       }`}
      >
        <Link to="/">
          <img src={logo} alt={logo} className="w-[150px]" />
        </Link>
        <div className="hidden lg:flex gap-28 text-[16px] text-white items-center">
          <ul className="flex gap-10 items-center">
            <li>
              <a
                href="#timeline"
                className="hover:text-transparent hover:bg-buttonGradient hover:bg-clip-text transition-all"
              >
                Timeline
              </a>
            </li>
            <li>
              <a
                href="#overview"
                className="hover:text-transparent hover:bg-buttonGradient hover:bg-clip-text transition-all"
              >
                Overview
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-transparent hover:bg-buttonGradient hover:bg-clip-text transition-all"
              >
                FAQs
              </a>
            </li>
            <li>
              <NavLink
                to="/contact-us"
                className="hover:text-transparent hover:bg-buttonGradient hover:bg-clip-text transition-all"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <Link to="/register">
            <button className="buttonGradient rounded-[4px] w-[172px] h-[53px] border-none">
              Register
            </button>
          </Link>
        </div>
        <div className="block lg:hidden">
          <img src={menu} alt="menu" onClick={handleNav} />
        </div>
        {/* Mobile dropdown menu */}
        <div
          className={
            nav
              ? "fixed top-0 right-0 w-full menuBg transition ease-in-out flex flex-col py-6 h-screen text-white"
              : "absolute right-[-100%]"
          }
        >
          <div className="flex flex-col py-6 relative h-screen text-white">
            <div className="flex justify-end">
              <img
                src={exit}
                alt="close"
                onClick={handleNav}
                className="mr-9 mt-2"
              />
            </div>

            <ul className="flex gap-6 flex-col pl-12 menuBg h-screen pt-16">
              <li onClick={handleNav}>
                <NavLink>Timeline</NavLink>
              </li>
              <li onClick={handleNav}>
                <NavLink>Overview</NavLink>
              </li>
              <li onClick={handleNav}>
                <NavLink>FAQs</NavLink>
              </li>
              <li onClick={handleNav}>
                <NavLink to="/contact-us">Contact</NavLink>
              </li>
              <Link to="/register" onClick={handleNav}>
                <button className="buttonGradient rounded-[4px] w-[172px] h-[53px]">
                  Register
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
