import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/UI/Navbar';
import Home from './pages/Home';
import Updates from './pages/Updates';
import KnowledgeLibrary from './pages/KnowledgeLibrary';
import Footer from './components/UI/Footer';
import './assets/css/style.css';

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/pages/updates" element={<Updates />}></Route>
          <Route path="/pages/knowledge" element={<KnowledgeLibrary />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
