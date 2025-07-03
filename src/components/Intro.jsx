import { motion } from "framer-motion";
import purpleStar from "../assets/purpleStar.png";
import HacktonIdea from "../assets/hackathon_idea.png";
const Intro = () => {

  return (
    <section
      id="overview"
      className="text-white layout bg-primaryGradient grid gap-16 lg:grid-cols-2 py-8 items-center border-y border-[#ffffff2e] px-5 md:px-20"
    >
      <div className="flex justify-center lg:justify-start gap-10 items-start">
        <img
          src={purpleStar}
          alt="star"
          className="w-3 lg:w-5 animate-pulse mt-20 sm:mt-[11rem] lg:mt-[14rem] object-contain"
        />
        <motion.img
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", duration: 2.5 }}
          viewport={{ once: true }}
          src={HacktonIdea}
          alt="Hackathon Idea"
          className="w-[222px] sm:w-[264px] md:w-[380px]"
        />
      </div>
      <div>
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
          viewport={{ once: true }}
          className="leading-[36px] md:leading-[42px] text-xl text-center lg:text-left md:text-[32px] clash font-medium"
        >
          Introduction to getlinked
        </motion.h1>
        <div className="flex justify-end">
          <img
            src={purpleStar}
            alt="Star"
            className="w-3 lg:w-5 animate-pulse"
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
          viewport={{ once: true }}
          className="leading-[36px] md:leading-[42px] text-xl text-center lg:text-left md:text-[32px] clash font-medium text-[#D434FE] "
        >
          tech Hackathon 1.0
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2.5 }}
          viewport={{ once: true }}
          className="font-mont text-center lg:text-left text-[13px] md:text-[14px] leading-[27px]"
        >
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </motion.p>
      </div>
    </section>
  );
};

export default Intro;
