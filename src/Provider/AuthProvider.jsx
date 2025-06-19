import React, { createContext } from 'react';
export const AuthContext = createContext();
import { getAuth } from "firebase/auth";
import app from '../firebase.init';

export const auth = getAuth(app);
const AuthProvider = ({children}) => {



    const authData = {
        name: "hasan"
    }
    return (
        <AuthContext value={authData}>
            {children}
    </AuthContext>
    );
    
};

export default AuthProvider;