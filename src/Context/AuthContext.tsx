import React, { createContext, useCallback, useState } from 'react';
import Cookies from 'universal-cookie';

interface IContext {
    authenticated: boolean;
    handleLogin: () => void;
}

const Context = createContext({} as IContext);

const AuthProvider: React.FC = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(true)

    const handleLogin = () => {
        console.log("handle login")
        console.log(authenticated)
        setAuthenticated(true)
        const cookies = new Cookies();
    }


    return (
        <Context.Provider value={{authenticated, handleLogin}}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };
