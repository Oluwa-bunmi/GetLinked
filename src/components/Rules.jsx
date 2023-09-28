import guide from "../assets/ruleVector.png";
import whiteStar from "../assets/whiteStar.png";
const Rules = () => {
  return (
    <section className="bg-secondLens py-8 bg-cover bg-center border-b border-[#ffffff2e] text-white grid lg:grid-cols-2 gap-8 items-center px-5 md:px-20 layout">
      <div className="flex justify-center lg:justify-start">
        <img
          src={guide}
          alt="illustrator"
          className="lg:order-2 w-[360px] lg:w-[664px]"
        />
      </div>
      <div className="flex flex-col lg:order-1 relative">
        <img
          src={whiteStar}
          alt="Star"
          className="w-3 lg:w-5 star absolute top-[-49%] sm:top-[-140%] right-[90%] xl:right-[55%] xl:-top-[13%]"
        />
        <h1 className="leading-[36px] md:leading-[42px] text-xl text-center lg:text-left md:text-[32px] clash font-bold ">
          Rules and
        </h1>
        <h1 className="leading-[36px] md:leading-[42px] text-xl text-center lg:text-left md:text-[32px] clash font-bold text-[#D434FE] ">
          Guidelines
        </h1>
        <div className="flex justify-end xl:hidden mb-1">
          <img
            src={whiteStar}
            alt="Star"
            className="w-3 lg:w-5 ml-[12%] star"
          />
        </div>
        <p className="font-mont text-center lg:text-left text-[13px] md:text-[14px] leading-[27px]">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
        <div className="flex justify-start lg:justify-end">
          <img src={whiteStar} alt="Star" className="w-3 lg:w-5 star" />
        </div>
      </div>
    </section>
  );
};

export default Rules;
