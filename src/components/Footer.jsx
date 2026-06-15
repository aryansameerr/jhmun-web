import { useState } from 'react';
import { Link } from 'react-router-dom';
import { committees } from '../data/committees';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer grid-bg">
      <div className="footer__glow" />
      
      <div className="container">
        <div className="footer__top">
          {/* BRAND COLUMN */}
          <div className="footer__brand">
            <Link to="/" className="footer__brand-header">
              <img src="/jhmun-logo-green.png" alt="JHMUN Logo" className="footer__logo" />
              <div>
                <span className="footer__name">JHMUN</span>
                <span className="footer__tagline">Bokaro Chapter · 3rd Edition</span>
              </div>
            </Link>
            
            <p className="footer__desc">
              Jharkhand Model United Nations is the state's premier youth leadership assembly, fostering diplomacy, critical inquiry, and geopolitical consensus.
            </p>

            <div className="footer__meta-info">
              <div className="footer__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__meta-icon">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                <span>27–28 June 2026</span>
              </div>
              <div className="footer__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__meta-icon">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Guru Gobind Singh Public School, Bokaro Steel City</span>
              </div>
              <div className="footer__meta-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="footer__meta-icon">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>+91 97713 48466 · +91 81026 87335</span>
              </div>
            </div>

            <div className="footer__socials">
              <a 
                href="https://instagram.com/jharkhand.mun" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer__social-link"
                aria-label="Follow us on Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a 
                href="mailto:drajhmun@gmail.com" 
                className="footer__social-link"
                aria-label="Email Department of Registration/Delegate Affairs"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </a>
              <a 
                href="mailto:jharkhandmun@gmail.com" 
                className="footer__social-link"
                aria-label="Email General Secretariat"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2L11 13"></path>
                  <path d="M22 2l-7 20-4-9-9-4 20-7z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* QUICK LINKS COLUMN */}
          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About JHMUN</Link></li>
              <li><Link to="/committees">All Committees</Link></li>
              <li><Link to="/schedule">Schedule</Link></li>
              <li><Link to="/resources">Resources & Guides</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* COMMITTEES COLUMN */}
          <div className="footer__col">
            <h4 className="footer__col-title">Committees</h4>
            <ul className="footer__links">
              {committees.map(c => (
                <li key={c.id}>
                  <Link to={`/committees/${c.slug}`} className="footer__committee-link">
                    <span className="footer__committee-name">{c.abbr}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* NEWSLETTER & CTA COLUMN */}
          <div className="footer__col">
            <h4 className="footer__col-title">Participate</h4>
            <p className="footer__col-text">
              Secure your delegate seat or register your delegation to be part of Jharkhand's most prestigious debate forum.
            </p>
            
            <a
              href="https://forms.gle/RBLedZrFsAMpRufc7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary footer__reg-btn"
            >
              Register Now
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <div className="footer__subscribe">
              <h5 className="footer__subscribe-title">Get Announcements</h5>
              {subscribed ? (
                <div className="footer__subscribe-success">
                  <span className="footer__subscribe-success-badge">✓</span> Subscribed! We will keep you updated.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="footer__subscribe-form">
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="footer__subscribe-input"
                    aria-label="Email address for news"
                  />
                  <button type="submit" className="footer__subscribe-btn" aria-label="Subscribe">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="footer__divider-container">
          <div className="footer__divider" />
          <button onClick={scrollToTop} className="footer__back-to-top" aria-label="Scroll to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15"></polyline>
            </svg>
          </button>
        </div>

        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <p>© {year} Jharkhand Model United Nations (JHMUN). All rights reserved.</p>
            <p className="footer__motto">Not just a conference — a movement.</p>
          </div>
          <div className="footer__bottom-right">
            <p className="footer__host">
              Hosted with pride at <strong className="footer__host-highlight">Guru Gobind Singh Public School</strong>, Bokaro Steel City.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
