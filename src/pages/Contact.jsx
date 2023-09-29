import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import { registerSchema } from "../schemas";
import { PiStarFourFill } from "react-icons/pi";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import back from "../assets/back.png";
import logo from "../assets/getlinked.png";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const Contact = () => {
  const [isShining, setIsShining] = useState(false);
  useEffect(() => {
    const shineInterval = setInterval(() => {
      setIsShining((prevIsShining) => !prevIsShining);
    }, 2000);

    return () => {
      clearInterval(shineInterval);
    };
  }, []);
  const initialValues = {
    first_name: "",
    email: "",
    message: "",
    phone_number: "",
  };
  const onSubmit = async (values, actions) => {
    try {
      const baseUrl = "https://backend.getlinked.ai";
      const payload = {
        email: values.email,
        phone_number: values.phone_number,
        first_name: values.first_name,
        message: values.message,
      };
      const response = await axios.post(
        `${baseUrl}/hackathon/contact-form`,
        payload,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 201) {
        // console.log("Registration successful!");
        actions.resetForm();
      } else {
        console.error("Registration failed with status code:", response.status);
      }
    } catch (error) {
      console.error("An error occurred during registration:", error);
      toast.error("Network Error", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };
  const {
    values,
    touched,
    handleChange,
    handleBlur,
    errors,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: registerSchema,
    onSubmit,
  });
  return (
    <>
      <div
        className="lg:hidden primaryGradient px-5 md:px-20 py-8 fixed w-full z-[1000]"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        <img src={back} alt="go home" />
      </div>
      {/* Desktop Nav */}
      <nav className="hidden primaryGradient fixed w-full z-[1000] px-5 md:px-20  font-mont lg:flex justify-between items-center pt-8 pb-4">
        <Link to="/">
          <img src={logo} alt={logo} className="w-[150px] select-none" />
        </Link>
        <div className="hidden lg:flex gap-28 text-[16px] text-white items-center">
          <ul className="flex gap-10 items-center">
            <li>
              <NavLink>Timeline</NavLink>
            </li>
            <li>
              <NavLink>Overview</NavLink>
            </li>
            <li>
              <NavLink>FAQs</NavLink>
            </li>
            <li>
              <NavLink to="/contact-us">Contact</NavLink>
            </li>
          </ul>
          <button
            onClick={() => {
              window.location.href = "/register";
            }}
            className="buttonGradient rounded-[4px] w-[172px] h-[53px] border-none"
          >
            Register
          </button>
        </div>
      </nav>
      <section className="bg-secondLens bg-cover pt-32 px-5 md:px-36 xl:pt-40 pb-8">
        <section className="flex flex-col gap-3">
          <div className="flex justify-center xl:justify-end">
            <PiStarFourFill
              className={`star xl:text-white text-[#D434FE] text-[18px] xl:text-xl ${
                isShining ? "shining" : ""
              }`}
            />
          </div>
          <PiStarFourFill
            className={`star text-[#D434FE] text-xl hidden xl:block ${
              isShining ? "shining" : ""
            }`}
          />

          <div className="grid xl:grid-cols-2 items-center">
            <div className="hidden xl:flex gap-5 flex-col text-[16px] text-white font-mont">
              <h1 className="clash text-[32px] text-[#D434FE]">Get in touch</h1>
              <p>Contact Information</p>
              <p>
                27,Alara Street <br /> Yaba 100012 <br /> Lagos State
              </p>
              <p>Call Us : 07067981819</p>
              <p>
                we are open from Monday-Friday <br /> 08:00am - 05:00pm
              </p>
              <div>
                <p>Share on</p>
                <div className="flex gap-3 items-center">
                  <BsInstagram />
                  <FaFacebookF />
                  <RiTwitterXFill />
                  <FaLinkedinIn />
                </div>
              </div>
            </div>

            <div>
              <div className="md:shadow-regshadow relative xl:bg-[#ffffff08] rounded-[12px]">
                <form
                  onSubmit={handleSubmit}
                  className="text-white px-5 md:px-12 pt-0 pb-12 xl:pt-12"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-xl clash text-[#D434FE]">
                        Questions or need assistance?
                      </h1>
                      <h1 className="text-xl clash text-[#D434FE] pt-2 pb-2 xl:pb-5">
                        Let us know about it!
                      </h1>
                    </div>
                    <PiStarFourFill className="text-white text-xl xl:text-[26px] xl:hidden" />
                  </div>
                  <p className="xl:hidden font-mont pb-5 text-[12px]">
                    Email us below to any question related to our event
                  </p>
                  <div className="flex flex-col gap-6">
                    <div>
                      <input
                        type="text"
                        name="first_name"
                        value={values.first_name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="First Name"
                        className={
                          errors.first_name && touched.first_name
                            ? "border !border-red-500"
                            : ""
                        }
                      />
                      {errors.first_name && touched.first_name && (
                        <p className="text-red-500 text-sm font-medium">
                          {errors.first_name}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="number"
                        name="phone_number"
                        value={values.phone_number}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your phone number"
                        className={
                          errors.phone_number && touched.phone_number
                            ? "!border !border-red-500"
                            : ""
                        }
                      />
                      {errors.phone_number && touched.phone_number && (
                        <p className="text-red-500 text-sm font-medium">
                          {errors.phone_number}
                        </p>
                      )}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="email"
                        id="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Mail"
                        className={
                          errors.email && touched.email
                            ? "border !border-red-500"
                            : ""
                        }
                      />
                      {errors.email && touched.email && (
                        <p className="text-red-500 text-sm font-medium">
                          {errors.email}
                        </p>
                      )}
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className={`resize-none h-[119px]
                        ${
                          errors.message && touched.message
                            ? "border !border-red-500"
                            : ""
                        }
                      `}
                      ></textarea>
                      {errors.message && touched.message && (
                        <p className="text-red-500 text-sm font-medium">
                          {errors.message}
                        </p>
                      )}
                    </div>
                    <div className="flex justify-center">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="disabled:!opacity-75 disabled:!cursor-not-allowed font-mont text-[16px] h-[45px] sm:h-[53px] buttonGradient w-[172px] rounded-[4px]"
                      >
                        Submit
                      </button>
                    </div>
                    <div className="xl:hidden gap-1 font-mont mt-4 flex justify-center flex-col items-center">
                      <p className="text-[12px] text-[#D434FE]">Share on</p>
                      <div className="flex gap-3 items-center">
                        <Link to="https://www.instagram.com/getlinked.ai">
                          <BsInstagram />
                        </Link>
                        <Link to="https://twitter.com/getLinkedai">
                          <RiTwitterXFill />
                        </Link>
                        <Link to="https://web.facebook.com/getLinkedai">
                          <FaFacebookF />
                        </Link>
                        <Link to="https://www.linkedin.com/getLinkedai">
                          <FaLinkedinIn />
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <PiStarFourFill
                className={`star absolute -bottom-[12%] xl:-bottom-[7%] z-10 left-[89.5%] xl:left-[49.5%] text-[18px] xl:text-xl text-[#D434FE] ${
                  isShining ? "shining" : ""
                }`}
              />
              <PiStarFourFill
                className={`star absolute xl:right-[5%] -bottom-[22%] right-[84%] xl:-bottom-[26%] text-[18px] xl:text-xl text-white ${
                  isShining ? "shining" : ""
                }`}
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
