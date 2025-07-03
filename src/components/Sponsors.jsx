import { motion } from "framer-motion";
import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";
import sponsors from "../assets/sponsors.png";
const Sponsors = () => {
  return (
    <section className="text-center relative text-white bg-secondLens py-16 bg-cover bg-center px-5 md:px-20 layout">
      <h1 className="clash text-xl md:text-[32px] font-bold">
        Partners and Sponsors
      </h1>
      <p className="md:text-sm text-[12px] font-mont mb-12 leading-[27px] mt-3">
        Getlinked Hackathon 1.0 is honored to have the following major
        <br className="hidden sm:block" /> companies as its partners and
        sponsors
      </p>
      <img
        src={purpleStar}
        alt="star"
        className="hidden lg:block w-5 ml-[10%] animate-pulse"
      />
      <div className="w-full justify-center">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 2.5 }}
          viewport={{ once: true }}
          src={sponsors}
          alt="sponsors"
          className="lg:w-full"
        />
        <img
          src={purpleStar}
          alt="star"
          className="star w-5 absolute top-[40%] right-[43%] hidden lg:block"
        />
        <img
          src={whiteStar}
          alt="star"
          className="w-5 animate-pulse absolute top-[80%] right-[43%] hidden lg:block"
        />
        <img
          src={whiteStar}
          alt="star"
          className="w-3 animate-pulse absolute lg:hidden bottom-[10%] right-[31%]"
        />
        <img
          src={purpleStar}
          alt="star"
          className="star w-3 lg:hidden absolute top-[56%] right-[80%] sm:top-[37%] sm:right-[87%] md:right-[82%] md:top-[35%]"
        />
      </div>
    </section>
  );
};

export default Sponsors;
