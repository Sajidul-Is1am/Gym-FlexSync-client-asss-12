import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider/AuthProvider";


const useAuth = () => {
    const authentication = useContext(AuthContext)
    return authentication;
};

export default useAuth;