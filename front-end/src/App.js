import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import HomePage from "./pages/home/home";
import Comics from "./pages/comics/comics";
import Upload from "./components/upload";
import AboutUs from "./pages/aboutUs/aboutUs";
import Navbar from "./components/navbar";
import Details from "./pages/selectedComic/selectedComic";
import ReadComic from "./pages/readComic/readComic";
import Footer from "./components/footer";
import { AppProvider } from "./Context";

function App() {
  return (
    <div className="App">
      <AppProvider>
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
      </AppProvider>
    </div>
  );
}

export default App;
