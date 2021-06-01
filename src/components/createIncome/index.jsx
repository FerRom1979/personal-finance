import React, { useEffect } from "react";
import { useFormik } from "formik";
import { ButtonCustom } from "../../components";
import { validationSchema } from "./validation-schema";
import axios from "axios";
import { colors, initialValuesIncomes } from "../../constants";

import { InputWrapper, FormWrapper, MessageError, SpanCheck, WrapperCheck } from "./styles";

const CreateIncome = () => {
  const onSubmit = async (values) => {
    try {
      const res = await values;
      const info = await axios({
        method: "post",
        url: `${process.env.REACT_APP_SERVER_URI}/incomes`,
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("token"),
          _id: sessionStorage.getItem("id"),
        },
        data: {
          category: res.category ? "incomes" : "expenses",
          description: res.description,
          typeOfIncome: res.typeOfIncome,
          totalIncome: res.totalIncome,
          IncomePermanent: res.IncomePermanent,
        },
      });
    } catch (error) {
      console.log(error);
    }
    formik.resetForm();
  };
  const formik = useFormik({
    initialValues: initialValuesIncomes,
    validationSchema,
    onSubmit,
  });
  return (
    <FormWrapper onSubmit={formik.handleSubmit}>
      <WrapperCheck>
        <SpanCheck style={{ paddingRight: "30px" }}>Category</SpanCheck>
        <label htmlFor="category">
          <input
            style={{ display: "none" }}
            type="checkbox"
            name="category"
            id="category"
            value={true ? "incomes" : "expenses"}
            {...formik.getFieldProps("category")}
          />
          <SpanCheck color={formik.values.category ? "green" : "red"}>
            {formik.values.category ? "incomes" : "expenses"}
          </SpanCheck>
        </label>
      </WrapperCheck>

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
      <ButtonCustom type={"onSubmit"} values={"Add"} minWidth={"300px"} background={colors.BLUE} />
    </FormWrapper>
  );
};

export default CreateIncome;
