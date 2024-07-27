import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import userAuth from '../api/userAuth'
import usePersistedState from "../hooks/usePersistedStare";

const AuthContext = createContext();

AuthContext.displayName = 'AuthContext';

export const AuthProvider = ({
    children
}) => {

    const navigate = useNavigate();
    const [auth, setAuth] = usePersistedState('auth',{});



    const loginSubmit = async (values) => {
        try {
            const result = await userAuth.login(values.email, values.password);
            setAuth(result);
            localStorage.setItem('accessToken', result.accessToken);
            navigate('/');

        } catch (err) {

        }

    };

    const registerSubmit = async (values) => {
        const result = await userAuth.register(values.username, values.email, values.password)
        setAuth(result);
        localStorage.setItem('accessToken', result.accessToken);
        navigate('/');
    }

    const logoutHandler = () => {
        setAuth({});
        localStorage.removeItem('accessToken');
        navigate('/')
    }
    const values = {
        registerSubmit,
        loginSubmit,
        logoutHandler,
        userId: auth._id,
        username: auth.username,
        email: auth.email,
        isAuthenticated: !!auth.email,

    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;
