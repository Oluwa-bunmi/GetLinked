import key from "../assets/keyVector.png";
import whiteStar from "../assets/whiteStar.png";
import purpleStar from "../assets/purpleStar.png";

const Attributes = () => {
  return (
    <section className="relative grid gap-6 lg:grid-cols-2 items-center bg-cover bg-center bg-secondLens text-white py-8 px-5 md:px-20 layout">
      <div>
        <div className="flex justify-center lg:justify-start">
          <img src={purpleStar} alt="Star" className="w-3 lg:w-5 star" />
        </div>
        <div className="hidden linearCircle lg:block absolute left-[13%] bg-buttonGradient w-[100px] h-[100px] rounded-full"></div>
        <div className="flex justify-center lg:justify-start">
          <img
            src={key}
            alt="illustration"
            className="relative w-[332px] lg:w-[490px]"
          />
        </div>
        <div className="hidden lg:flex justify-end">
          <img src={whiteStar} alt="Star" className="star w-5" />
        </div>
      </div>
      <div className="flex flex-col gap-3 text-center lg:text-left">
        <ul className="font-mont text-sm flex gap-3 flex-col">
          <li className="leading-[36px] md:leading-[42px] text-lg md:text-[32px] clash font-bold">
            Judging Criteria
            <span className="block  text-[#D434FE]">Key attributes</span>
          </li>
          <li>
            <span className="text-secondary">Innovation and Creativity:</span>
            Evaluate the uniqueness and creativity of the solution. Consider
            whether it addresses a real-world problem in a novel way or
            introduces innovative features.
          </li>
          <li>
            <span className="text-secondary">Functionality:</span> Assess how well
            the solution works. Does it perform its intended functions
            effectively and without major issues? Judges would consider the
            completeness and robustness of the solution.
          </li>
          <li>
            <span className="text-secondary">Impact and Relevance:</span>
            Determine the potential impact of the solution in the real world.
            Does it address a significant problem, and is it relevant to the
            target audience? Judges would assess the potential social, economic,
            or environmental benefits.
          </li>
          <li>
            <span className="text-secondary">Technical Complexity:</span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </li>
          <li>
            <span className="text-secondary">Adherence to Hackathon Rules:</span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </li>
          <li className="lg:hidden flex justify-end">
            <img src={whiteStar} alt="Star" className="w-3 star" />
          </li>
          <li>
            <button className="buttonGradient rounded-[4px] w-[172px] h-[53px] border-none">
              Read More
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Attributes;
