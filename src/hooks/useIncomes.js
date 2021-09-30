import { useDispatch } from "react-redux";
import { axiosHttp } from "../helpers";
import { getIncomes } from "../redux/incomes/actions";

export const useIncomes = () => {
  const dispatch = useDispatch();
  const createIncomes = async (values, closeModal) => {
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
  return { createIncomes };
};
