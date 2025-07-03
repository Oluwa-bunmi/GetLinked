import { motion } from "framer-motion";
import { judgingCriteria } from "../constants/data";
import key from "../assets/keyVector.png";
import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";

const Attributes = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.4,
        duration: 0.4,
      },
    },
  };

  const itemdisplay = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      duration: 0.5,
    },
  };
  return (
    <section className="grid gap-6 lg:grid-cols-2 items-center bg-cover bg-center bg-secondLens text-white py-8 px-5 md:px-20 layout">
      <div className="relative">
        <div className="flex justify-center lg:justify-start">
          <img
            src={purpleStar}
            alt="star"
            className="w-3 lg:w-5 animate-pulse"
          />
        </div>
        {/* linearCircle */}
        <div className="hidden linearCircle lg:block absolute left-[13%] bg-buttonGradient w-[100px] h-[100px] rounded-full"></div>
        <div className="flex justify-center lg:justify-start">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", duration: 2.5 }}
            viewport={{ once: true }}
            src={key}
            alt="illustration"
            className="relative w-[332px] lg:w-[490px]"
          />
        </div>
        <div className="hidden lg:flex justify-end">
          <img src={whiteStar} alt="star" className="animate-pulse w-5" />
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center lg:text-left">
        <motion.ul
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-mont text-sm flex gap-3 flex-col"
        >
          <li className="leading-[36px] md:leading-[42px] text-lg md:text-[32px] clash font-bold">
            Judging Criteria
            <span className="block  text-[#D434FE]">Key attributes</span>
          </li>
          {judgingCriteria.map((item, i) => (
            <motion.li variants={itemdisplay} key={i}>
              <span className="text-secondary">{item.headline}</span>
              {item.content}
            </motion.li>
          ))}
          <li className="lg:hidden flex justify-end">
            <img src={whiteStar} alt="star" className="w-3 animate-pulse" />
          </li>
          <li>
            <button className="buttonGradient rounded-[4px] w-[172px] h-[53px] border-none">
              Read More
            </button>
          </li>
        </motion.ul>
      </div>
    </section>
  );
};

export default Attributes;
