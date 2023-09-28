import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";
import sponsors from "../assets/sponsors.png";
const Sponsors = () => {
  return (
    <section className="text-center relative text-white bg-secondLens py-8 bg-cover bg-center px-5 md:px-20 layout grid justify-center">
      <h1 className="clash text-xl text-[32px] font-bold">
        Partners and Sponsors
      </h1>
      <p className="md:text-sm text-[12px] font-mont mb-12">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <img
        src={purpleStar}
        alt="Star"
        className="hidden lg:block w-5 ml-[10%] star"
      />
      <div className="w-full flex justify-center">
        <img
          src={sponsors}
          alt="sponsors"
          className="w-[333px] md:w-[500px] lg:w-[1255px]"
        />
      <img
        src={purpleStar}
        alt="Star"
        className="star w-3 lg:hidden absolute"
        />
        </div>
      {/* <img src={purpleStar} alt="Star" className="star w-3 lg:w-5 absolute" />
      <img src={whiteStar} alt="Star" className="star w-3 lg:w-5 absolute" /> */}
    </section>
  );
};

export default Sponsors;
