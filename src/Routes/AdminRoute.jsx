/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/shared/Loader";

const AdminRoute = ({ children }) => {
  //   const [isAdmin, isAdminloading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();
  //   || isAdminloading
  if (loading) {
    return <Loader></Loader>;
  }
  //   && isAdmin
  if (user) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default AdminRoute;
