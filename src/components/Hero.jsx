import { useEffect, useState } from "react";
import HacktonGuy from "../assets/hackathon_guy.png";
import HacktonChain from "../assets/hackathon_chain.png";
import HacktonCreative from "../assets/hackathon_creative.png";
import Line from "../assets/border_line.png";
import HacktonStar from "../assets/hackathon_star.png";
import circular from "../assets/circular.png";
import whiteStar from "../assets/whiteStar.png";
import "../assets/fonts/fonts.css";
import { Link } from "react-router-dom";

const Hero = () => {
  const [remainingTime, setRemainingTime] = useState(getTimeRemaining());
  useEffect(() => {
    const shineInterval = setInterval(() => {
      setIsShining((prevIsShining) => !prevIsShining);
    }, 2000);

    return () => {
      clearInterval(shineInterval);
    };
  }, []);
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
    <section id="hero" className="text-center lg:text-left text-white font-mont">
      <section className="bg-firstLens bg-cover bg-center">
        <div className="flex sm:gap-[6px] lg:gap-0 items-start pt-36 justify-center lg:justify-end lg:pr-[2%] mb-4 typewriter">
          <h1 className="italic font-bold text-[14px] sm:text-[19px] md:text-[21px] lg:text-[29px]">
            Igniting a Revolution in
          </h1>
          <div className="flex flex-col items-center">
            <div className="italic font-bold text-[14px] sm:text-[19px] md:text-[21px] lg:text-[29px]">
              HR <span class="type-writer"></span>
            </div>
            <img
              src={Line}
              alt="Curve"
              className="w-[115px] mb-[-10px] lg:w-[253px]"
            />
          </div>
        </div>
        <img
          src={whiteStar}
          alt="Star"
          className="w-3 lg:w-5 ml-[12%] star lg:mb-8 mt-8 mb-0 heroStar"
        />
        <div className="flex justify-end lg:hidden mt pr-[12%] py-2">
          <img
            src={whiteStar}
            alt="Star"
            className="w-3 lg:w-5 ml-[12%] star"
          />
        </div>

        <section className="grid layout gap-16 relative lg:grid-cols-2 z-[10] px-5 md:px-20">
          <div className="flex flex-col justify-center">
            <div className="flex justify-center lg:justify-start items-end text-[28px] md:text-[43px] 2xl:text-[70px] font-bold clash">
              <h1>getlinked Te</h1>
              <span className="flex flex-col-reverse items-center justify-center">
                c
                <img
                  src={HacktonCreative}
                  alt="Hackathon Creative"
                  className="w-[18px] md:w-[34px] 2xl:w-[44px] -mb-4 md:-mb-6 2xl:-mb-8 lg:object-contain"
                />
              </span>
              <h1>h</h1>
            </div>
            <div className="flex justify-center lg:justify-start items-center gap-2">
              <h1 className="text-[28px] md:text-[43px] sm:leading-[61px] 2xl:text-[70px] clash leading-[39px] lg:leading-[69px] 2xl:leading-[90px]">
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
                  className="w-[32px] lg:object-contain"
                />
              </div>
            </div>
            <p className="text-[13px] lg:text-xl text-center lg:text-left">
              Participate in getlinked tech Hackathon 2023 stand a chance to win
              a Big prize
            </p>
            <Link
              to="/register"
              className="flex justify-center lg:justify-start"
            >
              <button className="buttonGradient rounded-[4px] w-[152px] lg:w-[172px] h-[53px] mt-10 mb-8">
                Register
              </button>
            </Link>

            {/* HACKATHON COUNDOWN */}
            <div class="flex mb-8 font-unica items-center justify-center lg:justify-start gap-6">
              <span class="text-3xl md:text-[48px] md:text-4xl uppercase">
                {formatNumber(remainingTime.hours)}
                <span class="text-sm font-mont">h</span>
              </span>
              <span class="text-3xl md:text-[48px] uppercase">
                {formatNumber(remainingTime.minutes)}
                <span class="text-sm font-mont">m</span>
              </span>
              <span class="text-3xl md:text-[48px] md:text-4xl uppercase">
                {formatNumber(remainingTime.seconds)}
                <span class="text-sm font-mont">s</span>
              </span>
            </div>
          </div>
          <img
            src={whiteStar}
            alt="Star"
            className="w-3 lg:hidden block star absolute bottom-[67%] right-[13%] sm:bottom-[76%] md:bottom-[73%] md:right-[29%]"
          />
          <div className="flex">
            <img src={HacktonGuy} alt="Hackathon Guy" />
            {/* <div className="round absolute right-[76px] top-[336px] md:top-[332px] md:right-[63px]">
              <img src={circular} alt="Hackathon Glow" className="star" />
            </div> */}
          </div>
        </section>
      </section>
    </section>
  );
};

export default Hero;
