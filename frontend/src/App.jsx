import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
