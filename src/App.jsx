import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import TambahNotePage from "./pages/TambahNotePage";
import Arsip from "./pages/Arsip";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/Navigation";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { getUserLogged, getAccessToken } from "./utils/network_data";

function App() {
  const [authedUser, setAuthedUser] = useState(null);

  useEffect(() => {
    if (getAccessToken()) {
      (async () => {
        const { error, data } = await getUserLogged();
        if (!error) setAuthedUser(data);
      })();
    }
  }, []);

  return (
    <Router>
      <Navigation authedUser={authedUser} setAuthedUser={setAuthedUser} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/tambah-note/:id" element={<TambahNotePage />} />
        <Route path="/arsip" element={<Arsip />} />
        <Route path="/login" element={<LoginPage setAuthedUser={setAuthedUser} />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
