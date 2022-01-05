import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "../../pages/Home";
import Login from "../../pages/Login";

const AppRouter = () => {
  const user = false;
  return (
    <Router>
      <Routes>
        <Route path="/" element={user ? <Navigate to="/home" /> : <Login />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/" />} />
        {/* <Route path="*" element={Error404} /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;
