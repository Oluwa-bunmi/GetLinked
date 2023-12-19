import logo from "../assets/getlinked.png";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FiPhoneCall } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";
import { Link } from "react-router-dom";
import purpleStar from "../assets/purpleStar.png";
import whiteStar from "../assets/whiteStar.png";

const Footer = () => {
  return (
    <footer className="bg-[#100B20] text-[12px] md:text-sm py-16 layout relative px-5 md:px-20 text-white font-mont">
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
          <li className="hover:text-primary mb-3">
            <a href="#overview">Overview</a>
          </li>
          <li className="hover:text-primary mb-0 lg:mb-3">
            <a href="#timeline">Timeline</a>
          </li>
          <li className="flex justify-center lg:hidden">
            <img src={whiteStar} alt="star" className="star w-3" />
          </li>
          <li className="hover:text-primary mb-3">
            <a href="#faq">FAQs</a>
          </li>
          <li className="hover:text-primary mb-3">
            <Link to="/register">Register</Link>
          </li>
          <li className="flex gap-4 items-center">
            <p className="text-primary"> Follow us</p>
            <span className="flex gap-3">
              <Link to="https://www.instagram.com/getlinked.ai">
                <BsInstagram />
              </Link>
              <Link to="https://twitter.com/getLinkedai">
                <RiTwitterXFill />
              </Link>
              <Link to="https://web.facebook.com/getLinkedai">
                <FaFacebookF />
              </Link>
              <Link to="https://www.linkedin.com/company/getlinked-ai/">
                <FaLinkedinIn />
              </Link>
            </span>
          </li>
        </ul>
        <ul>
          <li className="text-[16px] text-primary font-semibold mb-3">
            Contact Us
          </li>
          <li className="flex gap-4 items-center mb-0 lg:mb-3">
            <FiPhoneCall size={20} />
            +234 6707653444
          </li>
          <li className="flex justify-end lg:hidden">
            <img src={whiteStar} alt="star" className="star w-3" />
          </li>
          <li className="flex gap-4 items-center  mb-3">
            <HiLocationMarker size={25} />
            27,Alara Street <br /> Yaba 100012 <br /> Lagos State
          </li>
          <li className="lg:flex justify-end hidden">
            <img src={whiteStar} alt="star" className="star w-5" />
          </li>
        </ul>
      </section>
      <div className="flex justify-center mt-9 mb-5">
        <img src={purpleStar} alt="star" className="star w-3 lg:w-5" />
      </div>
      <p className="text-center">All rights reserved. © getlinked Ltd.</p>
      <img
        src={whiteStar}
        alt="star"
        className="star w-3 lg:w-5 absolute top-[19%] left-[1%] md:top-[17%] md:left-[5%] lg:top-[30%] lg:left-[3%] 2xl:left-[1%] footerStar"
      />
      <img
        src={whiteStar}
        alt="star"
        className="star w-5 hidden absolute lg:block top-[17%] right-[31%] footerSecondStar"
      />
    </footer>
  );
};

export default Footer;
