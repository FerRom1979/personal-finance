import { axiosHttp } from "./axiosHttp";

export const pagination = async (limit, skip, counter, incomes) => {
  const response = {};
  const calPage = (incomes) => {
    return Math.round(Math.ceil(incomes / 8));
  };
  try {
    if (calPage(incomes) === counter) response.disabled = true;
    if (calPage(incomes) !== counter) response.disabled = false;
    if (counter > 1) response.disabledPrev = false;
    if (counter === 1) response.disabledPrev = true;
    const api = axiosHttp();
    const url = `${process.env.REACT_APP_SERVER_URI}/incomes/page?limit=${limit}&skip=${skip}`;
    response.data = await api.get(url);
  } catch (err) {
    response.error = err;
  }
  response.countPage = calPage(incomes);
  return response;
};
