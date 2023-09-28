import rewards from "../assets/rewards.png";
import cup from "../assets/cup.png";
import purpleStar from "../assets/purpleStar.png";
import whiteStar from "../assets/whiteStar.png";

const Rewards = () => {
  return (
    <section className="bg-center bg-cover bg-secondLens text-white py-8 px-5 md:px-20 layout">
      <img
        src={purpleStar}
        alt="Star"
        className="star w-3 lg:w-5 lg:mb-4 lg:ml-[10%] object-contain"
      />
      <div className="mb-10 grid lg:justify-end justify-center text-center lg:text-left">
        <h2 className="clash font-bold md:text-[32px] text-xl">Prizes and</h2>
        <div className="flex justify-end lg:hidden">
          <img
            src={purpleStar}
            alt="Star"
            className="star w-3 object-contain"
          />
        </div>
        <h2 className="clash font-bold md:text-[32px] text-xl text-primary lg:mt-3 mb-3 lg:mb-0">
          Rewards
        </h2>
        <div className="lg:flex justify-end hidden">
          <img
            src={purpleStar}
            alt="Star"
            className="star w-5 -mt-3 object-contain"
          />
        </div>
        <p className="font-mont text-[12px] md:text-[16px]">
          Highlight of the prizes or rewards for winners and for participants.
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex justify-center lg:justify-start">
            <img
              src={cup}
              alt="Winner Cup"
              className="w-[400px] lg:w-[548px]"
            />
          </div>
          <div className="flex ml-[34%] mt-4">
            <img src={whiteStar} alt="Star" className="star w-3 lg:w-5" />
          </div>
        </div>
        <div className="relative">
          <img
            src={whiteStar}
            alt="Star"
            className="hidden lg:flex star w-5 mr-[10%]"
          />
          <div className="flex justify-center lg:justify-start">
            <img
              src={rewards}
              alt="Hackathon rewards"
              className="w-[402px] lg:w-[692px]"
            />
          </div>
          <div className="flex justify-end mr-[30%]">
            <img src={whiteStar} alt="Star" className="star w-3 lg:w-5" />
          </div>
          <img
            src={whiteStar}
            alt="Star"
            className="star w-3 lg:w-5 absolute top-[27%] right-[3%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Rewards;
