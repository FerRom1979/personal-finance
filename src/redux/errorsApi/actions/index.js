import { GET_ERRORS_API } from "./types";

export const getErrorsApi = (errors) => async (dispatch) => {
  dispatch({
    type: GET_ERRORS_API,
    payload: errors,
  });
};
