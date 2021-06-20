import { GET_DATA_USER } from "./types";
import axios from "axios";

const jwk = localStorage.getItem("token");
sessionStorage.setItem("token", jwk);
const tokenItem = sessionStorage.getItem("token");
const id = sessionStorage.getItem("id");
export const addUserAction = (tokenItem, id) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenItem,
        _id: id,
      },
    });
    dispatch({
      type: GET_DATA_USER,
      payload: res.data,
    });
    sessionStorage.setItem("id", res.data._id);
  } catch (err) {
    console.log(err);
  }
};
