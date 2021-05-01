import * as Yup from "yup";

export const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("This field is required"),
  password: Yup.string().required("This field is required"),
});
