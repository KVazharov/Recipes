import { Link } from "react-router-dom"
import './Footer.css'


export default function Footer() {
    return (
        <footer>
        <div className="links">
            <div className="contact-us">
                <h4>Contact Us</h4>
                <ul>
                    <li>
                        <address>XXX XXX XXX XXX</address>
                    </li>
                    <li>
                        +359 887 004 527
                    </li>
                    <li>
                        recipe@gmail.com
                    </li>
                </ul>
            </div>


            <div className="account">
                <h4>Account</h4>
                <ul>
                    <li>
                        <Link to="/register">Create Account</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            </div>

            <div className="social">
                <h4>Social</h4>
                <ul>
                    <li>
                        <a href="#"><i className="fa-brands fa-facebook"></i> Facebook</a>
                    </li>
                    <li>
                        <a href=""><i className="fa-brands fa-instagram"></i> Instagram</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className="copy-rights">
            <p>All rights reserved by recipe.com &copy;</p>
        </div>
    </footer>
    )
}