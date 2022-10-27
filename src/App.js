
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import NoPageFound from './Pages/NoPageFound';

import { ServiceProvider, ContactProvider, HooksInfo } from './ContextAPI';
import Contact from './Pages/Contact';
import Hooks from './Hooks/Hooks';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/services" element={<Services web="Web Services" />} /> */}
          <Route path="/services" element={
            <ServiceProvider value={["Web Development", "Mobile Development", "Android", "IOS", "Full stack development"]} >
              <Services />
            </ServiceProvider>
          } />
          <Route path="*" element={
            <ContactProvider value={{ city: 'Chennai', state: 'Tamilnadu', country: 'India' }}>
              <Contact />
            </ContactProvider>
          } />
          <Route path="/hooks" element={
            <HooksInfo.Provider value={{ backgroundColor: "#009688", color: "#fff", border: "none", padding: "5px 20px", letterSpacing: "1px", borderRadius: "6px" }}>
              <Hooks />
            </HooksInfo.Provider>
          } />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;