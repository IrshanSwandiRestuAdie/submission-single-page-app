import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoteDetailPage from './pages/NoteDetailPage';
import TambahNotePage from './pages/TambahNotePage';
import Arsip from './pages/Arsip';
import NotFoundPage from './pages/NotFoundPage';
import Navigation from './components/Navigation';

function App() {

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/tambah-note/:id" element={<TambahNotePage />} />
        <Route path="/arsip" element={<Arsip />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;

