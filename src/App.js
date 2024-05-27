// import logo from './logo.svg';
import React from 'react';
import './App.css';
import './Style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivacyPolicy from './Component/PrivacyPolicy';
import Home from './Home';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
        </Routes>
      </BrowserRouter>
    
    </>
  );
}

export default App;
