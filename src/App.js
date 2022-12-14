import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Country from './components/country';
import FullPart from './components/bodys';
import Head from './components/header';
import './App.css';

const App = () => (
  <Router>
    <Head />
    <Routes>
      <Route exact path="/" element={<FullPart />} />
      <Route path="/otherC/name" element={<Country />} />
    </Routes>
  </Router>
);

export default App;
