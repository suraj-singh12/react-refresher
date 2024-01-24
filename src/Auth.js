import React, { createContext, useState } from 'react';
import App from './App';
export const userContext = createContext();

const Auth = () => {
    const [usrName, setUsrName] = useState('');
    const [user, setUser] = useState({
        user: '',
        token: '',
        login: false,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({user: usrName, token: '12345', login: true});
        // setUsrName('');     // erase username
        // auto redirects to App now!
    }

    const logout = () => {
        setUser({user: '', token: '', login: false});
    }

    const login = (usrName) => {
        setUser({user: usrName, token: '12345', login: true});
    }

    return (
        !user.login ? (
            <>
                <form onSubmit={(e) => handleSubmit(e)}
                    style={{margin: '2rem'}}>
                    <input type="text" placeholder="Enter userName" value={usrName} onChange={(e) => setUsrName(e.target.value)} />
                    <button type="submit"> Login </button>
                </form>
            </>
        ) : (
            <userContext.Provider value={{usrName, login, logout}}>
                <App />
            </userContext.Provider>
        )
    )
};

export default Auth;