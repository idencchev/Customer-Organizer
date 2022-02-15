import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function IsAuth(WrappedComponent) {
    const Component = (props) => {
        
        let userData = JSON.parse(localStorage.getItem('userData'));
        const history = useHistory();
        
        useEffect(() => {
            if (!userData) {
                history.push('/');
                return null;
            }
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

        return <WrappedComponent {...props} />
    }
    return Component;
}

export default IsAuth;
