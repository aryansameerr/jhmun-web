import { useParams, Link, Navigate } from 'react-router-dom';
import { getCommitteeBySlug, committees } from '../data/committees';
import './CommitteeDetail.css';

/* ── CHAIR CARD ─────────────────────────────────────────────────── */
function ChairCard({ chair }) {
  return (
    <div className="chair-card">
      <div className="chair-card__photo-wrap">
        {chair.photo ? (
          <img src={chair.photo} alt={chair.name} className="chair-card__photo" />
        ) : (
          <div className="chair-card__placeholder">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="16" r="8" stroke="currentColor" strokeWidth="1.5" />
              <path d="M4 36c0-8.837 7.163-16 16-16s16 7.163 16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
        )}
        <div className="chair-card__status">TBA</div>
      </div>
      <div className="chair-card__info">
        <div className="chair-card__role">{chair.role}</div>
        <div className="chair-card__name">{chair.name}</div>
        <p className="chair-card__bio">{chair.bio}</p>
      </div>
    </div>
  );
}

/* ── MAIN COMPONENT ─────────────────────────────────────────────── */
export default function CommitteeDetail() {
  const { slug } = useParams();
  const committee = getCommitteeBySlug(slug);

  if (!committee) return <Navigate to="/committees" replace />;

  const otherCommittees = committees.filter(c => c.slug !== slug).slice(0, 3);

  return (
    <main className="committee-detail">

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="cd-hero grid-bg">
        <div className="cd-hero__glow" />
        <div className="container cd-hero__inner">
          <Link to="/committees" className="cd-breadcrumb">
            ← All Committees
          </Link>
          <div className="cd-hero__type">{committee.type}</div>
          <h1 className="cd-hero__abbr">{committee.abbr}</h1>
          <p className="cd-hero__fullname">{committee.fullName}</p>
          <p className="cd-hero__subtitle">{committee.subtitle}</p>
        </div>
      </section>

      {/* ── BACKGROUND ────────────────────────────────────────── */}
      <section className="section">
        <div className="container cd-3col">
          <div className="cd-3col__left">
            {committee.poster && (
              <div className="cd-poster-card card animate-fadeInUp">
                <img src={committee.poster} alt={`${committee.abbr} Brochure Slide`} className="cd-poster-img" />
                <div className="cd-poster-dots" />
                <div className="cd-poster-glow" />
              </div>
            )}
          </div>
          
          <div className="cd-3col__mid">
            <p className="section-label">Committee Overview</p>
            <h2 className="cd-section-title">Background</h2>
            <p className="cd-body">{committee.bgDescription}</p>
          </div>
          
          <div className="cd-3col__right">
            <div className="cd-info-card card">
              <div className="cd-info-row">
                <span className="cd-info-label">Committee</span>
                <span className="cd-info-val">{committee.abbr}</span>
              </div>
              <div className="cd-info-row">
                <span className="cd-info-label">Type</span>
                <span className="cd-info-val">{committee.type}</span>
              </div>
              <div className="cd-info-row">
                <span className="cd-info-label">Agendas</span>
                <span className="cd-info-val">{committee.agendaItems.length}</span>
              </div>
              <div className="cd-info-row">
                <span className="cd-info-label">Chairs</span>
                <span className="cd-info-val">{committee.chairs.length}</span>
              </div>
              <div className="cd-info-row">
                <span className="cd-info-label">Conference</span>
                <span className="cd-info-val">27–28 June 2026</span>
              </div>
              <div className="cd-info-row cd-info-row--last">
                <span className="cd-info-label">Venue</span>
                <span className="cd-info-val">GGPS Bokaro</span>
              </div>
            </div>
            <a
              href="https://forms.gle/RBLedZrFsAMpRufc7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary cd-reg-btn"
            >
              Register for this Committee →
            </a>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── AGENDA ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Discussion Topics</p>
          <h2 className="cd-section-title">Agenda</h2>
          <div className="cd-agenda-list">
            {committee.agendaItems.map((item, i) => (
              <div key={i} className="cd-agenda-item">
                <div className="cd-agenda-item__num">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div className="cd-agenda-item__body">
                  <h3 className="cd-agenda-item__title">{item.title}</h3>
                  <p className="cd-agenda-item__desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── CHAIRS ────────────────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Committee Leadership</p>
          <h2 className="cd-section-title">Chairs</h2>
          <p className="cd-body" style={{ marginBottom: '40px', maxWidth: '560px' }}>
            Each committee is led by an experienced team of chairs who facilitate debate,
            maintain procedure, and guide delegates toward meaningful resolutions.
            Chair announcements are coming soon.
          </p>
          <div className="cd-chairs-grid">
            {committee.chairs.map((chair, i) => (
              <ChairCard key={i} chair={chair} />
            ))}
          </div>
          <div className="cd-chairs-notice">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M9 8v5M9 5.5v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            Chair names, photos, and bios will be announced soon. Stay tuned!
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── BACKGROUND GUIDE ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Research Material</p>
          <h2 className="cd-section-title">Background Guide</h2>
          <div className="cd-bg-guide">
            <div className="cd-bg-guide__icon" style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
                <line x1="16" y1="13" x2="8" y2="13" />
                <line x1="16" y1="17" x2="8" y2="17" />
                <polyline points="10 9 9 9 8 9" />
              </svg>
            </div>
            <div className="cd-bg-guide__content">
              <h3 className="cd-bg-guide__title">
                {committee.abbr} Background Guide
              </h3>
              <p className="cd-bg-guide__desc">
                The official Background Guide (BG) for this committee is being prepared by
                the chairs. It will include a comprehensive overview of each agenda item,
                key stakeholder positions, relevant international law, and research guidance.
                It will be made available here closer to the conference date.
              </p>
            </div>
            <div className="cd-bg-guide__badge">Coming Soon</div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── RESEARCH RESOURCES ────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Committee Research</p>
          <h2 className="cd-section-title">Research Resources</h2>
          <p className="cd-body" style={{ marginBottom: '36px', maxWidth: '600px' }}>
            The following resources are curated specifically for delegates in this
            committee. Use them to build your position paper and prepare for debate.
          </p>
          <div className="cd-resources-grid">
            {committee.researchLinks.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="cd-resource-card"
              >
                <div className="cd-resource-card__icon" style={{ display: 'flex', alignItems: 'center', color: 'var(--c-primary-light)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </div>
                <div>
                  <div className="cd-resource-card__label">{link.label}</div>
                  <div className="cd-resource-card__url">{link.url.replace(/^https?:\/\//, '').split('/')[0]}</div>
                </div>
                <svg className="cd-resource-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            ))}
          </div>
          <div style={{ marginTop: '24px' }}>
            <Link to="/resources" className="btn btn--ghost">
              View General Research Hub →
            </Link>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ── OTHER COMMITTEES ──────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Explore More</p>
          <h2 className="cd-section-title">Other Committees</h2>
          <div className="cd-other-grid">
            {otherCommittees.map(c => (
              <Link key={c.id} to={`/committees/${c.slug}`} className="cd-other-card card">
                <span className="cd-other-card__abbr">{c.abbr}</span>
                <span className="cd-other-card__type">{c.type}</span>
                <span className="cd-other-card__cta">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
