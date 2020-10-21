import { combineReducers } from "redux";
import user from "./user";

const rootReducer = combineReducers({
  user,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
