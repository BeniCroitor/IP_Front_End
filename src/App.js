/*eslint-disable*/
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css';
import { Header } from './components/header/Header';
import { UpBar } from './components/upBar/UpBar';
import { Footer } from './components/footer/Footer';

const App = () => {
  return (
    <Router>
      <main>
        <div>
          <Header />
          <UpBar />
          <Routes>
            <Route path="/" element={<Home />} />{' '}
          </Routes>
          <Footer />
        </div>
      </main>
    </Router>
  );
};

export default App;
