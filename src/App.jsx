import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import initialNotes from './utils/initialData';
import Navbar from './components/Navbar';
import ToastContainer from './components/ToastContainer';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import NoteDetailPage from './pages/NoteDetailPage';
import AddNotePage from './pages/AddNotePage';
import NotFoundPage from './pages/NotFoundPage';
import { useToast } from './utils/useToast';

function App() {
  const [notes, setNotes] = useState(initialNotes);
  const { toasts, showToast } = useToast();

  const addNote = ({ title, body }) => {
    const newNote = {
      id: `notes-${+new Date()}`,
      title,
      body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes((prev) => [newNote, ...prev]);
    showToast('Catatan berhasil ditambahkan! 🎉', 'success');
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    showToast('Catatan berhasil dihapus.', 'danger');
  };

  const toggleArchive = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    );
    const note = notes.find((n) => n.id === id);
    if (note) {
      showToast(
        note.archived ? 'Catatan dipindahkan ke aktif. ✅' : 'Catatan berhasil diarsipkan. 📦',
        'warning'
      );
    }
  };

  const activeNotes = notes.filter((n) => !n.archived);
  const archivedNotes = notes.filter((n) => n.archived);

  return (
    <div className="app-layout">
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                notes={activeNotes}
                onDelete={deleteNote}
                onToggleArchive={toggleArchive}
              />
            }
          />
          <Route
            path="/archive"
            element={
              <ArchivePage
                notes={archivedNotes}
                onDelete={deleteNote}
                onToggleArchive={toggleArchive}
              />
            }
          />
          <Route
            path="/notes/new"
            element={<AddNotePage onAdd={addNote} />}
          />
          <Route
            path="/notes/:id"
            element={
              <NoteDetailPage
                notes={notes}
                onDelete={deleteNote}
                onToggleArchive={toggleArchive}
              />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <ToastContainer toasts={toasts} />
    </div>
  );
}

export default App;
