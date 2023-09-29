import logo from "../assets/getlinked.png";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import purpleStar from "../assets/purpleStar.png";

const Footer = () => {
  return (
    <footer className="bg-[#100B20] text-sm py-16 layout relative px-5 md:px-20 text-white font-mont">
      <section className="gap-10 grid lg:grid-cols-4">
        <div className="lg:col-span-2 flex flex-col justify-between">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className="w-[150px]" />
            </Link>
            <p className="leading-[21px] mt-3 mb-8 lg:mb-0">
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </p>
          </div>
          <div className="flex items-center py-2">
            <Link className="pr-2"> Terms of Use</Link>
            <Link className="pl-2 border-l-[3px] border-primary">
              Privacy Policy
            </Link>
          </div>
        </div>
        <ul>
          <li className="text-[16px] text-primary font-semibold mb-3">
            Useful Links
          </li>
          <li className=" mb-3">
            <Link to="">Overview</Link>
          </li>
          <li className=" mb-3">
            <Link to="">Timeline</Link>
          </li>
          <li className=" mb-3">
            <Link to="">FAQs</Link>
          </li>
          <li className=" mb-3">
            <Link to="">Register</Link>
          </li>
          <li className="flex gap-4 items-center">
            Follow us
            <span className="flex gap-3">
              <Link to="">
                <BsInstagram />
              </Link>
              <Link to="">
                <RiTwitterXFill />
              </Link>
              <Link to="">
                <FaFacebookF />
              </Link>
              <Link to="">
                <FaLinkedinIn />
              </Link>
            </span>
          </li>
        </ul>
        <ul>
          <li className="text-[16px] text-primary font-semibold mb-3">
            Contact Us
          </li>
          <li className="flex gap-4 items-center  mb-3">
            <FiPhoneCall size={20} />
            +234 6707653444
          </li>
          <li className="flex gap-4 items-center  mb-3">
            <HiLocationMarker size={25} />
            27,Alara Street Yaba 100012 Lagos State
          </li>
        </ul>
      </section>
      <div className="flex justify-center mt-9 mb-5">
        <img src={purpleStar} alt="star" className="star w-3 lg:w-5" />
      </div>
      <p className="text-center">All rights reserved. © getlinked Ltd.</p>
    </footer>
  );
};

export default Footer;
