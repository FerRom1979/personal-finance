import { GET_DATA_USER } from "./types";

export const addUserAction = (info) => async (dispatch) => {
  dispatch({
    type: GET_DATA_USER,
    payload: info,
  });
  localStorage.setItem("id", info._id);
};
