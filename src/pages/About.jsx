import { Link } from 'react-router-dom';
import './About.css';

export default function About() {
  return (
    <main className="about-page">
      {/* PAGE HERO */}
      <section className="page-hero grid-bg">
        <div className="page-hero__glow" />
        <div className="container page-hero__inner">
          <p className="section-label">The Story Behind the Movement</p>
          <h1 className="section-title" style={{ maxWidth: '800px' }}>
            Not Just a Conference.<br />A Correction of History.
          </h1>
          <p className="section-subtitle">
            We started JHMUN because we saw something was missing, and we knew it mattered.
            Jharkhand's students deserve the same quality of intellectual discourse and
            diplomatic simulation as any premier institution in India. JHMUN was built to bridge that gap.
          </p>
        </div>
      </section>

      {/* WHAT IS JHMUN */}
      <section className="section">
        <div className="container about-2col">
          <div className="about-2col__left">
            <p className="section-label">What We Are</p>
            <h2 className="about-2col__title">Jharkhand's Most<br/>Extravagant<br/>MUN Conference</h2>
          </div>
          <div className="about-2col__right">
            <p>
              JHMUN (Jharkhand Model United Nations) is a student-led Model United Nations
              conference built with one singular vision: to give students from Jharkhand
              a world-class platform to engage with global and national policy issues, develop
              critical thinking, and build lasting leadership skills.
            </p>
            <p>
              We built JHMUN not just to host another conference, but to set a new standard.
              To bring back authenticity. To create a space that's fair, enriching, and professionally run.
              To make sure every student, no matter where they come from, gets a chance to
              experience a world-class MUN right here in Jharkhand.
            </p>
            <p>
              <strong>JHMUN isn't just an event. It's a movement.</strong>
            </p>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* 4-QUADRANT CORE PILLARS FROM BROCHURE PAGE 3 */}
      <section className="section core-pillars texture-hatch">
        <div className="container">
          <p className="section-label">Core Pillars</p>
          <h2 className="section-title">The Foundation of<br/>Our Movement</h2>
          <div className="pillars-grid border-grid">
            <div className="pillar-cell pillar-cell--black">
              <span className="pillar-cell__num">01</span>
              <h3 className="pillar-cell__title">Jharkhand's Largest Academic Meet</h3>
              <p className="pillar-cell__body">
                A Revolution in Academics; Inspiring leadership, diplomacy, and critical thought in Jharkhand and beyond.
              </p>
            </div>
            <div className="pillar-cell pillar-cell--green">
              <span className="pillar-cell__num">02</span>
              <h3 className="pillar-cell__title">Delivering Quality, Recognition & Growth</h3>
              <p className="pillar-cell__body">
                National-level standards in every committee agenda and session. Pure merit, unbiased acknowledgement of the best.
              </p>
            </div>
            <div className="pillar-cell pillar-cell--green">
              <span className="pillar-cell__num">03</span>
              <h3 className="pillar-cell__title">A Revolution in the MUN Sphere</h3>
              <p className="pillar-cell__body">
                Student-Led, Passion-Driven; built by students, for students. A movement, not a business.
              </p>
            </div>
            <div className="pillar-cell pillar-cell--black">
              <span className="pillar-cell__num">04</span>
              <h3 className="pillar-cell__title">Excellence in Debate, Extravagance in Experience</h3>
              <p className="pillar-cell__body">
                Serious debate meets unforgettable socials & concerts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WHAT MAKES US SPECIAL */}
      <section className="section">
        <div className="container">
          <p className="section-label">What Makes JHMUN Special?</p>
          <h2 className="section-title">Unmatched Scale<br/>&amp; Energy</h2>
          <div className="about-features-grid">
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
                title: "Jharkhand's Most Extravagant Conference",
                body: 'Unmatched scale and energy. A conference that sets the standard for every MUN in the region.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
                  </svg>
                ),
                title: 'Academics + Entertainment',
                body: 'Rigorous debates by day, grand socials and concert night by night. A truly complete conference experience.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="2" y1="12" x2="22" y2="12"/>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                  </svg>
                ),
                title: 'National-Level Committees & Agendas',
                body: 'UNGA, UNSC, Lok Sabha, JLA, IPC, and IPL Mega Auction — six committees with substantive, high-calibre agendas.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <path d="M9 18V5l12-2v13"/>
                    <circle cx="6" cy="18" r="3"/>
                    <circle cx="18" cy="16" r="3"/>
                  </svg>
                ),
                title: 'Exclusive Socials & Concert Night',
                body: 'Live artists, DJ, and unforgettable celebrations. A space to network, unwind & celebrate.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <line x1="12" y1="1" x2="12" y2="23"/>
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                ),
                title: 'Cash Prizes & Awards',
                body: '₹60,000 prize pool. Best Delegate (₹3,000), High Commendation (₹2,000), Special Mention (₹1,500).',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="7" x2="19" y2="7"/><path d="M19 7c0 4.67-3.13 8-7 8s-7-3.33-7-8"/><path d="M12 5c0-1.66-1.34-3-3-3s-3 1.34-3 3"/>
                  </svg>
                ),
                title: 'Fair & Transparent Recognition',
                body: 'Awards based only on merit & performance. Every acknowledgement reflects diplomacy and skill — nothing else.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                  </svg>
                ),
                title: 'Best School Delegation Trophy',
                body: 'Recognition for the top-performing school — a symbol of institutional excellence and team effort.',
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ),
                title: 'Growth Beyond Debate',
                body: 'Building leadership, diplomacy & critical thinking. Orientation sessions and expert training for newcomers.',
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="about-feature-card card">
                <div className="about-feature-card__icon" style={{ display: 'flex', alignItems: 'center' }}>{icon}</div>
                <h3 className="about-feature-card__title">{title}</h3>
                <p className="about-feature-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* OUR JOURNEY */}
      <section className="section">
        <div className="container">
          <p className="section-label">Our Journey</p>
          <h2 className="section-title">Three Chapters,<br/>One Mission</h2>
          <div className="journey-timeline">
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__num">01</div>
                <div className="timeline-item__line" />
              </div>
              <div className="timeline-item__content card">
                <div className="timeline-item__tag">1st Edition</div>
                <h3 className="timeline-item__title">Ranchi Chapter</h3>
                <p className="timeline-item__desc">
                  JHMUN began in Ranchi, the capital of Jharkhand. The first edition
                  laid the groundwork for what would become Jharkhand's most ambitious
                  student-led conference, introducing a new standard of MUN to a generation
                  of delegates from across the state. 400+ delegates. 55+ schools.
                  Participants from Delhi, Kolkata, Patna, Bhubaneswar and beyond.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-item__marker">
                <div className="timeline-item__num">02</div>
                <div className="timeline-item__line" />
              </div>
              <div className="timeline-item__content card">
                <div className="timeline-item__tag">2nd Edition</div>
                <h3 className="timeline-item__title">Bundu Chapter</h3>
                <p className="timeline-item__desc">
                  Building on the momentum of Ranchi, the Bundu Chapter expanded our
                  reach, deepened the quality of debate, and proved that JHMUN was not
                  a one-time event — it was a growing movement. Delegates brought sharper
                  research, more nuanced positions, and greater diplomatic sophistication.
                </p>
              </div>
            </div>
            <div className="timeline-item timeline-item--active">
              <div className="timeline-item__marker">
                <div className="timeline-item__num timeline-item__num--active">03</div>
              </div>
              <div className="timeline-item__content card" style={{ borderColor: 'rgba(2,89,45,0.4)' }}>
                <div className="timeline-item__tag" style={{ color: '#4ade80' }}>3rd Edition — Current</div>
                <h3 className="timeline-item__title">Bokaro Chapter</h3>
                <p className="timeline-item__desc">
                  The Bokaro Chapter is our most extravagant edition yet. Hosted at Guru Gobind
                  Singh Public School, Sector 5, Bokaro Steel City — a city of steel, industry,
                  and intellectual ambition. Six committees, a ₹60,000 prize pool, an exclusive
                  concert night, and hundreds of delegates coming together to debate, deliberate, and decide.
                </p>
                <div style={{ marginTop: '16px' }}>
                  <span className="badge">27–28 June 2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* VENUE */}
      <section className="section">
        <div className="container venue-section">
          <div className="venue-section__text">
            <p className="section-label">Venue</p>
            <h2 className="section-title">The Host School</h2>
            <p className="section-subtitle" style={{ maxWidth: '100%' }}>
              Guru Gobind Singh Public School, Sector 5, Bokaro Steel City — a prestigious institution
              at the heart of Bokaro, known for academic excellence, world-class infrastructure,
              and a dynamic student community. The launchpad of JHMUN Bokaro Chapter.
            </p>
            <div className="venue-card card">
              <div className="venue-card__icon" style={{ display: 'flex', alignItems: 'center', color: 'var(--c-primary-light)' }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
                </svg>
              </div>
              <div>
                <div className="venue-card__name">Guru Gobind Singh Public School</div>
                <div className="venue-card__addr">Sector 5, Bokaro Steel City, Jharkhand</div>
              </div>
            </div>
            <div className="venue-dates">
              <div className="venue-date-item">
                <span className="venue-date-item__day">Day 1 — Saturday</span>
                <span className="venue-date-item__date">27th June 2026</span>
              </div>
              <div className="venue-date-item">
                <span className="venue-date-item__day">Day 2 — Sunday</span>
                <span className="venue-date-item__date">28th June 2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORT FOR DELEGATES */}
      <section className="section grid-bg">
        <div className="container">
          <p className="section-label">Support For Delegates</p>
          <h2 className="section-title">We've Got<br/>Your Back</h2>
          <div className="support-grid">
            {[
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                  </svg>
                ),
                title: 'Orientation Sessions',
                body: 'Pre-conference orientation to get every delegate ready for their committee.'
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Expert Training for Newcomers',
                body: 'Dedicated training sessions for first-time delegates — no experience required.'
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
                  </svg>
                ),
                title: 'First-Timer Guidance',
                body: 'Step-by-step guidance from our organizing committee throughout the conference.'
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                ),
                title: 'Teacher Escorts',
                body: 'Faculty support on-ground to ensure a safe and enriching experience for all delegates.'
              },
              {
                icon: (
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4ade80' }}>
                    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                  </svg>
                ),
                title: 'Professional Organizing Committee',
                body: 'A dedicated team managing everything — from logistics to committee management.'
              },
            ].map(({ icon, title, body }) => (
              <div key={title} className="support-card card">
                <div className="support-card__icon" style={{ display: 'flex', alignItems: 'center' }}>{icon}</div>
                <h3 className="support-card__title">{title}</h3>
                <p className="support-card__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section">
        <div className="container about-contact">
          <p className="section-label">Get In Touch</p>
          <h2 className="section-title">Contact the<br/>Secretariat</h2>
          <div className="contact-grid">
            <div className="contact-card card">
              <div className="contact-card__label">Samriddhi Singh</div>
              <div style={{ fontSize: '12px', color: 'var(--c-muted)', marginBottom: '8px' }}>Chargé d'Affaires</div>
              <a href="tel:+919771348466" className="contact-card__value" style={{ fontSize: '16px', fontWeight: 'bold' }}>+91 97713 48466</a>
              <a href="mailto:drajhmun@gmail.com" className="contact-card__value" style={{ marginTop: '4px', fontSize: '13px' }}>drajhmun@gmail.com</a>
            </div>
            <div className="contact-card card">
              <div className="contact-card__label">Deveshi Prasad</div>
              <div style={{ fontSize: '12px', color: 'var(--c-muted)', marginBottom: '8px' }}>Secretary-General</div>
              <a href="tel:+918102687335" className="contact-card__value" style={{ fontSize: '16px', fontWeight: 'bold' }}>+91 81026 87335</a>
              <a href="mailto:jharkhandmun@gmail.com" className="contact-card__value" style={{ marginTop: '4px', fontSize: '13px' }}>jharkhandmun@gmail.com</a>
            </div>
            <div className="contact-card card">
              <div className="contact-card__label">Digital Presence</div>
              <div style={{ fontSize: '12px', color: 'var(--c-muted)', marginBottom: '8px' }}>Socials & Form</div>
              <a href="https://instagram.com/jharkhand.mun" target="_blank" rel="noopener noreferrer" className="contact-card__value" style={{ fontSize: '14px' }}>Instagram: @jharkhand.mun</a>
              <a href="https://forms.gle/RBLedZrFsAMpRufc7" target="_blank" rel="noopener noreferrer" className="contact-card__value" style={{ marginTop: '4px', fontSize: '14px' }}>Register: Apply Now ↗</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section--sm">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title" style={{ marginBottom: '12px' }}>Join the Movement</h2>
          <p className="section-subtitle" style={{ margin: '0 auto 32px', textAlign: 'center' }}>
            "We hope to see you join us on our journey to a revolution and a movement."
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="https://forms.gle/RBLedZrFsAMpRufc7"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Register Now →
            </a>
            <Link to="/committees" className="btn btn--outline">
              Explore Committees
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
