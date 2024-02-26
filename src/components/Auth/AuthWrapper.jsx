/* eslint-disable react/prop-types */
import { Navigate, Outlet } from "react-router-dom";
import { isUserLoggedIn } from "../../utils/auth"; // Adjust the import path as necessary

const AuthWrapper = () => {
  return isUserLoggedIn() ? <Outlet /> : <Navigate to="/login" replace />;
};

export default AuthWrapper;
