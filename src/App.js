import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
          path='/log-in'
          element={<Login />}
        />
        <Route
          path='/sign-up'
          element={<Signup />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
