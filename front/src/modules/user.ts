import { createAction, handleActions } from "redux-actions";
import { IUser } from "../types/user";

const GET_USER = "user/GET" as const;

export const getUser = createAction(GET_USER);

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
