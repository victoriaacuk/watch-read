import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from './Home';
import Upcoming from './Upcoming';
import Manga from './Manga';
import Novel from './Novel';


function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/manga" className='link'>Manga</Link>
        <Link to="/novels" className='link'>Novels</Link>
        <Link to="/upcoming" className='link'>Upcoming</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/manga" element={<Manga/>}/>
        <Route path="/novels" element={<Novel/>}/>
        <Route path='/upcoming' element={<Upcoming/>}/>
      </Routes>
    </Router>
  );
}

export default App;
