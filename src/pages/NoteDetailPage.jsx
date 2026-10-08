import { useParams, useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/dateFormat';

function NoteDetailPage({ notes, onDelete, onToggleArchive }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const note = notes.find((n) => n.id === id);

  if (!note) {
    return (
      <div className="container">
        <div className="not-found">
          <div className="not-found-code">404</div>
          <h2>Catatan Tidak Ditemukan</h2>
          <p>
            Catatan dengan ID &ldquo;{id}&rdquo; tidak ada atau telah dihapus.
          </p>
          <button
            id="btn-back-to-home"
            className="btn btn-primary"
            onClick={() => navigate('/')}
            style={{ marginTop: '12px' }}
          >
            ← Kembali ke Beranda
          </button>
        </div>
      </div>
    );
  }

  const handleDelete = () => {
    onDelete(note.id);
    navigate(note.archived ? '/archive' : '/');
  };

  const handleToggleArchive = () => {
    onToggleArchive(note.id);
    navigate(note.archived ? '/' : '/archive');
  };

  return (
    <div className="container">
      <div className="detail-header animate-in">
        <div className="detail-back">
          <button
            id="btn-detail-back"
            className="btn btn-ghost btn-sm"
            onClick={() => navigate(note.archived ? '/archive' : '/')}
            aria-label="Kembali ke halaman sebelumnya"
          >
            ← Kembali
          </button>
        </div>

        <h1 className="detail-title">{note.title}</h1>

        <div className="detail-meta">
          <span className="detail-date">
            <span aria-hidden="true">🗓️</span>
            {formatDate(note.createdAt)}
          </span>
          <span className={`badge ${note.archived ? 'badge-archived' : 'badge-active'}`}>
            {note.archived ? '📦 Terarsip' : '✅ Aktif'}
          </span>
        </div>

        <div className="detail-actions">
          <button
            id="btn-detail-toggle-archive"
            className="btn btn-secondary"
            onClick={handleToggleArchive}
            aria-label={note.archived ? 'Pindahkan ke catatan aktif' : 'Arsipkan catatan ini'}
          >
            {note.archived ? '📤 Pindah ke Aktif' : '📦 Arsipkan'}
          </button>
          <button
            id="btn-detail-delete"
            className="btn btn-danger"
            onClick={handleDelete}
            aria-label="Hapus catatan ini"
          >
            🗑️ Hapus Catatan
          </button>
        </div>
      </div>

      <div className="detail-body animate-in" style={{ animationDelay: '0.1s' }}>
        {note.body}
      </div>
    </div>
  );
}

export default NoteDetailPage;
