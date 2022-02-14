import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';


function IsAuth(WrappedComponent) {


    const Component = (props) => {

        let userData = JSON.parse(localStorage.getItem('userData'));
        
        const history = useHistory();

        if (!userData) {
            history.push('/');
            return null;
        }

        return <WrappedComponent {...props} />
    }
    return Component;
}

export default IsAuth;
