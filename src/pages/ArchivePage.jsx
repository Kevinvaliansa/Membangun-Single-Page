import { useSearchParams } from 'react-router-dom';
import NoteList from '../components/NoteList';
import SearchBar from '../components/SearchBar';

function ArchivePage({ notes, onDelete, onToggleArchive }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get('keyword') || '';

  const handleSearch = (value) => {
    if (value) {
      setSearchParams({ keyword: value });
    } else {
      setSearchParams({});
    }
  };

  const filteredNotes = keyword
    ? notes.filter((n) =>
        n.title.toLowerCase().includes(keyword.toLowerCase())
      )
    : notes;

  return (
    <div className="container">
      <div className="page-header">
        <h1>Catatan Terarsip</h1>
        <p>Catatan yang telah kamu arsipkan tersimpan di sini.</p>
      </div>

      <SearchBar value={keyword} onChange={handleSearch} />

      {keyword && (
        <p
          style={{
            marginBottom: '16px',
            fontSize: '0.875rem',
            color: 'var(--text-muted)',
          }}
        >
          Menampilkan{' '}
          <strong style={{ color: 'var(--accent-secondary)' }}>
            {filteredNotes.length}
          </strong>{' '}
          hasil untuk &ldquo;{keyword}&rdquo;
        </p>
      )}

      <NoteList
        notes={filteredNotes}
        onDelete={onDelete}
        onToggleArchive={onToggleArchive}
        emptyMessage={
          keyword
            ? `Arsip dengan judul "${keyword}" tidak ditemukan.`
            : 'Arsip kosong'
        }
        emptyIcon={keyword ? '🔎' : '🗄️'}
      />
    </div>
  );
}

export default ArchivePage;
