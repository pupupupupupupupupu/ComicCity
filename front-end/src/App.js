import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HomePage from "./components/home";
import Comics from "./components/comics";
import Upload from "./components/upload";
import AboutUs from "./components/aboutUs";
import Navbar from "./components/navbar";
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="components">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
        {/* <footer>
           <Footer />
        </footer> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
