import Navbar from "../components/Navbar";
import { PiStarFourFill } from "react-icons/pi";
import "../assets/fonts/fonts.css";
import HacktonGuy from "../assets/hackathon_guy.png";
import HacktonChain from "../assets/hackathon_chain.png";
import HacktonCreative from "../assets/hackathon_creative.png";
import HacktonStar from "../assets/hackathon_star.png";
import HacktonIdea from "../assets/hackathon_idea.png";
import Line from "../assets/border_line.png";
import circular from "../assets/circular.png";

import { useEffect, useState } from "react";
const Home = () => {
  // bg-[#150E28]
  const [remainingTime, setRemainingTime] = useState(getTimeRemaining());

  // Calculate the time remaining until November 18
  function getTimeRemaining() {
    const targetDate = new Date("2023-11-18");
    const currentDate = new Date();
    const timeRemaining = targetDate - currentDate;

    if (timeRemaining <= 0) {
      // If the target date has passed, return zero time
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    const seconds = Math.floor((timeRemaining / 1000) % 60);
    const minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
    const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);

    return {
      hours,
      minutes,
      seconds,
    };
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRemainingTime(getTimeRemaining());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  // Function to add leading zeros to single-digit values
  function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
  }
  return (
    <>
      {/* <div className="absolute z-[-1] top-[-450px] left-[-70px]">
            <img src={lens} alt="Hackathon Lens" />
          </div> */}
      <Navbar />
      <section className="primaryGradient text-center lg:text-left text-white font-mont">
        <section className="bg-firstLens bg-cover bg-center">
          <div className="flex justify-center lg:justify-end xl:px-10 pt-36">
            <h1 className="italic font-bold text-[15px] lg:text-[31px]">
              Igniting a Revolution in HR <span class="type-writer"></span>
            </h1>
          </div>
          <div className="flex justify-end px-10 mb-8 xl:mb-16">
            <img src={Line} alt="Curve" className="w-[115px] lg:w-[253px]" />
          </div>
          <section className="grid gap-16 xl:gap-0 relative xl:grid-cols-[50%_50%] items-center z-[10] px-5 md:px-20">
            <div className="flex flex-col">
              {/* sm:leading-[61px] leading-[39px] lg:leading-[98.4px] */}
              <div className="flex justify-center xl:justify-start items-end text-[28px] sm:text-[45px] lg:text-[70px] font-bold clash">
                <h1>getlinked Te</h1>
                <span className="flex flex-col-reverse">
                  c
                  <img
                    src={HacktonCreative}
                    alt="Hackathon Creative"
                    className="w-[18px] lg:w-[53px] -mb-4 sm:-mb-6 xl:-mb-8"
                  />
                </span>
                <h1>h</h1>
              </div>
              <div className="flex justify-center xl:justify-start items-center gap-2 flex-nowrap">
                <h1 className="text-[28px] sm:text-[45px] sm:leading-[61px] lg:text-[70px] clash leading-[39px] lg:leading-[98.4px]">
                  Hackathon <span className="text-[#D434FE]">1.0</span>
                </h1>
                <div className="flex">
                  <img
                    src={HacktonChain}
                    alt="Hackathon Chain"
                    className="w-[32px] lg:w-[53px]"
                  />
                  <img
                    src={HacktonStar}
                    alt="Hackathon Star"
                    className="w-[32px]"
                  />
                </div>
              </div>
              <p className="text-[13px] lg:text-xl text-center xl:text-left">
                Participate in getlinked tech Hackathon 2023 stand a chance to
                win a Big prize
              </p>
              <div className="flex justify-center xl:justify-start">
                <button
                  onClick={() => {
                    window.location.href = "/register";
                  }}
                  className="buttonGradient rounded-[4px] w-[152px] lg:w-[172px] h-[53px] mt-10 lg:mb-14 mb-8"
                >
                  Register
                </button>
              </div>
              <div className="flex justify-center lg:justify-start font-unica gap-5">
                <h1 className="flex items-end">
                  <span className="text-[48px] lg:text-[64px]">
                    {formatNumber(remainingTime.hours)}
                  </span>
                  <span className="font-mont text-[14px]"> H</span>
                </h1>
                <h1 className="flex items-end">
                  <span className="text-[48px] lg:text-[64px]">
                    {formatNumber(remainingTime.minutes)}
                  </span>
                  <span className="font-mont text-[14px]"> M</span>
                </h1>
                <h1 className="flex items-end">
                  <span className="text-[48px] lg:text-[64px]">
                    {formatNumber(remainingTime.seconds)}
                  </span>
                  <span className="font-mont text-[14px]"> S</span>
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <img
                src={HacktonGuy}
                alt="Hackathon Guy"
                width="100%"
                className=""
              />
              <div className="round absolute right-[42px] lg:top-[467px] xl:!top-[39px] xl:!right-[99px] top-[281px] sm:right-[76px]">
                <img
                  src={circular}
                  alt="Hackathon Glow"
                  className="w-[500px]"
                />
              </div>
            </div>
          </section>
        </section>
      </section>
      {/* CODE FOR SECOND SECTION */}
      <section className="primaryGradient text-white grid gap-8 xl:gap-0 xl:grid-cols-2 py-8 items-center border-y border-white px-5 md:px-20">
        <div className="flex">
          <div>
            <PiStarFourFill className="text-xl star mt-20 sm:mt-[11rem] lg:mt-[14rem]" />
          </div>
          <img src={HacktonIdea} alt="Hackathon Idea" width="100%" />
        </div>
        <div className="">
          <h1 className="leading-[36px] md:leading-[42px] text-xl text-center xl:text-left md:text-[32px] clash font-bold ">
            Introduction to getlinked
          </h1>
          <div className="flex justify-end">
            <PiStarFourFill className="text-xl star !text-right" />
          </div>
          <h1 className="leading-[36px] md:leading-[42px] text-xl text-center xl:text-left md:text-[32px] clash font-bold text-[#D434FE] ">
            tech Hackathon 1.0
          </h1>
          <p className="font-mont text-center xl:text-left text-[13px] md:text-[14px] leading-[27px]">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </div>
      </section>
      {/* CODE FOR THIRD SECTION */}
    </>
  );
};

export default Home;
