import * as yup from "yup";
export const registerSchema = yup.object().shape({
  teams_name: yup.string().required("Required"),
  first_name: yup.string().required("Required"),
  message: yup.string().required("Required"),
  phone_number: yup.number().required("Required"),
  project_topic: yup.string().required("Required"),
  email: yup.string().email("Invalid email").required("Required"),
  category: yup.string().required("Required"),
  group_size: yup.string().required("Required"),
  agreement: yup
    .boolean()
    .oneOf([true], "You must accept the terms and conditions"),
});
