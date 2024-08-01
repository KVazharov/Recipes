import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useForm from "../../../hooks/useForm";

import AuthContext from "../../../contexts/authContext";
import loginValidation from "../../../validation/loginValidation";
import './Login.css';

export default function Login() {

    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [initialRender, setInitialRender] = useState(true);
    const { loginSubmit } = useContext(AuthContext);

    const { formValues, onChangeHandler, onSubmit } = useForm(loginSubmit, {
        email: '',
        password: ''
    });

    useEffect(() => {

        if (!initialRender) {

            setIsDisabled(Object.keys(errors).length !== 0);
            setErrors(loginValidation(formValues));
            
        }
        setInitialRender(false);

    }, [formValues, isDisabled]);

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
                {errors.email && <span className="error">{errors.email}</span>}
                <label htmlFor="password"><span>Password</span></label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={onChangeHandler}
                />
                {errors.password && <span className="error">{errors.password}</span>}

                <button className="login-btn" disabled={isDisabled} type="submit">Login</button>
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