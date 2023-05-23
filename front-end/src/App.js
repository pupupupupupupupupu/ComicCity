import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HomePage from "./components/home";
import Comics from "./components/comics";
import Upload from "./components/upload";
import AboutUs from "./components/aboutUs";
import Navbar from "./components/navbar";
import Details from "./components/selectedComic";
import ReadComic from "./components/readComic";
import Footer from "./components/footer";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="components">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/comics" element={<Comics />} />
            <Route path="/comics/:id" element={<Details />} />
            <Route path="/comics/:id/:comicName" element={<ReadComic />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </div>
        <footer>
           <Footer />
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
