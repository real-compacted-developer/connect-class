import Axios from "axios";
import { createAction, handleActions } from "redux-actions";
import config from "../config";
import { IUser } from "../types/user";

const FETCH_USER_SUCCESS = "user/FETCH_SUCCESS" as const;
const FETCH_USER_ERROR = "user/FETCH_ERROR" as const;

export const fetchUserSuccess = createAction(FETCH_USER_SUCCESS);
export const fetchUserError = createAction(FETCH_USER_ERROR);

interface UserState {
  user: IUser | undefined;
  error: any;
}

const initialState: UserState = {
  user: undefined,
  error: undefined,
};

export const fetchUserAsync = () => async (dispatch: any) => {
  try {
    const user = await Axios.get(`${config.API}/auth/me`);

    dispatch(fetchUserSuccess(user.data));
  } catch (e) {
    dispatch(fetchUserError(e));
  }
};

const user = handleActions(
  {
    [FETCH_USER_SUCCESS]: (state, action: any) => ({
      user: action.payload,
      error: undefined,
    }),
    [FETCH_USER_ERROR]: (state, action: any) => ({
      user: undefined,
      error: action.payload,
    }),
  },
  initialState
);

export default user;
