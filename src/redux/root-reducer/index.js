import { combineReducers } from "redux";
import userReducer from "../user/reducers/user-reducer";
import incomesReducer from "../incomes/reducer/incomes-reducer";

const reducers = combineReducers({
  userData: userReducer,
  incomesData: incomesReducer,
});
export default reducers;
