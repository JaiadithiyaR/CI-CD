import { NavLink } from 'react-router-dom';
import { useAppMetadata } from '../context/AppMetadataContext';
import Badge from './Badge';

function Navbar() {
  const { application, version, loading } = useAppMetadata();

  return (
    <header className="navbar">
      <div className="brand">
        <span className="brand-mark">DF</span>
        <div>
          <p className="brand-name">{application}</p>
          <p className="brand-tagline">Internal engineering demo</p>
        </div>
      </div>
      <nav className="nav-links" aria-label="Primary navigation">
        <NavLink to="/" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')} end>
          Home
        </NavLink>
        <a href="/#products" className="nav-link">
          Products
        </a>
        <a href="/#system-status" className="nav-link">
          System Status
        </a>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}>
          About
        </NavLink>
      </nav>
      <Badge tone="soft" className="version-badge" aria-label={`Application version ${version?.version || 'loading'}`}>
        {loading ? 'v…' : `v${version?.version || '—'}`}
      </Badge>
    </header>
  );
}

export default Navbar;
