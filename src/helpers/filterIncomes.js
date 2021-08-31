import axiosHttp from "./axiosHttp";

const filterIncomes = async (category) => {
  try {
    const api = axiosHttp();
    const url = await `${process.env.REACT_APP_SERVER_URI}/incomes/filter?category=${category}`;

    const data = await api.get(url);

    return data;
  } catch (err) {
    console.log(err);
  }
};
export default filterIncomes;
