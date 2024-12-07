import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);

  if (loading) {
    return (
      <>
        <div className="max-w-screen-xl mx-auto mt-12">
          <span className="loading loading-spinner loading-lg bg-primary"></span>
        </div>
      </>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/sign-in"></Navigate>;
};

export default PrivateRoute;
