import React from 'react';
import { createContext } from 'react/cjs/react.development';
import useFirebase from '../hooks/useFirebase';

export const AuthContext = createContext();
const AuthProvider = (props) => {
    const { children } = props;
    const allContext = useFirebase();
    return (
        <div>
            <AuthContext.Provider value={allContext}>
                {children}
            </AuthContext.Provider>

        </div>
    );
};

export default AuthProvider;