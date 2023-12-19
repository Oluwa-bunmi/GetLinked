import Navbar from "../components/Navbar";
import { useFormik } from "formik";
import { contactSchema } from "../schemas";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import back from "../assets/back.png";
import logo from "../assets/getlinked.png";
import purpleStar from "../assets/purpleStar.png";
import whiteStar from "../assets/whiteStar.png";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Axios } from "../config";
import { request } from "../lib/Request";

const Contact = () => {
  const initialValues = {
    first_name: "",
    email: "",
    message: "",
    phone_number: "",
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(request.contact, payload);
      console.log(res);
      if (res.status === 201) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          style: {
            zIndex: "100",
          },
        });
      } else {
        toast.error("Message sending unsuccessful. Please try again.", {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error("An error occurred. Please try again later.", {
        position: "top-right",
      });
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
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
    validationSchema: contactSchema,
    onSubmit,
  });
  return (
    <>
      <section className="layout relative bg-secondLens bg-cover bg-center pt-32 px-5 md:px-20 2xl:px-32 lg:pt-40 pb-8">
        <section className="flex flex-col gap-3">
          <div className="flex justify-center lg:justify-end">
            <img src={whiteStar} alt="star" className="star w-3 lg:w-5" />
          </div>
          <img
            src={purpleStar}
            alt="star"
            className="star w-5 hidden lg:block"
          />

          <div className="grid lg:grid-cols-2 items-center">
            <div className="hidden lg:flex gap-5 flex-col text-[16px] text-white font-mont">
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
                  <Link to="https://www.instagram.com/getlinked.ai">
                    <BsInstagram />
                  </Link>
                  <Link to="https://web.facebook.com/getLinkedai">
                    <FaFacebookF />
                  </Link>
                  <Link to="https://twitter.com/getLinkedai">
                    <RiTwitterXFill />
                  </Link>
                  <Link to="https://www.linkedin.com/company/getlinked-ai/">
                    <FaLinkedinIn />
                  </Link>
                </div>
              </div>
            </div>

            <div>
              <div className="md:shadow-regshadow relative lg:bg-[#ffffff08] rounded-[12px]">
                <form
                  onSubmit={handleSubmit}
                  className="text-white px-5 md:px-16 lg:px-12 pt-0 pb-12 lg:pt-12"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="text-xl clash text-[#D434FE]">
                        Questions or need assistance?
                      </h1>
                      <h1 className="text-xl clash text-[#D434FE] pt-2 pb-2 lg:pb-5">
                        Let us know about it!
                      </h1>
                    </div>
                    <img
                      src={whiteStar}
                      alt="star"
                      className="star lg:hidden w-3"
                    />
                  </div>
                  <p className="lg:hidden font-mont pb-5 text-[12px]">
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
                        type="text"
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
                    <div className="lg:hidden gap-1 font-mont mt-4 flex justify-center flex-col items-center">
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
                        <Link to="https://www.linkedin.com/company/getlinked-ai/">
                          <FaLinkedinIn />
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <img
                src={purpleStar}
                alt="star"
                className="star absolute w-3 lg:w-5 bottom-[20%] left-[10%] md:left-[19%] lg:bottom-[18%] lg:left-[49.5%]"
              />
              <img
                src={whiteStar}
                alt="star"
                className="star w-3 lg:w-5 absolute bottom-[29%] right-[3%] md:bottom-[29%] md:right-[12%] lg:bottom-[4%] lg:right-[4%] contactWhiteStar"
              />
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Contact;
