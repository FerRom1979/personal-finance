import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  email: Yup.string().email("Invalid email format").required("This field is required"),
  password: Yup.string().required("This field is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "The password does not match")
    .required("This field is required"),
});
