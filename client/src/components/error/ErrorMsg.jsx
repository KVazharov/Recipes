import { Link } from "react-router-dom";

export default function ErrorMsg({
    err
}) {
    return (
        <div className="error">
            <h1>{err}</h1>
            <Link id="home" to='/'>Go to Hope Page</Link>
        </div>
    )
}