import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div className="container">
      <div className="not-found animate-in">
        <div className="not-found-code" aria-hidden="true">404</div>
        <h2>Halaman Tidak Ditemukan</h2>
        <p>
          Oops! Halaman yang kamu cari tidak ada atau telah dipindahkan.
          Pastikan URL yang kamu masukkan sudah benar.
        </p>
        <div style={{ display: 'flex', gap: '12px', marginTop: '12px', flexWrap: 'wrap', justifyContent: 'center' }}>
          <Link id="btn-404-home" to="/" className="btn btn-primary">
            🏠 Kembali ke Beranda
          </Link>
          <Link id="btn-404-archive" to="/archive" className="btn btn-ghost">
            📦 Lihat Arsip
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
