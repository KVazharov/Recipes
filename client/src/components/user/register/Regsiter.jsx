import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../../contexts/authContext'

import useForm from '../../../hooks/useForm';
import './Register.css';
import registerValidation from '../../../validation/registerValidation';

export default function Regsiter() {

    const [errors, setErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(true);
    const [initialRender, setInitialRender] = useState(true);
    const { registerSubmit } = useContext(AuthContext);

    const { formValues, onChangeHandler, onSubmit } = useForm(registerSubmit, {
        username: '',
        email: '',
        password: '',
        repass: '',
    });

    useEffect(() => {

        if (!initialRender) {
            setErrors(registerValidation(formValues));
            setIsDisabled(Object.keys(errors).length !== 0);
        }
        setInitialRender(false);

    }, [formValues, isDisabled]);


    return (
        <div className="register-form">
            <form onSubmit={onSubmit}>
                <h3>Register</h3>
                <label htmlFor="username"><span>Username</span></label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formValues.username}
                    onChange={onChangeHandler}
                />
                {errors.username && <span className="error">{errors.username}</span>}
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
                <label htmlFor="confirm-password"><span>Confirm password</span></label>
                <input
                    type="password"
                    id="confirm-password"
                    name="repass"
                    value={formValues.repass}
                    onChange={onChangeHandler}
                />
                {errors.repass && <span className="error">{errors.repass}</span>}
                <button className="register-btn" disabled={isDisabled} type='submit' >Register</button>
                <div className="navigate-to">
                    <ul>
                        <li>
                            <Link to="/login">You Have Account</Link>
                        </li>
                    </ul>
                </div>
            </form>
        </div>

    )
}