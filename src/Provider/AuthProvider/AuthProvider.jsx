/* eslint-disable react/prop-types */
import { createContext } from "react";

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {



const x = "sajid"



    const userInfo = { x };
    return <AuthContext.Provider value={userInfo}>
        {children}
    </AuthContext.Provider>;
};

export default AuthProvider;