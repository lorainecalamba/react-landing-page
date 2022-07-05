import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// * import components
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';

// * import pages
import Home from './pages/Home';
import Updates from './pages/Updates';
import KnowledgeLibrary from './pages/KnowledgeLibrary';
import Faq from './pages/Faq';
import Templates from './pages/Templates';

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
          <Route path="/pages/faq" element={<Faq />}></Route>
          <Route path="/pages/templates" element={<Templates />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
