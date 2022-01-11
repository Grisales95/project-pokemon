import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { AuthContext } from '../../context/authContext';
// import { AuthContext } from "../../auth/authContext";

import Login from '../../pages/Login';
import Page404 from '../../pages/Page404';
import PokemonDetails from '../../pages/PokemonDetails';

import DashboardRoutes from './DashboardRoutes';

const AppRouter = () => {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={user.logged ? <Navigate to='/home' /> : <Login />}
        />

        <Route path='/pokemon/:id' element={<PokemonDetails />} />

        <Route path='/*' element={<DashboardRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
