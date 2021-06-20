import { GET_INCOMES } from "./types";
import axios from "axios";

export const getIncomes = () => async (dispatch) => {
  const tokenItem = sessionStorage.getItem("token");
  const id = sessionStorage.getItem("id");
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/incomes`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenItem,
        _id: id,
      },
    });
    dispatch({
      type: GET_INCOMES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};
