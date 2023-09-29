import Navbar from "../components/Navbar";
import "../assets/fonts/fonts.css";
import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";
import faqVector from "../assets/faqVector.png";
import circular from "../assets/circular.png";
import { useEffect, useState } from "react";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Rules from "../components/Rules";
import Attributes from "../components/Attributes";
import Rewards from "../components/Rewards";
import Sponsors from "../components/Sponsors";
import Policy from "../components/Policy";
import Footer from "../components/Footer";
const Home = () => {
  // bg-[#150E28]
  // const [remainingTime, setRemainingTime] = useState(getTimeRemaining());
  const [isShining, setIsShining] = useState(false);

  return (
    <>
      {/* <div className="absolute z-[-1] top-[-450px] left-[-70px]">
            <img src={lens} alt="Hackathon Lens" />
          </div> */}
      <Navbar />
      <Hero />
      <Intro />
      <Rules />
      <Attributes />
      {/* FAQ SECTION */}
      <section
        id="faq"
        className="px-5 md:px-20 border-y border-[#ffffff2e] grid text-white gap-16 lg:grid-cols-2 items-center bg-secondLens bg-cover pt-20 pb-14 layout"
      >
        <Faq />
        <div className="relative">
          <div className="flex justify-center lg:justify-start">
            <img
              src={faqVector}
              alt="illustration"
              className="w-[327px] lg:w-[741px]"
            />
          </div>
          <div className="flex justify-end">
            <img src={whiteStar} alt="Star" className="w-3 lg:w-5 star" />
          </div>
          <img
            src={purpleStar}
            alt="Star"
            className="w-3 lg:w-5 absolute flex left-[48%] top-[4%] star"
          />
          <img
            src={whiteStar}
            alt="Star"
            className="w-3 lg:w-5 absolute flex left-[17%] top-[54%] star"
          />
          <img
            src={purpleStar}
            alt="Star"
            class="w-3 lg:w-5 absolute flex left-[24%] top-[24%] star"
          />
        </div>
        {/* <div className="w-full relative">
          <img src={faqVector} alt="faq" className="w-[264px] mx-auto relative z-10 opacity-[1] transform-none"/>
        <img src={purpleStar} alt="star" className="absolute flex left-[48%] top-[4%] tab:w-5 w-3 animate-pulse duration-500"/>
          <img src={whiteStar} alt="star" className="absolute flex left-[17%] top-[54%] tab:w-5 w-3 animate-pulse duration-500"/>

          </div> */}
      </section>
      {/* <section className="layout font-mont text-white bg-primaryGradient py-8 px-5 md:px-20 layout">
        <h2 className="font-bold text-[32px] clash text-center">Timeline</h2>
        <p className="text-sm text-center">
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
        <div className="flex items-end">
          <div className="text-center flex-grow basis-0">
            <h2>Hackathon Announcement</h2>
            <p>
              The getlinked tech hackathon 1.0 is formally announced to the
              general public and teams begin to get ready to register
            </p>
          </div>
          <div className="flex items-center flex-grow basis-0 flex-col">
            <img src={lineOne} alt="" />
            <h2 className="bg-buttonGradient rounded-full w-[53px] h-[53px] flex items-center justify-center">
              1
            </h2>
          </div>
          <div className=" flex-grow basis-0">
            <h2>November 18, 2023</h2>
          </div>
        </div>
      </section> */}
      <Rewards />
      <Sponsors />
      <Policy />
      <Footer />
    </>
  );
};

export default Home;
