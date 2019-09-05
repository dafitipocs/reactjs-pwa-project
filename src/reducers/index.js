import { combineReducers } from "redux";
import UserReducer from "./user";
import LoginReducer from "./login";

const reducers = combineReducers({
  user: UserReducer,
  login: LoginReducer
});

export default reducers;
