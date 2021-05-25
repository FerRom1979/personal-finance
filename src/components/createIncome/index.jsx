import React, { useEffect } from "react";
import { useFormik } from "formik";
import { ButtonCustom } from "../../components";
import { validationSchema } from "./validation-schema";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { InputWrapper, FormWrapper, MessageError, SpanCheck, WrapperCheck } from "./styles";
import { getIncomes } from "../../redux/incomes/actions";

const CreateIncome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const getIncomesData = () => {
      dispatch(getIncomes());
    };
    getIncomesData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const initialValues = {
    category: "",
    description: "",
    typeOfIncome: "",
    totalIncome: "",
    IncomePermanent: "",
  };

  const onSubmit = async (values) => {
    console.log(values);
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
          category: res.category,
          description: res.description,
          typeOfIncome: res.typeOfIncome,
          totalIncome: res.totalIncome,
          IncomePermanent: res.IncomePermanent,
        },
      });

      console.log(info);
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
      <ButtonCustom type={"onSubmit"} values={"Add"} minWidth={"300px"} />
    </FormWrapper>
  );
};

export default CreateIncome;
