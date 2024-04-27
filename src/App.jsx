import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Protected from './pages/Protected';

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Protected><Home /></Protected>} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App;
