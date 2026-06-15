import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { committees } from '../data/committees';
import './Home.css';

/* ── COUNTDOWN HOOK ─────────────────────────────────────────────── */
function useCountdown(target) {
  const [timeLeft, setTimeLeft] = useState(() => calcDiff(target));
  useEffect(() => {
    const id = setInterval(() => setTimeLeft(calcDiff(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return timeLeft;
}
function calcDiff(target) {
  const diff = Math.max(0, new Date(target) - Date.now());
  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

/* ── COMPONENT ──────────────────────────────────────────────────── */
export default function Home() {
  const countdown = useCountdown('2026-06-27T09:00:00+05:30');

  return (
    <main className="home">
      {/* ══ HERO ══════════════════════════════════════════════════ */}
      <section className="hero grid-bg">
        <div className="hero__bg-radial" />
        <div className="hero__lines" aria-hidden="true">
          <div className="hero__line" /><div className="hero__line" /><div className="hero__line" />
        </div>

        <div className="container hero__content">
          <div className="hero__top animate-fadeInUp animate-delay-1">
            <span className="badge">✦ 3rd Edition · Jharkhand's Biggest Academic Revolution</span>
          </div>

          <h1 className="hero__title animate-fadeInUp animate-delay-2">
            <span className="hero__title-jhmun text-glow">JHMUN</span>
            <span className="hero__title-colon">:</span>
            <br />
            <span className="hero__title-bokaro">BOKARO</span>
            <br />
            <span className="hero__title-chapter">CHAPTER</span>
          </h1>

          <p className="hero__venue animate-fadeInUp animate-delay-3">
            <span className="hero__venue-icon" style={{ display: 'inline-flex', alignItems: 'center', marginRight: '6px', color: 'var(--c-primary-light)' }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </span>
            Guru Gobind Singh Public School, Sector 5, Bokaro Steel City
          </p>

          <div className="hero__date-badge animate-fadeInUp animate-delay-3">
            <span className="hero__date-day">SAT &amp; SUN</span>
            <span className="hero__date-nums">27 — 28 JUNE 2026</span>
          </div>

          <div className="hero__actions animate-fadeInUp animate-delay-4">
            <a
              href="https://forms.gle/RBLedZrFsAMpRufc7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary hero__btn-register"
            >
              Register Now
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link to="/committees" className="btn btn--outline">
              Explore Committees
            </Link>
          </div>

          {/* COUNTDOWN */}
          <div className="hero__countdown animate-fadeInUp animate-delay-5">
            <div className="countdown__label">Conference begins in</div>
            <div className="countdown__grid">
              {[
                { val: countdown.days,    unit: 'Days' },
                { val: countdown.hours,   unit: 'Hours' },
                { val: countdown.minutes, unit: 'Minutes' },
                { val: countdown.seconds, unit: 'Seconds' },
              ].map(({ val, unit }) => (
                <div key={unit} className="countdown__block">
                  <span className="countdown__num">{String(val).padStart(2, '0')}</span>
                  <span className="countdown__unit">{unit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hero__scroll">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>
      </section>

      {/* ══ STATS ═════════════════════════════════════════════════ */}
      <section className="stats-bar">
        <div className="container--wide stats-bar__inner">
          {[
            { num: '3rd', label: 'Edition' },
            { num: '6',   label: 'Committees' },
            { num: '500+', label: 'Delegates' },
            { num: '55+', label: 'Schools' },
            { num: '₹60K', label: 'Prize Pool' },
          ].map(({ num, label }) => (
            <div key={label} className="stats-bar__item">
              <span className="stats-bar__num">{num}</span>
              <span className="stats-bar__label">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ══ ABOUT TEASER ══════════════════════════════════════════ */}
      <section className="section about-teaser">
        <div className="container about-teaser__grid">
          <div className="about-teaser__left">
            <p className="section-label">Not Just A Conference</p>
            <h2 className="section-title">We Are Not Creating<br />Another MUN.<br />We Are Creating<br />A Movement.</h2>
            <p className="about-teaser__body">
              We built JHMUN to set a new standard — to bring back authenticity, to create a space
              that's fair, enriching, and professionally run. To make sure every student, no matter
              where they come from, gets a chance to experience a world-class MUN right here in Jharkhand.
            </p>
            <p className="about-teaser__body" style={{marginTop: '16px'}}>
              The Bokaro Chapter is our <strong>third edition</strong>, following the success of our
              conferences in Ranchi and Bundu. Hosted at <strong>Guru Gobind Singh Public School</strong>,
              this chapter features six committees, a ₹60,000 prize pool, an exclusive concert night,
              and the unmatched scale &amp; energy that defines JHMUN.
            </p>
            <div className="about-teaser__actions">
              <Link to="/about" className="btn btn--ghost">
                Our Story →
              </Link>
            </div>
          </div>
          <div className="about-teaser__right">
            <div className="about-teaser__card">
              <div className="about-teaser__card-accent" />
              <div className="about-teaser__card-inner">
                <div className="about-teaser__journey">
                  <div className="journey-step">
                    <div className="journey-step__dot" />
                    <div>
                      <div className="journey-step__name">1st Edition</div>
                      <div className="journey-step__loc">Ranchi Chapter · 400+ Delegates</div>
                    </div>
                  </div>
                  <div className="journey-step__line" />
                  <div className="journey-step">
                    <div className="journey-step__dot" />
                    <div>
                      <div className="journey-step__name">2nd Edition</div>
                      <div className="journey-step__loc">Bundu Chapter</div>
                    </div>
                  </div>
                  <div className="journey-step__line" />
                  <div className="journey-step journey-step--active">
                    <div className="journey-step__dot journey-step__dot--active" />
                    <div>
                      <div className="journey-step__name">3rd Edition</div>
                      <div className="journey-step__loc">Bokaro Chapter ← You are here</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ WHY PARTICIPATE ═══════════════════════════════════════ */}
      <section className="section why-section grid-bg">
        <div className="container">
          <p className="section-label">Why Participate?</p>
          <h2 className="section-title">Join Jharkhand's<br />Biggest Academic<br />Revolution</h2>
          <div className="why-grid">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
                    <path d="M4 22h16"/>
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/>
                    <path d="M12 2a6 6 0 0 1 6 6v5a6 6 0 0 1-6 6 6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/>
                  </svg>
                ),
                title: 'Become a Leader, Not Just a Delegate',
                body: 'Sharpen public speaking, critical thinking & diplomacy in high-pressure committee sessions.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
                title: 'Be Part of a Movement',
                body: 'Connect with talented students from Delhi, Kolkata, Patna, Bhubaneswar and beyond — inter-school & inter-college networking.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="12" r="6"/>
                    <circle cx="12" cy="12" r="2"/>
                  </svg>
                ),
                title: 'Step Into the National Spotlight',
                body: 'Experience the thrill of a truly national-level MUN. National-level committees & agendas — UNGA, UNSC, Lok Sabha, JLA.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                title: 'Cash Prizes & Recognition',
                body: '₹60,000 prize pool. Best Delegate (₹3,000), High Commendation (₹2,000), Special Mention (₹1,500). Awards based only on merit & performance.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                ),
                title: 'Exclusive Concert Night',
                body: 'Live artists, DJ, and unforgettable celebrations. Socials designed for fun, community & bonding — academics by day, grand socials by night.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
                title: 'Growth Beyond Debate',
                body: 'Orientation sessions, expert training, and guidance for first-time delegates. Build leadership, diplomacy & critical thinking that lasts a lifetime.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="why-card card">
                <div className="why-card__icon" style={{ display: 'flex', alignItems: 'center' }}>{icon}</div>
                <h3 className="why-card__title">{title}</h3>
                <p className="why-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMMITTEES ════════════════════════════════════════════ */}
      <section className="section committees-preview">
        <div className="container">
          <div className="committees-preview__header">
            <div>
              <p className="section-label">Six Committees</p>
              <h2 className="section-title">Find Your Arena</h2>
              <p className="section-subtitle">
                International committees, Indian legislative bodies, and high-energy specials —
                six distinct arenas for debate, diplomacy, and decision-making.
              </p>
            </div>
            <Link to="/committees" className="btn btn--outline committees-preview__all-btn">
              View All →
            </Link>
          </div>

          <div className="committees-grid">
            {committees.map((c, i) => (
              <Link
                key={c.id}
                to={`/committees/${c.slug}`}
                className={`committee-card animate-fadeInUp animate-delay-${Math.min(i + 1, 6)}`}
              >
                <div className="committee-card__accent" />
                
                {c.poster && (
                  <div className="committee-card__poster-wrap">
                    <img src={c.poster} alt={`${c.abbr} Brochure Slide`} className="committee-card__poster" />
                    <div className="committee-card__poster-dots" />
                    <div className="committee-card__poster-glow" />
                  </div>
                )}
                
                <div className="committee-card__body-wrap">
                  <div className="committee-card__tag">{c.type}</div>
                  <h3 className="committee-card__abbr">{c.abbr}</h3>
                  <p className="committee-card__full">{c.fullName}</p>
                  <p className="committee-card__agenda">
                    {c.agendaItems[0].title.length > 90
                      ? c.agendaItems[0].title.slice(0, 90) + '…'
                      : c.agendaItems[0].title}
                  </p>
                  <div className="committee-card__cta">
                    Learn More →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REGISTRATION PROCESS ═══════════════════════════════════ */}
      <section className="section reg-process grid-bg">
        <div className="container">
          <p className="section-label">How It Works</p>
          <h2 className="section-title">Registration Process</h2>
          <div className="reg-steps">
            {[
              { num: '01', title: 'Fill the Form', body: 'Submit the official registration form at the link below. Provide accurate contact details.' },
              { num: '02', title: 'WhatsApp Contact', body: 'Our Department of Delegate Affairs will reach out within 48 hours via WhatsApp with payment details.' },
              { num: '03', title: 'Make Payment', body: 'Complete your payment and send a screenshot showing your UPI ID & transaction ID clearly.' },
              { num: '04', title: 'Confirmation', body: 'Payment verified = registration confirmed. Committee allotment sent via email within 72 hours.' },
            ].map(({ num, title, body }) => (
              <div key={num} className="reg-step card">
                <div className="reg-step__num">{num}</div>
                <h3 className="reg-step__title">{title}</h3>
                <p className="reg-step__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REGISTER CTA BANNER ═══════════════════════════════════ */}
      <section className="register-banner">
        <div className="register-banner__glow" />
        <div className="container register-banner__inner">
          <div className="register-banner__deco">✦</div>
          <div className="register-banner__content">
            <p className="section-label">Registrations Open</p>
            <h2 className="register-banner__title">
              Become a Leader,<br />Not Just a Delegate.
            </h2>
            <p className="register-banner__sub">
              Join Jharkhand's biggest academic revolution.
              Spots are limited — apply now.
            </p>
          </div>
          <div className="register-banner__action">
            <a
              href="https://forms.gle/RBLedZrFsAMpRufc7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary register-banner__btn"
            >
              Apply Now
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <div className="register-banner__meta">
              <span>✦ 27–28 June 2026</span>
              <span>✦ Bokaro Steel City</span>
              <span>✦ ₹60,000 Prize Pool</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
