import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';
import WelcomePage from './components/Welcome';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<WelcomePage />}></Route>
        <Route path='/home' element={<Dashboard />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
