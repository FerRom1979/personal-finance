import { combineReducers } from "redux";
import userReducer from "../user/reducers/user-reducer";
import incomesReducer from "../incomes/reducer/incomes-reducer";
import errorsReducer from "../errorsApi/reducer/errors-reducer";

const reducers = combineReducers({
  userData: userReducer,
  incomesData: incomesReducer,
  errorsReducer: errorsReducer,
});
export default reducers;
