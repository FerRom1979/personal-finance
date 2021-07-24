import React from "react";
import { useFormik } from "formik";
import ButtonCustom from "../../components/buttonCustom";
import { validationSchema } from "./validation-schema";
import { colors, initialValuesIncomes } from "../../constants";
import { axiosHttp } from "../../helpers/axiosHttp";

import { Content, WrapperTitle, Title, Date, FooterCard, TextFooter } from "./styles";
import {
  FormWrapper,
  InputWrapper,
  TitleInput,
  WrapperBottomLogin,
  MessageError,
} from "../../components/Login/styles";

const ExpenseCard = () => {
  const onSubmit = async (values) => {
    const createIncomes = async () => {
      const api = axiosHttp();
      const url = `${process.env.REACT_APP_SERVER_URI}/incomes`;
      const res = await values;
      console.log(res);
      const options = {
        data: {
          category: res.category,
          description: res.description,
          typeOfIncome: res.typeOfIncome,
          totalIncome: res.totalIncome,
          IncomePermanent: res.IncomePermanent,
        },
      };
      try {
        await api.post(url, options);
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
    <Content>
      <WrapperTitle>
        <Title>Add Expense</Title>

        <Date>28 de Mayo de 2021</Date>
      </WrapperTitle>

      {/*      <FormWrapper onSubmit={formik.handleSubmit}>
        <TitleInput>Category</TitleInput>
        <InputWrapper
          type="text"
          name="category"
          id="category"
          {...formik.getFieldProps("category")}
        />
        {formik.touched.category && formik.errors.category ? (
          <MessageError>{formik.errors.category}</MessageError>
        ) : null}
        <TitleInput>Description</TitleInput>
        <InputWrapper
          type="text"
          name="description"
          id="description"
          {...formik.getFieldProps("description")}
        />
        {formik.touched.description && formik.errors.description ? (
          <MessageError>{formik.errors.description}</MessageError>
        ) : null}

        <TitleInput>$0.00</TitleInput>
        <InputWrapper
          type="number"
          name="totalIncome"
          id="totalIncome"
          {...formik.getFieldProps("totalIncome")}
        />
        {formik.touched.totalIncome && formik.errors.totalIncome ? (
          <MessageError>{formik.errors.totalIncome}</MessageError>
        ) : null}

        <WrapperBottomLogin>
          <ButtonCustom type={"onSubmit"} values={"Add Expense  +"} background={colors.BLUE} />
        </WrapperBottomLogin>

        <FooterCard>
          <TextFooter>Total expenses for the month: </TextFooter>
          <TextFooter>$0.00</TextFooter>
        </FooterCard>
      </FormWrapper> */}
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

        <InputWrapper
          type="text"
          name="IncomePermanent"
          id="IncomePermanent"
          placeholder="Total Income permanent"
          {...formik.getFieldProps("IncomePermanent")}
        />

        {formik.touched.IncomePermanent && formik.errors.IncomePermanent ? (
          <MessageError>{formik.errors.IncomePermanent}</MessageError>
        ) : null}
        <ButtonCustom
          type={"onSubmit"}
          values={"Add"}
          minWidth={"300px"}
          background={colors.BLUE}
        />
        <FooterCard>
          <TextFooter>Total expenses for the month: </TextFooter>
          <TextFooter>$0.00</TextFooter>
        </FooterCard>
      </FormWrapper>
    </Content>
  );
};

export default ExpenseCard;
