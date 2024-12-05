import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(authContext);

  console.log(user);
  if (user) {
    return children;
  }
  return <Navigate to="/sign-up"></Navigate>;
};

export default PrivateRoute;
