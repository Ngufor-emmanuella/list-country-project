import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Country from './components/country';
import Head from './components/header';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Head />
        <Routes>
          <Route exact path="/" element={<fullPart />} />
          <Route path="/otherC/name" element={<Country />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
