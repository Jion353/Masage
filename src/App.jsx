import React from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./pacages/Header/Header.jsx";
import Footer from "./pacages/Footer/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Staff from "./pages/Staff/Staff.jsx";
import Reserv from "./pages/Reserv/Reserv.jsx";

import "./App.scss";

function App() {
  return (
    <div className="page-wrapper">
      <Header />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="#/staff" element={<Staff />} />
          <Route path="#/reserv" element={<Reserv />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
