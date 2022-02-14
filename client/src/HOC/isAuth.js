import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';


function isAuth(WrappedComponent) {

    const Component = (props) => {
        const [{ user }, dispatch] = useStateValue();

        const history = useHistory();

        if (!user.length) {
            history.push('/');
            return null;
        }
        return <WrappedComponent {...props} />
    }
    return Component;
}

export default isAuth;
