import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const TITLE_MAX = 50;

function AddNotePage({ onAdd }) {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !body.trim()) return;
    onAdd({ title: title.trim(), body: body.trim() });
    navigate('/');
  };

  const isTitleOver = title.length > TITLE_MAX;
  const isFormValid = title.trim() && body.trim() && !isTitleOver;

  return (
    <div className="container">
      <div className="page-header">
        <h1>Tambah Catatan</h1>
        <p>Buat catatan baru dan simpan ide-idemu.</p>
      </div>

      <div className="form-card animate-in">
        <form onSubmit={handleSubmit} id="add-note-form" noValidate>
          <div className="form-group">
            <label htmlFor="note-title" className="form-label">
              Judul Catatan
            </label>
            <input
              id="note-title"
              type="text"
              className="form-input"
              placeholder="Masukkan judul catatan..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              maxLength={TITLE_MAX + 20}
              aria-describedby="title-char-count"
              required
            />
            <span
              id="title-char-count"
              className={`char-count${isTitleOver ? ' over' : ''}`}
              aria-live="polite"
            >
              {title.length}/{TITLE_MAX}
              {isTitleOver && ' — Judul terlalu panjang!'}
            </span>
          </div>

          <div className="form-group">
            <label htmlFor="note-body" className="form-label">
              Isi Catatan
            </label>
            <textarea
              id="note-body"
              className="form-textarea"
              placeholder="Tulis isi catatanmu di sini..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
            />
          </div>

          <div className="form-actions">
            <Link
              to="/"
              id="btn-cancel-add"
              className="btn btn-ghost"
            >
              Batal
            </Link>
            <button
              id="btn-submit-add"
              type="submit"
              className="btn btn-primary"
              disabled={!isFormValid}
              style={{ opacity: isFormValid ? 1 : 0.5, cursor: isFormValid ? 'pointer' : 'not-allowed' }}
              aria-disabled={!isFormValid}
            >
              💾 Simpan Catatan
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotePage;
