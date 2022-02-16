import React, { useState } from "react";
import { loginUser } from "../../api/data";
import { useUserStateValue } from "../../Context/UserStateProvider";
import './Login.css';

function Login(props) {

    const [{ }, dispatch] = useUserStateValue();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    const onChangeHandler = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.toLowerCase()
        }));

    };

    const onLoginHandler = async (e) => {
        e.preventDefault();
        try {

            const response = await loginUser(userData);
            
            dispatch({
                type: 'LOGIN',
                payload: {
                    isVerified: true,
                    username: response.userData.username,
                    id: response.userData._id,
                    isAdmin: response.userData.isAdmin
                }
            });

            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login">
            <form onSubmit={onLoginHandler}>
                <div className="container">
                    <label htmlFor="uname"><b>USERNAME</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFor="psw"><b>PASSWORD</b></label>
                    <input onChange={onChangeHandler} type="password" placeholder="Enter Password" name="password" required />

                    <button className="btn-submit" type="submit">LOGIN</button>

                </div>
            </form>
        </div>
    )
}
export default Login;
