import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { editIncome } from "../../helpers/editI_incomes";
import { useDispatch } from "react-redux";
import { getIncomes } from "../../redux/incomes/actions";
import { ButtonCustom } from "../../components";
import { colors } from "../../constants";

import { FormWrapper, InputWrapper, MessageError } from "./styles";

const initialForm = {
  category: "",
  description: "",
  typeOfIncome: "",
  totalIncome: "",
  incomePermanent: "",
  id: null,
};
const EditIncomes = ({ isEdit, dataEdit, setDataEdit, idEdit, closeModal }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    const { category, description, totalIncome, IncomePermanent, typeOfIncome } = form;
    e.preventDefault();
    if (
      category === "" ||
      description === "" ||
      totalIncome === "" ||
      IncomePermanent === "" ||
      typeOfIncome === ""
    ) {
      setTimeout(() => {
        setError(false);
      }, 3000);
      return setError(true);
    }
    editIncome(idEdit, form);
    handleReset();
    dispatch(getIncomes());
    setError(false);
  };
  const handleReset = (e) => {
    setForm(initialForm);
    setDataEdit(null);
    closeModal();
  };
  useEffect(() => {
    if (dataEdit) {
      setForm(dataEdit);
    } else {
      setForm(initialForm);
    }
  }, [dataEdit]);

  return (
    <div>
      <FormWrapper onSubmit={handleSubmit}>
        <InputWrapper
          type="text"
          name="category"
          id="category"
          placeholder="Category"
          onChange={handleChange}
          value={form?.category}
        />
        <InputWrapper
          type="text"
          name="description"
          id="description"
          placeholder="Description"
          onChange={handleChange}
          value={form?.description}
        />
        <InputWrapper
          type="text"
          name="typeOfIncome"
          id="typeOfIncome"
          placeholder="Type Of Income"
          onChange={handleChange}
          value={form?.typeOfIncome}
        />
        <InputWrapper
          type="number"
          name="totalIncome"
          id="totalIncome"
          placeholder="Total Income"
          onChange={handleChange}
          value={form?.totalIncome}
        />
        <InputWrapper
          type="text"
          name="IncomePermanent"
          id="IncomePermanent"
          placeholder="Income Permanent"
          onChange={handleChange}
          value={form?.IncomePermanent}
        />
        <input type="hidden" name="id" id="id" onChange={handleChange} />
        <ButtonCustom
          type={"onSubmit"}
          values={"Add"}
          minWidth={"300px"}
          background={colors.BLUE}
        />
        <input type="reset" value="CLEAR" onClick={handleReset} style={{ display: "none" }} />
        {error && (
          <div>
            <MessageError>All fields are required </MessageError>
          </div>
        )}
      </FormWrapper>
    </div>
  );
};
EditIncomes.propTypes = {
  isEdit: PropTypes.bool,
  dataEdit: PropTypes.object,
  setDataEdit: PropTypes.func,
  idEdit: PropTypes.string,
  closeModal: PropTypes.func,
};
EditIncomes.defaultProps = {
  isEdit: false,
  dataEdit: null,
  idEdit: "",
};
export default EditIncomes;
