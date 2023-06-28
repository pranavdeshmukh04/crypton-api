import React from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Coin from './pages/Coin';
import Home from './pages/Home';
import Features from './components/Features'
import MarketUpdates from './components/MarketUpdate'
import News from './components/News'
import Join from './components/Join'

const App = () => {
  return (
    <div className='app'>
        <Navbar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coin/:coinId" element={<Coin />}>
            </Route>
            <Route path="/features" element={<Features />} />
            <Route path="/marketupdates" element={<MarketUpdates />} />
            <Route path="/news" element={<News />} />
            <Route path="/join" element={<Join />} />
        </Routes>
    </div>
  )
}

export default App
