import Navbar from "../components/Navbar";
import "../assets/fonts/fonts.css";
import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";
import faqVector from "../assets/faqVector.png";
import Faq from "../components/Faq";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Rules from "../components/Rules";
import Attributes from "../components/Attributes";
import Rewards from "../components/Rewards";
import Sponsors from "../components/Sponsors";
import Policy from "../components/Policy";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <>
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
        <motion.div className="relative">
          <div className="flex justify-center lg:justify-start">
            <motion.img
              src={faqVector}
              alt="illustration"
              className="w-[327px] lg:w-[741px]"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", duration: 3 }}
              viewport={{ once: true }}
            />
          </div>
          <div className="flex justify-end">
            <img
              src={whiteStar}
              alt="Star"
              className="w-3 lg:w-5 animate-pulse"
            />
          </div>
          <img
            src={purpleStar}
            alt="Star"
            className="w-3 lg:w-5 absolute flex left-[48%] top-[4%] animate-pulse"
          />
          <img
            src={whiteStar}
            alt="Star"
            className="w-3 lg:w-5 absolute flex left-[17%] top-[54%] animate-pulse"
          />
          <img
            src={purpleStar}
            alt="Star"
            class="w-3 lg:w-5 absolute flex left-[24%] top-[24%] animate-pulse"
          />
        </motion.div>
        {/* <div className="w-full relative">
          <img src={faqVector} alt="faq" className="w-[264px] mx-auto relative z-10 opacity-[1] transform-none"/>
        <img src={purpleStar} alt="star" className="absolute flex left-[48%] top-[4%] tab:w-5 w-3 animate-pulse duration-500"/>
          <img src={whiteStar} alt="star" className="absolute flex left-[17%] top-[54%] tab:w-5 w-3 animate-pulse duration-500"/>

          </div> */}
      </section>
      <Timeline />
      <Rewards />
      <Sponsors />
      <Policy />
      <Footer />
    </>
  );
};

export default Home;
