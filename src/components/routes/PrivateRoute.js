import { Navigate } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { AuthContext } from "../../auth/authContext";

const PrivateRoute = ({ children }) => {
  const { user } = useContext(AuthContext);

  return user.logged ? children : <Navigate to="/" />;
};

export default PrivateRoute;
