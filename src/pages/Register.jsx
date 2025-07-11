import { useFormik } from "formik";
import { registerSchema } from "../schemas";
import designer from "../assets/graphicDesigner.png";
import movement from "../assets/movement.png";
import logo from "../assets/getlinked.png";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Modal from "../components/Modal";
import { toast } from "react-toastify";
import { Axios } from "../config";
import { request } from "../lib/Request";
const Register = () => {
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  // Fetch the category options from the API
  useEffect(() => {
    getCategories();
  }, []);
  const initialValues = {
    team_name: "",
    email: "",
    phone_number: "",
    project_topic: "",
    group_size: "",
    category: "",
    agreement: false,
  };
  const getCategories = async () => {
    try {
      const res = await Axios.get(request.category);
      setCategoryOptions(res.data);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const onSubmit = async (payload, actions) => {
    try {
      const res = await Axios.post(request.registration, payload);
      console.log(res);
      if (res.status === 201) {
        setIsOpen(true);
      } else {
        toast.error("Registration unsuccessful. Please try again.");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred. Please try again later.");
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
    validationSchema: registerSchema,
    onSubmit,
  });
  return (
    <>
      <section>
        {/* Mobile Nav */}
        <div className="lg:hidden primaryGradient px-5 md:px-20 py-8 fixed w-full z-[1000]">
          <Link to="/">
            <img src={logo} alt={logo} className="w-[150px]" />
          </Link>
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
            <button className="w-[172px] h-[53px] before:duration-300 before:transition before:ease-in-out rounded hover:opacity-80 hover:before:opacity-80 bg-buttonGradient before:inset-[2px] before:absolute relative before:bg-[#150E28] outline-none">
              <span className="relative">Register</span>
            </button>
          </div>
        </nav>
        <section className="bg-secondLens bg-cover pt-20 xl:pt-40 pb-8 items-center grid xl:grid-cols-[50%_50%] px-5 md:px-20">
          <img src={designer} alt="Hackathon Designer" width="100%" />
          <div className="md:shadow-regshadow xl:bg-[#ffffff08] rounded-[12px]">
            <form
              onSubmit={handleSubmit}
              className="text-white px-5 md:px-12 pt-0 pb-6 xl:pt-6"
            >
              <h2 className="clash hidden xl:block text-[32px] font-semibold text-[#D434FE]">
                Register
              </h2>
              <div className="flex items-center font-mont text-[14px] mt-8 mb-4">
                <h3>Be part of this movement!</h3>
                <img src={movement} alt="mobilization" width="50" />
              </div>
              <div className=" flex flex-col gap-6">
                <h1 className="font-mont text-xl sm:text-[24px]">
                  CREATE YOUR ACCOUNT
                </h1>
                <div className="grid lg:grid-cols-2 items-center gap-5">
                  <div>
                    <label htmlFor="team_name">Team's Name</label> <br />
                    <input
                      type="text"
                      name="team_name"
                      id="team_name"
                      value={values.team_name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter the name of your group"
                      className={
                        errors.team_name && touched.team_name
                          ? "border !border-red-500"
                          : ""
                      }
                    />
                    {errors.team_name && touched.team_name && (
                      <p className="text-red-500 text-sm font-medium">
                        {errors.team_name}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="phone_number">Phone</label> <br />
                    <input
                      type="number"
                      name="phone_number"
                      id="phone_number"
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
                </div>
                <div className="grid lg:grid-cols-2 items-center gap-5">
                  <div>
                    <label htmlFor="email">Email</label> <br />
                    <input
                      type="text"
                      name="email"
                      id="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Enter your email address"
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
                    <label htmlFor="project_topic">Project Topic</label> <br />
                    <input
                      type="text"
                      name="project_topic"
                      id="project_topic"
                      value={values.project_topic}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="What is your group project topic"
                      className={
                        errors.project_topic && touched.project_topic
                          ? "border !border-red-500"
                          : ""
                      }
                    />
                    {errors.project_topic && touched.project_topic && (
                      <p className="text-red-500 text-sm font-medium">
                        {errors.project_topic}
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid items-center grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="category">Category</label>
                    <br />
                    <select
                      name="category"
                      id="category"
                      value={values.category}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.category && touched.category
                          ? "border !border-red-500"
                          : ""
                      }
                    >
                      <option value="" className="text-black">
                        Select category
                      </option>

                      {categoryOptions.map((option) => (
                        <option
                          key={option.id}
                          value={option.id}
                          className="text-black"
                        >
                          {option.name}
                        </option>
                      ))}
                    </select>
                    {errors.category && touched.category && (
                      <p className="text-red-500 text-sm font-medium">
                        {errors.category}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="group_size">Group Size</label>
                    <br />
                    <select
                      name="group_size"
                      id="group_size"
                      value={values.group_size}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={
                        errors.group_size && touched.group_size
                          ? "border !border-red-500"
                          : ""
                      }
                    >
                      <option value="" className="text-black">
                        Select
                      </option>
                      <option value="1" className="text-black">
                        1
                      </option>
                      <option value="2" className="text-black">
                        2
                      </option>
                      <option value="3" className="text-black">
                        3
                      </option>
                      <option value="4" className="text-black">
                        4
                      </option>
                      <option value="5" className="text-black">
                        5
                      </option>
                    </select>
                    {errors.group_size && touched.group_size && (
                      <p className="text-red-500 text-sm font-medium">
                        {errors.group_size}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-[#FF26B9] italic font-mont text-[10px] sm:text-[12px] w-full">
                  Please review your registration details before submitting
                </p>
                <div className="flex gap-2 flex-nowrap items-center w-full">
                  <input
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    checked={values.agreement}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <label
                    htmlFor="agreement"
                    className="cursor-pointer text-[10px] sm:text-[12px]"
                  >
                    I agree with the event terms and conditions and privacy
                    policy
                  </label>
                  {/* {errors.agreement && touched.agreement && (
                <p className="text-red-500 text-sm font-medium">
                  {errors.agreement}
                </p>
              )} */}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="hidden lg:block disabled:!opacity-75 disabled:!cursor-not-allowed font-mont text-[16px] h-[53px] buttonGradient w-full rounded-[4px]"
                >
                  Register Now
                </button>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="lg:hidden disabled:!opacity-75 disabled:!cursor-not-allowed font-mont text-[16px] h-[45px] sm:h-[53px] buttonGradient w-[172px] rounded-[4px]"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </section>
      {isOpen && <Modal />}
    </>
  );
};

export default Register;
