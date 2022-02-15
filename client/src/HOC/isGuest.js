import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function isGuest(WrappedComponent) {
    const Component = (props) => {        
        const history = useHistory();
        
        useEffect(() => {
            let userData = JSON.parse(localStorage.getItem('userData'));
            
            if (userData) {
                history.push('/');
                return null;
            }
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

        return <WrappedComponent {...props} />
    }
    return Component;
}

export default isGuest;