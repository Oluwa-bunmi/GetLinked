import { useEffect, useState } from "react";
import purpleStar from "../assets/purpleStar.png";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const Faq = () => {
  const data = [
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Arcu pulvinar mi lacinia vulputate massa felis.",
    },
    {
      question: "What happens if I need help during the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Arcu pulvinar mi lacinia vulputate massa felis.",
    },
    {
      question: "What happens if I don't have an idea for a project?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Arcu pulvinar mi lacinia vulputate massa felis.",
    },
    {
      question: "Can I join a team or do I have to come with one?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Arcu pulvinar mi lacinia vulputate massa felis.",
    },
    {
      question: "What happens after the hackathon ends",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Arcu pulvinar mi lacinia vulputate massa felis.",
    },
    {
      question: "Can I work on a project I started before the hackathon?",
      answer:
        "Lorem ipsum dolor sit amet consectetur. Arcu pulvinar mi lacinia vulputate massa felis.",
    },
  ];
  const [openKey, setOpenKey] = useState();
  const handleToggle = (key) => {
    setOpenKey(openKey !== key ? key : null);
  };

  return (
    <>
      <div>
        <img
          src={purpleStar}
          alt="Star"
          className="w-3 lg:w-5 ml-[12%] star mb-2"
        />
        <h1 className="leading-[36px] md:leading-[42px] text-xl md:text-[32px] clash font-bold">
          Frequently Ask
          <span className="block text-[#D434FE]"> Question</span>
        </h1>
        <p className="text-[14px] py-5 font-mont">
          We got answers to the questions that you might want to ask about
          <br />
          <b>getlinked Hackathon 1.0 </b>
        </p>
        {data.map((item, i) => (
          <div
            key={i}
            className="flex font-mont flex-col items-center justify-between p-2 rounded-lg"
          >
            <div className="w-full text-[14px] border-b border-[#D434FE]">
              <div
                className="rounded-[10px] flex items-center justify-between py-3 cursor-pointer"
                onClick={() => handleToggle(i)}
              >
                <h3>{item.question}</h3>
                <div className="text-primary">
                  {openKey === i ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </div>
              </div>
              {openKey === i && <div>{item.answer}</div>}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Faq;
