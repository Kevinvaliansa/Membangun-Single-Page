import { Link } from 'react-router-dom';
import { formatDate } from '../utils/dateFormat';

function NoteCard({ note, onDelete, onToggleArchive }) {
  const handleDelete = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onDelete(note.id);
  };

  const handleToggleArchive = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleArchive(note.id);
  };

  return (
    <article className="note-card animate-in" aria-label={`Catatan: ${note.title}`}>
      <Link
        to={`/notes/${note.id}`}
        style={{ textDecoration: 'none', color: 'inherit', display: 'contents' }}
        id={`note-card-link-${note.id}`}
      >
        <div className="note-card-title">{note.title}</div>
        <div className="note-card-date">
          <span>🗓️</span>
          {formatDate(note.createdAt)}
        </div>
        <div className="note-card-body">{note.body}</div>
      </Link>
      <div className="note-card-footer">
        <div style={{ flex: 1 }} />
        <div className="note-card-actions">
          <button
            id={`btn-archive-${note.id}`}
            className="btn btn-sm btn-secondary"
            onClick={handleToggleArchive}
            title={note.archived ? 'Pindah ke aktif' : 'Arsipkan'}
            aria-label={note.archived ? 'Pindahkan catatan ke aktif' : 'Arsipkan catatan'}
          >
            {note.archived ? '📤' : '📦'}
          </button>
          <button
            id={`btn-delete-${note.id}`}
            className="btn btn-sm btn-danger"
            onClick={handleDelete}
            title="Hapus catatan"
            aria-label="Hapus catatan"
          >
            🗑️
          </button>
        </div>
      </div>
    </article>
  );
}

export default NoteCard;
