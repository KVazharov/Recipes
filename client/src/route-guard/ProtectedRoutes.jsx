import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

const ProtectedRoutes = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;