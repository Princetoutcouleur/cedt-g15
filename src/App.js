import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navigation'
import Accueil from './pages/Accueil';
import Contact from './pages/Contact';
import Formations from './pages/Formations';
import Presentation from './pages/Presentation';
import ConditionsAdmission from './pages/ConditionsAdmission';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <div className='App p-0 m-0'>
        {/* Barre de navigation */}
        <NavBar/>

        {/* Contenu des pages */}
        <div className="container-fluid">
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/conditions-admission" element={<ConditionsAdmission />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
