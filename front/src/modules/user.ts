import { createAction, handleActions } from "redux-actions";
import { IUser } from "../types/user";

const FETCH_USER = "user/FETCH" as const;

export const fetchUser = createAction(FETCH_USER);

interface UserState {
  user: IUser | undefined;
}

const initialState: UserState = {
  user: undefined,
};

const user = handleActions(
  {
    [FETCH_USER]: (state, action) => ({
      ...state,
      id: "dummyId",
      nickname: "홍길동",
      email: "testEmail",
      profileImage: "http://connectclass.io",
      isPremium: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }),
  },
  initialState
);

export default user;
