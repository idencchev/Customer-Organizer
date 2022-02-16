import { createContext, useContext, useReducer } from 'react';

// Prepares the dataLayer
export const UserContext = createContext();

// Wrap our app and provide the Data layer
export const StateProvider = ({ reducer, initialState, children }) => {
    return (
        <UserContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </UserContext.Provider>
    );
};

// Pull information from the data layer
export const useUserStateValue = () => useContext(UserContext);