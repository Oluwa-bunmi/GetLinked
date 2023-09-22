import designer from "../assets/graphicDesigner.png";
import movement from "../assets/movement.png";
const Register = () => {
  return (
    <section className="bg-secondLens bg-cover bg-center px-5 md:px-20 pt-28 pb-8 items-center grid xl:grid-cols-[50%_50%]">
      <img src={designer} alt="Graphics Designer" />
      <div className="sha rounded-[12px]">
        <form action="" className="text-white px-8 py-6">
          <h2 className="clash text-[32px] font-semibold text-[#D434FE]">
            Register
          </h2>
          <div className="flex items-center font-mont text-[14px] mt-8 mb-4">
            <h3>Be part of this movement!</h3>
            <img src={movement} alt="mobilization" width="50"/>
          </div>
          <div className=" flex flex-col gap-6">
            <h1 className="font-mont text-[24px]">CREATE YOUR ACCOUNT</h1>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="">Team's Name</label> <br />
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder="Enter the name of your group"
                />
              </div>
              <div>
                <label htmlFor="">Phone</label> <br />
                <input
                  type="number"
                  id=""
                  name=""
                  placeholder="Enter your phone number"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label htmlFor="">Email</label> <br />
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label htmlFor="">Project Topic</label> <br />
                <input
                  type="text"
                  id=""
                  name=""
                  placeholder="What is your group project topic"
                />
              </div>
            </div>
            <p className="text-[#FF26B9] italic font-mont text-[12px] w-full">
              Please review your registration details before submitting
            </p>
            {/* <div className="flex justify-between w-full"> */}
            <div className="flex gap-2 items-center w-full">
              <input type="checkbox" id="agreement" name="agreement" />
              <label htmlFor="agreement" className="cursor-pointer">
                I agreed with the event terms and conditions and privacy policy
              </label>
            </div>
            {/* </div> */}
            <button className="font-mont text-[16px] h-[53px] buttonGradient w-full rounded-[4px]">
              Register Now
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
