import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { LoginContext } from '../../contexts/LoginProvider';
import Favorites from '../../pages/Favorites';
import Home from '../../pages/Home';
import Login from '../../pages/Login';
import Header from '../Home/Header/Header';

const AppRouter = () => {
  const [isLogin] = useContext(LoginContext);
  return (
    <>
      {/* <Header /> */}
      <Router>
        <Header />
        <Routes>
          <Route
            path='/'
            element={isLogin ? <Navigate to='/home' /> : <Login />}
          />

          <Route
            path='/home'
            element={isLogin ? <Home /> : <Navigate to='/' />}
          />
          <Route path='/favorites' element={<Favorites />} />
          {/* <Route path="*" element={Error404} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;
