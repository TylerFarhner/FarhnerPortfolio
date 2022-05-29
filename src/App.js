import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CameraWorkPage from "./pages/CameraWorkPage";
import CodingPage from "./pages/CodingPage";
import ConsultingPage from "./pages/ConsultingPage";

// Components
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/About" element={<AboutPage />} />
        <Route path="/Cameras" element={<CameraWorkPage />} />
        <Route path="/Coding" element={<CodingPage />} />
        <Route path="/Consulting" element={<ConsultingPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default (App)