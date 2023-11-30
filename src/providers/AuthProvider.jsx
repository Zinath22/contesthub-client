

// import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
// import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../firebase/firebase.config";
import { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth";
import useAxiosPublic from '../Hook/useAxiosPublic/useAxiosPublic';


// import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const googleLogIn = () => {
        return signInWithPopup(auth, googleProvider)
            .catch(error => {
                console.error("Google Sign-In Error:", error);
            });
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .catch(error => {
                console.error("Create User Error:", error);
            });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .catch(error => {
                console.error("Sign In Error:", error);
            });
    }

    const logOut = () => {
        
        return signOut(auth)
            
    }

    // const updateUserProfile = (name, photo) => {
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, photoURL: photo
    //     });
    // }
    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        } )
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            
            setUser(currentUser);
            console.log('user', currentUser);
            // jwt 
            if(currentUser){
                // get token 
                const userInfo = {email: currentUser.email};
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })
            }
            else{
                // do something 
                 
            localStorage.removeItem('access-token');
            setLoading(false);
                 
            }
           
            // if(currentUser){
            //     const userInfo = {email: currentUser.email};
            //    axiosPublic.post('/jwt', userInfo)
            //    .then(res => {
            //     if(res.data.token){
            //         localStorage.setItem('access-token', res.data.token)
                    // setLoading(false);
            //        }
            //    })
            // }
            // else{
            //     localStorage.removeItem('access-token');
            //     setLoading(false);
            // }

           
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic]);

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        googleLogIn,
        updateUserProfile
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider; 
