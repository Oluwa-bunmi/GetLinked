import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";
import mark from "../assets/listImg.png";
import policyVector from "../assets/policyVector.png";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
    <section className="relative font-mont grid gap-16 lg:grid-cols-2 items-center bg-cover bg-center bg-secondLens text-white py-16 px-5 md:px-20 layout text-center lg:text-left">
      <div>
        <div className="lg:hidden flex justify-end">
          <img src={whiteStar} alt="star" className="star w-3" />
        </div>
        <div className="flex gap-[7%] items-start justify-center lg:justify-start">
          <h2 className="text-xl md:text-[32px] font-bold clash">
            Privacy Policy and
          </h2>
          <img
            src={whiteStar}
            alt="star"
            className="star hidden lg:block w-5"
          />
        </div>
        <h2 className="text-xl md:text-[32px] font-bold clash text-primary my-4">
          Terms
        </h2>
        <p className="text-[12px] md:text-sm">
          Last updated on September 12, 2023
        </p>
        <div className="flex justify-end mb-4">
          <img
            src={purpleStar}
            alt="star"
            className="star hidden lg:block w-5 mr-[-17%] object-contain"
          />
        </div>
        <p className="lg:mb-10 text-[12px] md:text-sm">
          Below are our privacy & policy, which outline a lot of goodies. it’s
          our aim to always take of our participant
        </p>
        <div className="flex justify-end mb-7">
          <img src={purpleStar} alt="star" className="star w-3 lg:hidden" />
        </div>
        <div className="border border-primary sm:p-10 p-4">
          <p className="text-[13px] md:text-sm leading-[21px] md:leading-[30px] py-4">
            At getlinked tech Hackathon 1.0, we value your privacy and are
            committed to protecting your personal information. This Privacy
            Policy outlines how we collect, use, disclose, and safeguard your
            data when you participate in our tech hackathon event. By
            participating in our event, you consent to the practices described
            in this policy.
          </p>
          <h2 className="text-[13px] md:text-[16px] text-primary font-bold text-left">
            Licensing Policy
          </h2>
          <p className="md:text-sm text-[12px] md:leading-[30px] leading-[21px] text-left">
            Here are terms of our Standard License:
          </p>
          <div className="flex gap-3 items-start py-4 text-left">
            <img src={mark} alt="list terms" className="md:mt-[7px]" />
            <span className="md:text-sm text-[12px] md:leading-[30px] leading-[21px] text-left">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </span>
          </div>
          {/* <div className="flex gap-[8px] md:gap-3 items-start py-4">
            <img src={mark} alt="list terms" className="md:mt-[10px]" />
            <p className="md:text-sm text-[12px] md:leading-[30px] leading-[21px]">
              The Standard License grants you a non-exclusive right to navigate
              and register for our event
            </p>
          </div> */}
          <div className="flex gap-3 items-start text-left">
            <img src={mark} alt="list terms" className="md:mt-[7px]" />
            <p className="md:text-sm text-[12px] leading-[21px] md:leading-[30px]">
              You are licensed to use the item available at any free source
              sites, for your project developement
            </p>
          </div>
          <Link to="/" className="flex justify-center mt-4">
            <button className="buttonGradient rounded-[4px] md:w-[172px] md:h-[53px] h-[41px] w-[150px] border-none">
              Read More
            </button>
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center lg:justify-start">
        <img
          src={policyVector}
          alt="policyVector"
          className="relative w-[300px] lg:w-full"
        />
        <img
          src={whiteStar}
          alt="star"
          className="star w-3 lg:w-5 absolute sm:bottom-[32%] sm:right-[39%] bottom-[34%] right-[33%] lg:right-[18%] lg:bottom-[68%] 2xl:bottom-[77%] 2xl:right-[18%] policyStar"
        />
        <img
          src={purpleStar}
          alt="star"
          className="star w-3 absolute lg:w-5 left-[12%] bottom-[31%] sm:bottom-[32%] sm:left-[27%] lg:hidden"
        />
        <img
          src={whiteStar}
          alt="star"
          className="star w-3 absolute lg:w-5 bottom-[12%] left-[23%] sm:left-[36%] lg:left-[60%] lg:bottom-[34%]"
        />
        <img
          src={whiteStar}
          alt="star"
          className="star w-3 absolute lg:w-5 bottom-[10%] left-[74%] md:left-[68%] lg:bottom-[30%] lg:left-[91%] 2xl:left-[94%] 2xl:bottom-[23%] privacyStar"
        />
      </div>
    </section>
  );
};

export default Policy;
