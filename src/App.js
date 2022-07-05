import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

// * import components
import Navbar from './components/UI/Navbar';
import Footer from './components/UI/Footer';

// * import pages
import Home from './pages/Home';
import Updates from './pages/Updates';
import KnowledgeLibrary from './pages/KnowledgeLibrary';
import Faq from './pages/Faq';
import Templates from './pages/Templates';
import Codes from './pages/Codes';
import Project from './pages/Project';
import FormType from './pages/FormType';

// * import css
import './assets/css/style.css';
import 'react-toastify/dist/ReactToastify.css';

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
          <Route path="/pages/codes" element={<Codes />}></Route>
          <Route path="/pages/projects" element={<Project />}></Route>
          <Route path="/pages/formtype" element={<FormType />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
    </React.Fragment>
  )
}

export default App
