
import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

const PublicRoutes = () => {
    
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoutes;