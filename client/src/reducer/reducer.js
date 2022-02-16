import { setUserData } from "../api/localStorageSetup";

export const initialState = {
    isAuthenticated: false,
    user: null,
    id: null,
    isAdmin: false
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            setUserData(action.payload);
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload.username,
                id: action.payload._id,
                isAdmin: action.payload.isAdmin
            };

        case 'LOGOUT':
            localStorage.clear();
            return {
                ...state,
                isAuthenticated: false,
                user: null,
                id: null,
                isAdmin: null
            };

        default:
            return state;
    }
};

export default reducer;