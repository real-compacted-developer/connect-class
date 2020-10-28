import { handleActions } from "redux-actions";
import io from "socket.io-client";
import config from "../config";

type SocketState = SocketIOClient.Socket;

const initialState: SocketState = io.connect(config.API);

const socket = handleActions({}, initialState);

export default socket;
