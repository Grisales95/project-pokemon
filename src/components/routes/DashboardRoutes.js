import { Route, Routes } from "react-router-dom";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";
import Navbar from "../Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";

const DashboardRoutes = () => {
  return (
    <>
      <Navbar />
      <PrivateRoute>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </PrivateRoute>
    </>
  );
};

export default DashboardRoutes;
