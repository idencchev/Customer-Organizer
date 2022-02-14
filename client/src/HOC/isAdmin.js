import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function IsAdmin(WrappedComponent) {


    const Component = (props) => {

        let userData = JSON.parse(localStorage.getItem('userData'));

        const history = useHistory();

        if (userData?.isAdmin == false) {
            history.push('/');
            return null;
        }

        if (!userData) {
            history.push('/');
            return null;
        }

        return <WrappedComponent {...props} />
    }
    return Component;
}

export default IsAdmin;
