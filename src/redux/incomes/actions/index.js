import { GET_INCOMES } from "./types";
import axios from "axios";

const tokenItem = sessionStorage.getItem("token");
const id = sessionStorage.getItem("id");
console.log(tokenItem);
export const getIncomes = () => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/incomes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenItem,
        _id: id,
      },
    });
    console.log(res.data);
    dispatch({
      type: GET_INCOMES,
      payload: res.data,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
