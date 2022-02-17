import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useUserStateValue } from '../Context/UserStateProvider.js';

function isGuest(WrappedComponent) {
    const Component = (props) => {
        
        const history = useHistory();
        const [{ isVerified }, dispatch] = useUserStateValue();

        useEffect(() => {
            if (isVerified) {
                history.push('/');
                return null;
            }
        }, []); // eslint-disable-line react-hooks/exhaustive-deps

        return <WrappedComponent {...props} />
    }
    return Component;
}

export default isGuest;