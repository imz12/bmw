import {BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './Component/Navbar';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Login from './Component/Login';
import Contact from './Component/Contact';
import About from './Component/About';

const App = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={
            <>
              <Navbar />
              <Home />
            </>
          }
        />
        <Route path="/contact" element={
            <>
              <Navbar />
              <Contact />
            </>
          }
        />
        <Route path="/about" element={
            <>
              <Navbar />
              <About />
            </>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

