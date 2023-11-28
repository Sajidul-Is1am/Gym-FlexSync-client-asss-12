/* eslint-disable react/prop-types */
import { Navigate, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const PrivetRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const navigate = useNavigate()

    if (loading) {
        return (
          <span className="loading loading-dots loading-lg text-8xl flex justify-center items-center h-screen mx-auto"></span>
        );
    }
    if (!user) {
       return navigate('/login')
    }
    if (user) {
        return children
    }
};

export default PrivetRoute;