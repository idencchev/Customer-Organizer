import React from 'react';
import { useHistory } from 'react-router-dom';
import { useUserStateValue } from '../Context/UserStateProvider.js';

function IsAdmin(WrappedComponent) {


    const Component = (props) => {

        const history = useHistory();
        const [{ user, isAdmin }, dispatch] = useUserStateValue();
console.log(isAdmin);
        if (!isAdmin) {
            history.push('/');
            return null;
        }

        if (!user) {
            history.push('/');
            return null;
        }

        return <WrappedComponent {...props} />
    }
    return Component;
}

export default IsAdmin;
