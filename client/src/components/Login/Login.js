import React, { useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import './Login.css';

function Login() {

    const [{ user }, dicpatch] = useStateValue();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
        redirect: null,
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

            const request = await fetch('http://localhost:5000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: userData.username,
                    password: userData.password
                })
            });

            if (!request.ok) {
                throw await request.json();
            }

            const data = await request.json();

            dicpatch({
                type: 'ADD_USER',
                item: {
                    username: data.userData.username,
                    isAdmin: data.userData.isAdmin,
                    id: data.userData._id
                }
            });

            const token = data.userData.token;
            document.cookie = `x-auth-token = ${token}`;

        } catch (error) {
            console.log(error);
        }

    }


    return (
        <div>
            <form onSubmit={onLoginHandler}>
                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input onChange={onChangeHandler} type="password" placeholder="Enter Password" name="password" required />

                    <button type="submit">Login</button>

                </div>
            </form>


        </div>

    )
}
export default Login;
