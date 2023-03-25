import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Home from './pages/Home';
import Landing from './pages/Landing';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Account from './pages/Account';
import ProtectedRoutes from './components/ProtectedRoutes';
import Profile from './pages/Profile';

function App() {
  return (
    <>
    <AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={ <Home />  } />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/account' element={<ProtectedRoutes><Account /> </ProtectedRoutes> } />
      </Routes>      
    </AuthContextProvider>
    </>
  );
}

export default App;
