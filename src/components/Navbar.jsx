import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { committees } from '../data/committees';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled]       = useState(false);
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          {/* LOGO */}
          <Link to="/" className="navbar__logo">
            <img src="/jhmun-logo-green.png" alt="JHMUN Logo" />
            <span className="navbar__logo-text">
              <span className="navbar__logo-name">JHMUN</span>
              <span className="navbar__logo-sub">Bokaro Chapter</span>
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <ul className="navbar__links">
            <li><NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Home</NavLink></li>
            <li><NavLink to="/about" className={({isActive}) => isActive ? 'active' : ''}>About</NavLink></li>

            {/* COMMITTEES DROPDOWN */}
            <li ref={dropdownRef} className="navbar__dropdown-wrap">
              <button
                className={`navbar__dropdown-trigger${dropdownOpen ? ' open' : ''}`}
                onClick={() => setDropdownOpen(o => !o)}
                aria-expanded={dropdownOpen}
              >
                Committees
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              {dropdownOpen && (
                <div className="navbar__dropdown">
                  <Link to="/committees" className="navbar__dropdown-all">
                    All Committees →
                  </Link>
                  <div className="navbar__dropdown-divider" />
                  {committees.map(c => (
                    <Link key={c.id} to={`/committees/${c.slug}`} className="navbar__dropdown-item">
                      <span>
                        <span className="navbar__dropdown-abbr">{c.abbr}</span>
                        <span className="navbar__dropdown-type">{c.type}</span>
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li><NavLink to="/schedule" className={({isActive}) => isActive ? 'active' : ''}>Schedule</NavLink></li>
            <li><NavLink to="/resources" className={({isActive}) => isActive ? 'active' : ''}>Resources</NavLink></li>
            <li><NavLink to="/faqs" className={({isActive}) => isActive ? 'active' : ''}>FAQs</NavLink></li>
          </ul>

          {/* REGISTER CTA */}
          <a
            href="https://forms.gle/RBLedZrFsAMpRufc7"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta btn btn--primary"
          >
            Register Now
          </a>

          {/* HAMBURGER */}
          <button
            className={`navbar__hamburger${mobileOpen ? ' open' : ''}`}
            onClick={() => setMobileOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer${mobileOpen ? ' open' : ''}`}>
        <div className="mobile-drawer__inner">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/committees">All Committees</NavLink>
          <div className="mobile-drawer__sub">
            {committees.map(c => (
              <NavLink key={c.id} to={`/committees/${c.slug}`}>
                {c.abbr}
              </NavLink>
            ))}
          </div>
          <NavLink to="/schedule">Schedule</NavLink>
          <NavLink to="/resources">Resources</NavLink>
          <NavLink to="/faqs">FAQs</NavLink>
          <a
            href="https://forms.gle/RBLedZrFsAMpRufc7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--primary mobile-drawer__cta"
          >
            Register Now
          </a>
        </div>
      </div>
      {mobileOpen && <div className="mobile-overlay" onClick={() => setMobileOpen(false)} />}
    </>
  );
}
