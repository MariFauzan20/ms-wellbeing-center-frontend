import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./components/Login";
import SignUp from "./pages/SignUp";
import CheckKesMental from "./pages/CheckKesMental";
import "./assets/css/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Articles from "./pages/Articles";
import StartCekKes from "./pages/StartCekKes";
import Konseling from "./pages/Konseling";
import Soal from "./pages/Soal";
import HasilCheck from "./pages/HasilCheck";
import { useState, useEffect } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const dataLogin = JSON.parse(localStorage.getItem("isLoggedIn"));
    setIsLogin(dataLogin);
  }, [isLogin]);

  return (
    <BrowserRouter>
      <Header isLogin={isLogin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/login" element={<Login setIsLogin={setIsLogin} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cek-kesehatan-mental" element={<CheckKesMental />} />
        <Route path="/start-cek-kesehatan-mental" element={<StartCekKes />} />
        <Route path="/soal-cek-kesehatan-mental/:index" element={<Soal />} />
        <Route path="/konseling-ms-wellbeing" element={<Konseling />} />
        <Route path="/hasil-cek-kesehatan-mental" element={<HasilCheck />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
