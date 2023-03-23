import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import AboutUs from './components/aboutUs'
import Comics from './components/comics'
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer'
import Navbar from './components/navbar'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Comics />
    {/* <AboutUs /> */}
    {/* <App /> */}
    {/* <HomePage /> */}
=======
    <App />
>>>>>>> cf3859b2968f92034f405f5d65bde90e664cb428
    {/* <Navbar /> */}
    {/* <Footer /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
