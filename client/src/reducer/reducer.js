export const initialState = {
    isVerified: false,
    username: null,
    id: null,
    isAdmin: false
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                isVerified: action.payload.isVerified,
                username: action.payload.username,
                id: action.payload.id,
                isAdmin: action.payload.isAdmin
            };

        case 'LOGOUT':
            return {
                ...state,
                isVerified: false,
                username: null,
                id: null,
                isAdmin: false
            };

        case 'VERIFY':
            return {
                ...state,
                isVerified: action.payload.isVerified,
                username: action.payload.username,
                id: action.payload.id,
                isAdmin: action.payload.isAdmin
            };

        default:
            return state;
    }
};

export default reducer;