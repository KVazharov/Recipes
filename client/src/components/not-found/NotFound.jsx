import { Link } from 'react-router-dom'

import './NotFound.css'

export default function NotFound() {
    return (
        <div className="not-found">
            <h2>404</h2>
            <h3>Oops, nothing here...</h3>
            <p>Please Check the URL</p>
            <p>Otherwise, <Link to="/">Click here</Link> to redirect to homepage.</p>
        </div>
    )
}