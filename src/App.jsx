import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/Dashboard/layout';
import ConfirmPassword from './components/ConfirmPassword';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import WelcomePage from './components/Welcome';

const App = () => {
  return (
    <>
      <Layout>
        <ToastContainer
          position='top-center'
          autoClose={3000}
          closeOnClick
          theme='light'
          pauseOnHover={false}
        />
        <Router>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/confirm' element={<ConfirmPassword />} />
            <Route path='/home' element={<Dashboard />} />
          </Routes>
        </Router>
      </Layout>
    </>
  );
};

export default App;
