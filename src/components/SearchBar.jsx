function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <div className="search-box" role="search">
        <span className="search-icon" aria-hidden="true">🔍</span>
        <input
          id="search-input"
          type="search"
          className="search-input"
          placeholder="Cari catatan berdasarkan judul..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          aria-label="Cari catatan berdasarkan judul"
          autoComplete="off"
        />
        {value && (
          <button
            id="search-clear-btn"
            className="search-clear"
            onClick={() => onChange('')}
            aria-label="Hapus pencarian"
            title="Hapus pencarian"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchBar;
