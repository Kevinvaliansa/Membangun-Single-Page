import NoteCard from './NoteCard';

function NoteList({ notes, onDelete, onToggleArchive, emptyMessage, emptyIcon }) {
  if (notes.length === 0) {
    return (
      <div className="empty-state" role="status" aria-live="polite">
        <div className="empty-state-icon" aria-hidden="true">{emptyIcon || '📭'}</div>
        <h3>{emptyMessage || 'Tidak ada catatan'}</h3>
        <p>Belum ada catatan yang tersedia di sini.</p>
      </div>
    );
  }

  return (
    <div className="notes-grid" role="list">
      {notes.map((note) => (
        <div key={note.id} role="listitem">
          <NoteCard
            note={note}
            onDelete={onDelete}
            onToggleArchive={onToggleArchive}
          />
        </div>
      ))}
    </div>
  );
}

export default NoteList;
