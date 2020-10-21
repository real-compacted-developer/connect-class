import { type } from "os";
import { handleActions } from "redux-actions";
import { IUser } from "../types/user";

const GET = "user/GET" as const;

export const getUser = () => ({ type: GET });

type UserAction = ReturnType<typeof getUser>;
interface UserState {
  user: IUser | undefined;
}

const initialState: UserState = {
  user: undefined,
};

const user = handleActions(
  {
    [GET]: (state, action) => ({
      user: {
        id: "dummyId",
        nickname: "홍길동",
        email: "testEmail",
        profileImage: "http://connectclass.io",
        isPremium: false,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    }),
  },
  initialState
);

export default user;
