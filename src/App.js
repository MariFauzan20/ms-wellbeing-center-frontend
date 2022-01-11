import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import CheckKesMental from "./pages/CheckKesMental";
import "./assets/css/styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Article from "./pages/Articles";
import StartCekKes from "./pages/StartCekKes";
import Konseling from "./pages/Konseling";
import Soal from "./pages/Soal";
import HasilCheck from "./pages/HasilCheck";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="article" element={<Article />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cek-kesehatan-mental" element={<CheckKesMental />} />
        <Route path="start-cek-kesehatan-mental" element={<StartCekKes />} />
        <Route path="soal-cek-kesehatan-mental" element={<Soal />} />
        <Route path="konseling-ms-wellbeing" element={<Konseling />} />
        <Route path="hasil-cek-kesehatan-mental" element={<HasilCheck />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
