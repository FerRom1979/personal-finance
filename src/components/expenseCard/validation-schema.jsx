import * as Yup from "yup";

export const validationSchema = Yup.object({
  category: Yup.string().required("This field is required"),
  description: Yup.string().required("This field is required"),
  typeOfIncome: Yup.string().required("This field is required"),
  totalIncome: Yup.number().required("This field is required"),
  IncomePermanent: Yup.string().required("This field is required"),
});
