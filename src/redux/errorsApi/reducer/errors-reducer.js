import { GET_ERRORS_API } from "../actions/types";

const initialState = {
  errors: [],
};

const errorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ERRORS_API:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default errorsReducer;
