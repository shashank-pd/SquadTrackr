import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import ViewMembersPage from "./pages/ViewMembersPage/ViewMembersPage";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/members" element={<ViewMembersPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
