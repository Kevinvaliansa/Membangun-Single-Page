import { NavLink, Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-inner">
        <Link to="/" className="navbar-brand" id="navbar-brand">
          <div className="navbar-brand-icon" aria-hidden="true">📓</div>
          <span>NoteSpace</span>
        </Link>

        <div className="navbar-nav">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            id="nav-home"
          >
            📋 Catatan
          </NavLink>
          <NavLink
            to="/archive"
            className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}
            id="nav-archive"
          >
            📦 Arsip
          </NavLink>
          <Link to="/notes/new" className="btn btn-primary btn-sm" id="nav-add-note" style={{ marginLeft: '8px' }}>
            + Tambah
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
