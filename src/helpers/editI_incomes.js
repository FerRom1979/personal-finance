import { axiosHttp } from "./axiosHttp";

export const editIncome = async (id, dataEdit) => {
  try {
    const api = axiosHttp();
    const url = `${process.env.REACT_APP_SERVER_URI}/incomes/${id}`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
      data: dataEdit,
    };
    await api.pat(url, options);
  } catch (err) {
    console.log(err);
  }
};
