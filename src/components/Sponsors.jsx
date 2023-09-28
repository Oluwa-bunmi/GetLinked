import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";
import sponsors from "../assets/sponsors.png";
const Sponsors = () => {
  return (
    <section className="text-center text-white bg-secondLens py-8 bg-cover bg-center px-5 md:px-20 layout grid justify-center">
      <h1 className="clash text-xl text-[32px] font-bold">
        Partners and Sponsors
      </h1>
      <p className="md:text-sm text-[12px] font-mont mb-12">
        Getlinked Hackathon 1.0 is honored to have the following major companies
        as its partners and sponsors
      </p>
      <div className="w-full">
        <img src={sponsors} alt="sponsors" className="" />
      </div>
      <img src={purpleStar} alt="Star" />
      <img src={purpleStar} alt="Star" />
      <img src={whiteStar} alt="Star" />
    </section>
  );
};

export default Sponsors;
