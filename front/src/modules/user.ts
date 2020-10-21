import { createAction, handleActions } from "redux-actions";
import { IUser } from "../types/user";

const GET_USER = "user/GET" as const;
const INIT_USER = "user/INIT" as const;

export const getUser = createAction(GET_USER);
export const initUser = createAction(INIT_USER);

type UserAction = ReturnType<typeof getUser>;
interface UserState {
  user: IUser | undefined;
}

const initialState: UserState = {
  user: undefined,
};

const user = handleActions(
  {
    [GET_USER]: (state, action) => state,
    [INIT_USER]: (state, action) => ({
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
