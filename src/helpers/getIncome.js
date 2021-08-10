import { axiosHttp } from "./axiosHttp";

export const getIncome = async (id) => {
  const api = axiosHttp();
  const url = `${process.env.REACT_APP_SERVER_URI}/incomes/${id}`;

  const info = await api.get(url);
  return info;
};
