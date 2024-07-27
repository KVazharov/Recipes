import { Link } from 'react-router-dom'
import useForm from '../../../hooks/useForm'

import './Register.css'
import { useContext } from 'react'
import AuthContext from '../../../contexts/authContext'
export default function Regsiter() {

    const { registerSubmit } = useContext(AuthContext);
    const {formValues, onChangeHandler, onSubmit} = useForm(registerSubmit, {
        username: '',
        email: '',
        password: '',
        repass: '',
    })

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
                <label htmlFor="confirm-password"><span>Confirm password</span></label>
                <input
                    type="password"
                    id="confirm-password"
                    name="repass"
                value={formValues.repass}
                onChange={onChangeHandler}
                />
                <div className="checkbox">
                    <input type="checkbox" id="scales" name="scales" />
                    <label htmlFor="scales">I agree with our policy terms</label>
                </div>
                <button className="register-btn" type='submit'>Register</button>
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