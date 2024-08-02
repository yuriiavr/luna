import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";


export const RestrictedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth();

  if (isLoggedIn) {
    return <Navigate to="/userhomepage" replace />;
  }

  return children;
};
