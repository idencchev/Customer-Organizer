import React, { useState } from "react";
import { loginUser } from "../../api/data.js";
import { useStateValue } from "../../Context/StateProvider.js";
import './Login.css';



function Login(props) {

    const [{ user }, dispatch] = useStateValue();

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

            const response = await loginUser(userData)

            dispatch({
                type: 'ADD_USER',
                item: {
                    username: response.userData.username,
                    isAdmin: response.userData.isAdmin,
                    id: response.userData._id,
                }
            });

            window.location.href = '/';
           // props.history.push('/');

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
