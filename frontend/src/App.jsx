import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./pages/LandingPage/LandingPage";
import ViewMembersPage from "./pages/ViewMembersPage/ViewMembersPage";
import MemberDetailsPage from "./pages/MemberDetailsPage/MemberDetailsPage";
import AddMemberPage from "./pages/AddMemberPage/AddMemberPage";

function App() {
  return (
    <div className="app-container">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/members" element={<ViewMembersPage />} />
          <Route path="/members/:id" element={<MemberDetailsPage />} />
          <Route path="/add" element={<AddMemberPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
