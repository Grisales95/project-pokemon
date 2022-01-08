import { Route, Routes } from "react-router-dom";

import FavoritesPokemonProvider from "../../context/favoritesPokemonContext";
import Favorites from "../../pages/Favorites";
import Home from "../../pages/Home";
import Navbar from "../Navbar/Navbar";
import PrivateRoute from "./PrivateRoute";

const DashboardRoutes = () => {
  return (
    <>
      <FavoritesPokemonProvider>
        <Navbar />
        <PrivateRoute>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </PrivateRoute>
      </FavoritesPokemonProvider>
    </>
  );
};

export default DashboardRoutes;
