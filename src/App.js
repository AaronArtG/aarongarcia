import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './features/Home';
import About from './features/About';

import Instagram from './features/Instagram';
import LinkedIn from './features/LinkedIn';
import SoundCloud from './features/SoundCloud';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="container"> {/* Use Bootstrap container class to center content */}
        <Header />
        <main>
          <h1 className="text-center">Aaron Arthur Garcia</h1> {/* Use Bootstrap text-center class to center the heading */}
        </main>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
         
          <Route path="/instagram" element={<Instagram />} />
          <Route path="/linkedin" element={<LinkedIn />} />
          <Route path="/soundcloud" element={<SoundCloud />} />
        </Routes>
        <img src="https://scontent.fsan1-2.fna.fbcdn.net/v/t39.30808-6/356863275_7070048943023852_2754456143782824243_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_ohc=ucolTtZFyZsAX-JAFBS&_nc_ht=scontent.fsan1-2.fna&oh=00_AfAfsGm9j5uyXCti2n9DXs_3AQSwjBr8jOLL9WMfUalaHg&oe=64C049A8" alt="Aaron Djing" />
        <h1>Contact me</h1>
      
       
      <br></br>
      <br></br>
      By email: <a href="aarongarcia407@gmail.com">aarongarcia407@gmail.com</a>
      

      <br></br>
      By phone: <a href="tel:16195738493">16195738493</a>
      <br></br>
      <br></br>
      <br></br>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

