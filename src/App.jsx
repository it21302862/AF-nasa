import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import Navbar from './components/Navbar';
import Protected from './pages/Protected';
import ParticlesComponent from './components/Background';
import NasaHomePage from './pages/NasaHome';


function App() {
  return (
    <div className="App">
      <AuthContextProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={ <Protected><Home /></Protected>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route
              path='/nasa-homepage'
              element={
                <Protected>
                  <NasaHomePage />
                </Protected>
              }
            />
        </Routes>
        <ParticlesComponent id = "particles"></ParticlesComponent>
      </BrowserRouter>
      </AuthContextProvider>
    </div>
  )
}

export default App;
