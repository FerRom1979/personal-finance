import axiosHttp from "./axiosHttp";

const deleteIncome = async (id) => {
  try {
    const api = axiosHttp();
    const url = `${process.env.REACT_APP_SERVER_URI}/incomes/${id}`;
    await api.del(url);
  } catch (err) {
    console.log(err);
  }
};

export default deleteIncome;
