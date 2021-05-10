import { GET_DATA_USER } from "./types";
import axios from "axios";

/* export const addUserAction = (user) => ({
  type: GET_DATA_USER,
  payload: user,
});
 */
const token = localStorage.getItem("token");
export const addUserAction = (token) => async (dispatch) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URI}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
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
