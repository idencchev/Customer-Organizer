import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { loginUser } from "../../api/data";
import actions from "../../redux/actions";
import './Login.css';

function Login(props) {
    const dispatch = useDispatch();

    const { login } = bindActionCreators(actions, dispatch);

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
            const loginData = {
                isVerified: true,
                username: response.userData.username,
                id: response.userData._id,
                isAdmin: response.userData.isAdmin
            }

            login(loginData);
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="login">
            <form className='login-form' onSubmit={onLoginHandler}>
                <h1 className="login-h1">LOGIN</h1>
                <label htmlFor="uname"><b>USERNAME</b></label>
                <input onChange={onChangeHandler} type="text" placeholder="Enter Username" name="username" required />

                <label htmlFor="psw"><b>PASSWORD</b></label>
                <input onChange={onChangeHandler} type="password" placeholder="Enter Password" name="password" required />

                <button className="btn-submit-login" type="submit">LOGIN</button>
            </form>
        </div>
    )
}
export default Login;
