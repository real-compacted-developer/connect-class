import { useSelector } from "react-redux";
import { RootState } from "../modules";

const useUser = () => useSelector((state: RootState) => state.user);

export default useUser;
