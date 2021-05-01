import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  age: Yup.number().required("This field is required"),
  email: Yup.string().email("Invalid email format").required("This field is required"),
  password: Yup.string().required("This field is required"),
});
