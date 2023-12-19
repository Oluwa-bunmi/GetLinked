import React from "react";
import success from "../assets/congratulation.png";
import emoji from "../assets/emoji.png";
const Modal = () => {
  return (
    <>
      <div className="fixed top-0 right-0 bottom-0 left-0 bg-modalBg z-[9999] items-center flex justify-center transition-all duration-500">
        <div className="w-[317px] md:w-[699px] p-8 text-center border text-white border-[#D434FE] mx-auto rounded">
          <div>
            <div className="flex justify-center">
              <img src={success} alt="Success" className="w-[200px]" />
            </div>
            <h2 className="text-[16px] md:text-[32px] font-semibold font-mont">
              Congratulations
            </h2>
            <h2 className="text-[16px] md:text-[32px] font-semibold font-mont">
              you have successfully Registered!
            </h2>
            <p className="sm:text-[14px] text-[12px] font-medium pt-3 pb-1">
              Yes, it was easy and you did it!
            </p>
            <div className="flex justify-center gap-1 items-center sm:text-[14px] text-[12px] font-medium">
              check your mail box for next step
              <img src={emoji} alt="wink emoji" />
            </div>
            <button
              onClick={() => {
                window.location.href = "/";
              }}
              className="mt-8 font-mont text-[16px] h-[53px] buttonGradient w-full rounded"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
