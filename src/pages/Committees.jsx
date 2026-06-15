import { Link } from 'react-router-dom';
import { committees } from '../data/committees';
import './Committees.css';

export default function Committees() {
  return (
    <main className="committees-page">
      <section className="page-hero grid-bg">
        <div className="page-hero__glow" />
        <div className="container page-hero__inner">
          <p className="section-label">JHMUN Bokaro Chapter</p>
          <h1 className="section-title">Six Committees.<br />Six Arenas.</h1>
          <p className="section-subtitle">
            From the halls of the United Nations to the floor of the Lok Sabha —
            each committee offers a unique debate experience. Choose your arena.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="committees-full-grid">
            {committees.map((c) => (
              <Link
                key={c.id}
                to={`/committees/${c.slug}`}
                className="committee-full-card"
              >
                <div className="committee-full-card__accent" />
                
                {c.poster && (
                  <div className="committee-full-card__poster-wrap">
                    <img src={c.poster} alt={`${c.abbr} Brochure Slide`} className="committee-full-card__poster" />
                    <div className="committee-full-card__poster-dots" />
                    <div className="committee-full-card__poster-glow" />
                  </div>
                )}
                
                <div className="committee-full-card__info-wrap">
                  <div className="committee-full-card__header">
                    <div>
                      <div className="committee-full-card__type">{c.type}</div>
                      <h2 className="committee-full-card__abbr">{c.abbr}</h2>
                    </div>
                  </div>
                  <div className="committee-full-card__fullname">{c.fullName}</div>
                  <div className="committee-full-card__subtitle">{c.subtitle}</div>
                  <div className="committee-full-card__divider" />
                  <div className="committee-full-card__agenda-label">Agenda</div>
                  <div className="committee-full-card__agenda-container">
                    {c.agendaItems.map((a, i) => (
                      <div key={i} className="committee-full-card__agenda-item">
                        {c.agendaItems.length > 1 && (
                          <span className="committee-full-card__agenda-num">{i + 1}.</span>
                        )}
                        <p>{a.title}</p>
                      </div>
                    ))}
                  </div>
                  <div className="committee-full-card__footer">
                    <span className="committee-full-card__chairs">
                      {c.chairs.length} Chair{c.chairs.length !== 1 ? 's' : ''}
                    </span>
                    <span className="committee-full-card__cta">View Details →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
