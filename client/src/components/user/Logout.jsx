import { useContext, useEffect } from "react"
import userAuth from "../../api/userAuth"
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Logout() {
    const navigate = useNavigate();
    const { logoutHandler } = useContext(AuthContext)

    useEffect(() => {

        userAuth.logout()
            .then(() => {
                logoutHandler();
                navigate('/');
            })
            .catch(() => navigate('/'))

    }, []);

    return null
}