import axiosHttp from "./axiosHttp";

const pagination = async (limit, skip, counter) => {
  const response = {};
  const api = axiosHttp();
  const pages = await api.get(`${process.env.REACT_APP_SERVER_URI}/incomes/counter`);
  console.log(pages);

  try {
    if (Math.ceil(pages?.total / 8) === counter) response.disabled = true;
    if (Math.ceil(pages?.total / 8) !== counter) response.disabled = false;
    if (counter > 1) response.disabledPrev = false;
    if (counter === 1) response.disabledPrev = true;

    const url = `${process.env.REACT_APP_SERVER_URI}/incomes/page?limit=${limit}&skip=${skip}`;
    response.data = await api.get(url);
    response.loader = true;
  } catch (err) {
    response.error = err;
  }
  response.countPage = Math.ceil(pages?.total / 8);
  return response;
};

export default pagination;
