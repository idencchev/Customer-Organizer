import React, { useEffect, useState } from "react";
import { deleteUser, getUsers, registerUser } from "../../api/data.js";
import { useUserStateValue } from "../../Context/UserStateProvider.js";
import './Admin.css'

function Admin() {

    const [{ id }] = useUserStateValue();

    const [userData, setUserData] = useState({
        username: '',
        password: '',
        rePass: ''
    });

    const [isAdminData, setIsAdminData] = useState({
        isAdmin: false
    });

    const [usersData, setusersData] = useState([]);

    useEffect(async () => {
        const data = await getUsers();
        setusersData(data);
    }, []);

    const onChangeHandler = (e) => {
        setUserData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value.toLowerCase()
        }));
    };

    const isAdminHandler = (e) => {
        setIsAdminData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.checked
        }));
    };

    const onCreateHandler = async (e) => {
        e.preventDefault();
        const resData = await registerUser({ ...userData, ...isAdminData });
        const updateUsersState = {
            username: resData.userData.username,
            isAdmin: resData.userData.isAdmin,
            _id: resData.userData._id
        }
        setusersData(prevState => [...prevState, updateUsersState]);
    }

    const onDeleteHandler = async (id) => {
       const delUser = await deleteUser(id);
       setusersData(usersData.filter(usersData => usersData._id !== id));
       console.log(delUser);
    }

    return (
        <div className="admin">
            <form onSubmit={onCreateHandler}>
                <div className="admin-container">
                    <h1>CREATE USER</h1>
                    <label htmlFor="uname"><b>USERNAME</b></label>
                    <input onChange={onChangeHandler} type="text" placeholder="Enter Username" name="username" required />

                    <label htmlFor="psw"><b>PASSWORD</b></label>
                    <input onChange={onChangeHandler} type="password" placeholder="Enter Password" name="password" required />

                    <label htmlFor="psw"><b>REPEAT PASSWORD</b></label>
                    <input onChange={onChangeHandler} type="password" placeholder="Repeat Password" name="rePass" required />

                    <label htmlFor="admin">Admin Account?</label>
                    <input onChange={isAdminHandler} type="checkbox" id="isAdmin" name="isAdmin" />
                    <button className="btn-submit" type="submit">CREATE USER</button>
                </div>
            </form>
            <div className="user-list-div">
                <h2>USER'S LIST</h2>
                <ul className="user-list-ul">
                    {usersData.map(user => {
                        return (
                            <li key={user._id} className="user-list-li">
                                {user.isAdmin ? 'Admin Account: ' : 'User Account: '}
                                {user.username}
                                {user._id !== id ? <button onClick={() => onDeleteHandler(user._id)} className="btn-delete-user">Delete</button> : null}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default Admin;
