import React from "react";
import { useFormik } from "formik";
import { ButtonCustom } from "../../components";
import { validationSchema } from "./validation-schema";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { InputWrapper, FormWrapper, MessageError, SpanCheck, WrapperCheck } from "./styles";
import { getIncomes } from "../../redux/incomes/actions";

const CreateIncome = () => {
  const dispatch = useDispatch();
  const incomes = useSelector((state) => state.incomesData.incomes);
  console.log(incomes);
  const initialValues = {
    category: "",
    description: "",
    typeOfIncome: "",
    totalIncome: "",
    IncomePermanent: "",
  };

  const onSubmit = async (values) => {
    try {
      const res = await values;
      const info = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URI}/incomes`,
        data: {
          email: res.email,
          password: res.password,
        },
      });
      dispatch(addUserAction(info.data.token));
      if (info) {
        history.push("/");
      }
    } catch (error) {
      console.log(error);
    }
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <InputWrapper
        type="text"
        name="category"
        id="category"
        placeholder="Category"
        {...formik.getFieldProps("category")}
      />
      {formik.touched.category && formik.errors.category ? (
        <MessageError>{formik.errors.category}</MessageError>
      ) : null}
      <InputWrapper
        type="text"
        name="description"
        id="description"
        placeholder="Description"
        {...formik.getFieldProps("description")}
      />
      {formik.touched.description && formik.errors.description ? (
        <MessageError>{formik.errors.description}</MessageError>
      ) : null}
      <InputWrapper
        type="text"
        name="typeOfIncome"
        id="typeOfIncome"
        placeholder="Type Of Income"
        {...formik.getFieldProps("typeOfIncome")}
      />
      {formik.touched.typeOfIncome && formik.errors.typeOfIncome ? (
        <MessageError>{formik.errors.typeOfIncome}</MessageError>
      ) : null}
      <InputWrapper
        type="number"
        name="totalIncome"
        id="totalIncome"
        placeholder="Total Income"
        {...formik.getFieldProps("totalIncome")}
      />
      {formik.touched.totalIncome && formik.errors.totalIncome ? (
        <MessageError>{formik.errors.totalIncome}</MessageError>
      ) : null}
      <WrapperCheck>
        <SpanCheck style={{ paddingRight: "30px" }}>Income Permanent</SpanCheck>
        <label htmlFor="IncomePermanent">
          <input
            style={{ display: "none" }}
            type="checkbox"
            name="IncomePermanent"
            id="IncomePermanent"
            value="true"
            {...formik.getFieldProps("IncomePermanent")}
          />
          <SpanCheck color={formik.values.IncomePermanent ? "green" : "red"}>
            {formik.values.IncomePermanent ? "true" : "false"}
          </SpanCheck>
        </label>
      </WrapperCheck>

      {formik.touched.IncomePermanent && formik.errors.IncomePermanent ? (
        <MessageError>{formik.errors.IncomePermanent}</MessageError>
      ) : null}
      <ButtonCustom
        type={"onSubmit"}
        values={"Add"}
        onClick={() => dispatch(getIncomes())}
        minWidth={"300px"}
      />
    </FormWrapper>
  );
};

export default CreateIncome;
