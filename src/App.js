import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Coin from './pages/Coin';
import Home from './pages/Home';

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:coinId" element={<Coin />}>
            </Route>
        </Routes>
    </div>
  )
}

export default App
