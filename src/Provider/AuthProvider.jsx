import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import {  createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import app from '../firebase.init';

const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");



//createUser
const createUser = (email,password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth,email,password)
}



//signin with email,password
const signIn = (email,password) =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth,email,password);
}



//signin by google
const signInGoogle = (provider) =>{
    setLoading(true);
    return signInWithPopup(auth,provider);
}

//signOut 
const logOut  = () =>{
    return signOut(auth);
}

useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
        setUser(currentUser);
        setLoading(false);
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
        logOut,
        signIn,
        error,
        setError,
        
        

    }
    return (
        <AuthContext value={authData}>
            {children}
    </AuthContext>
    );
    
};

export default AuthProvider;