import logo from './logo.svg';
import './styles/App.css';
import Navbar from "./Navbar";
import React from 'react';
import MainPage from './MainPage';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
