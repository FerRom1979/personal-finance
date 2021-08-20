import React, { useEffect } from "react";
import { useFormik } from "formik";
import { ButtonCustom } from "../../components";
import { validationSchema } from "./validation-schema";
import { colors, initialValuesIncomes } from "../../constants";
import { axiosHttp } from "../../helpers/axiosHttp";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { getIncomes } from "../../redux/incomes/actions";

import { InputWrapper, FormWrapper, MessageError, SpanCheck, WrapperCheck } from "./styles";

const CreateIncome = ({ closeModal }) => {
  const dispatch = useDispatch();
  const onSubmit = async (values) => {
    const createIncomes = async () => {
      const api = axiosHttp();
      const url = `${process.env.REACT_APP_SERVER_URI}/incomes`;
      const options = {
        data: {
          category: values.category ? "incomes" : "expenses",
          description: values.description,
          typeOfIncome: values.typeOfIncome,
          totalIncome: values.totalIncome,
          IncomePermanent: values.IncomePermanent,
        },
      };
      try {
        await api.post(url, options);
        dispatch(getIncomes());
        closeModal();
      } catch (err) {
        console.log(err);
      }
    };
    createIncomes();
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
        <label htmlFor="IncomePermanent">
          <SpanCheck>Income Permanent</SpanCheck>
          <input
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
CreateIncome.propTypes = {
  closeModal: PropTypes.func.isRequired,
};

export default CreateIncome;
