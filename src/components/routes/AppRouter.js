import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthContext } from "../../context/authContext";
// import { AuthContext } from "../../auth/authContext";

import Login from "../../pages/Login";

import DashboardRoutes from "./DashboardRoutes";

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user.logged ? <Navigate to="/home" /> : <Login />}
        />

        <Route path="/*" element={<DashboardRoutes />} />

        {/* <Route path="*" element={Error404} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
