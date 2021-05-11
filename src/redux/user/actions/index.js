import { GET_DATA_USER } from "./types";
import axios from "axios";

/* export const addUserAction = (user) => ({
  type: GET_DATA_USER,
  payload: user,
});
 */
const jwk = localStorage.getItem("token");
sessionStorage.setItem("token", jwk);
const tokenItem = sessionStorage.getItem("token");
export const addUserAction = (tokenItem) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenItem,
      },
    });
    dispatch({
      type: GET_DATA_USER,
      payload: res.data,
    });
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};
