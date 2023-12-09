/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Loader from "../components/shared/Loader";
import useAdmin from "../hooks/useAdmin";

const AdminRoute = ({ children }) => {
  const [isAdmin, isAdminloading] = useAdmin();
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading || isAdminloading) {
    return <Loader></Loader>;
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate state={{ from: location }} to="/" replace></Navigate>;
};

export default AdminRoute;
