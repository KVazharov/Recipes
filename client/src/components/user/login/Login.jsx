import { useContext, useState } from "react"
import useForm from "../../../hooks/useForm"

import * as userAuth from "../../../api/userAuth";
import AuthContext from "../../../contexts/authContext";
import './Login.css'
import { Link } from "react-router-dom";

export default function Login() {

    const { loginSubmit } = useContext(AuthContext)

    const { formValues, onChangeHandler, onSubmit } = useForm(loginSubmit, {
        email: '',
        password: ''
    })


    return (
        <div className="login-form">
            <form onSubmit={onSubmit}>
                <h3>Login</h3>
                <label htmlFor="email"><span>Email</span></label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={onChangeHandler}
                />
                <label htmlFor="password"><span>Password</span></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={onChangeHandler}
                />

                <button className="login-btn" type="submit">Login</button>
                <div className="navigate-to">
                    <ul>
                        <li>
                            <Link to="/register">Create Account</Link>
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    )
}