import { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { faq } from "../constants/data";
import purpleStar from "../assets/purpleStar.png";
import { motion } from "framer-motion";


const Faq = () => {
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
          className="w-3 lg:w-5 ml-[12%] animate-pulse mb-2"
        />
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2 }}
          viewport={{ once: true }}
          className="leading-[36px] md:leading-[42px] text-xl md:text-[32px] clash font-medium"
        >
          Frequently Asked
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", duration: 2 }}
            viewport={{ once: true }}
            className="block text-[#D434FE] font-medium"
          >
            Questions
          </motion.span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", duration: 2.5 }}
          viewport={{ once: true }}
          className="text-[14px] py-5 font-mont"
        >
          We got answers to the questions that you might want to ask about
          <br />
          <b>getlinked Hackathon 1.0 </b>
        </motion.p>
        {faq.map((item, i) => (
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
