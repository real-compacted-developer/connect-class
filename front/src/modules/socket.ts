import { handleActions } from "redux-actions";
import io from "socket.io-client";

interface SocketState {
  readonly main: SocketIOClient.Socket;
  readonly study: SocketIOClient.Socket;
}

const initialState: SocketState = {
  main: io.connect(process.env.REACT_APP_BACKEND!),
  study: io.connect(process.env.REACT_APP_STUDY_LAYER!),
};

const socket = handleActions({}, initialState);

export default socket;
