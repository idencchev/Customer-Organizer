import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserStateValue } from '../Context/UserStateProvider.js';

function IsAuth(WrappedComponent) {
    const Component = (props) => {
        
        const history = useHistory();
        const [{ user }, dispatch] = useUserStateValue();
    
        useEffect(() => {
            
            if (!user) {
                history.push('/');
                return null;
            }
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

        return <WrappedComponent {...props} />
    }
    return Component;
}

export default IsAuth;
