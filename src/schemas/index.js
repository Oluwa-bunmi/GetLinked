import * as yup from "yup";
export const registerSchema = yup.object().shape({
  team_name: yup.string().required("Required"),
  phone_number: yup.number().required("Required"),
  project_topic: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  category: yup.string().required("Required"),
  group_size: yup.string().required("Required"),
  agreement: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
export const contactSchema = yup.object().shape({
  first_name: yup.string().required("Required"),
  email: yup.string().email("Invalid Email Address").required("Required"),
  phone_number: yup
    .string()
    .min(2, "Phone number provided is not complete")
    .max(13, "Phone number Characters should not be greater than 15 digit")
    .matches(
      /^(?:\+?\d{1,4}[-.\s]?)?(?:\(\d{1,4}\)[-.\s]?)?\d{1,13}$/g,
      "Invalid phone number"
    )
    .required("Required"),
  message: yup.string().required("Required"),
});
