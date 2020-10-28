import { useSelector } from "react-redux";
import { RootState } from "../modules";

const useSocket = () => useSelector((state: RootState) => state.socket);

export default useSocket;
