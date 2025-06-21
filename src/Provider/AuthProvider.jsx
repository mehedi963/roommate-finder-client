import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);

//createUser
const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
}



//signin by google
const signInGoogle = (provider) =>{
    return signInWithPopup(auth,provider);
}

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
    });
    return () =>{
        unsubscribe();
    }
},[])

    const authData = {
       user,
       setUser,
       loading,
       setLoading,
        createUser,
        signInGoogle ,
    }
    return (
        <AuthContext value={authData}>
            {children}
    </AuthContext>
    );
    
};

export default AuthProvider;