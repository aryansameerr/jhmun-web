import './Schedule.css';

const scheduleData = [
  {
    day: 'Day 1',
    date: 'Saturday, 27th June 2026',
    sessions: [
      { time: 'TBA', event: 'Registration & Accreditation', type: 'logistics', note: 'Delegate check-in and badge collection' },
      { time: 'TBA', event: 'Opening Ceremony', type: 'ceremony', note: 'Inaugural address, flag hoisting, and committee introductions' },
      { time: 'TBA', event: 'Committee Session I', type: 'session', note: 'All six committees begin deliberations. Roll call, speaker\'s list, opening speeches.' },
      { time: 'TBA', event: 'Lunch Break', type: 'break', note: '' },
      { time: 'TBA', event: 'Committee Session II', type: 'session', note: 'Moderated and unmoderated caucuses. Working papers begin.' },
      { time: 'TBA', event: 'Committee Session III', type: 'session', note: 'Continued deliberations. Draft resolutions submitted.' },
      { time: 'TBA', event: 'Networking & Social Hour', type: 'social', note: 'Inter-committee networking for delegates' },
      { time: 'Evening', event: 'Exclusive Concert Night', type: 'social', note: 'Live artists, DJ night, and grand socials — celebrate the first day of JHMUN Bokaro Chapter.' },
    ],
  },
  {
    day: 'Day 2',
    date: 'Sunday, 28th June 2026',
    sessions: [
      { time: 'TBA', event: 'Committee Session IV', type: 'session', note: 'Review and refinement of working papers and draft resolutions.' },
      { time: 'TBA', event: 'Committee Session V', type: 'session', note: 'Voting procedures on draft resolutions.' },
      { time: 'TBA', event: 'Lunch Break', type: 'break', note: '' },
      { time: 'TBA', event: 'IPC Press Briefing', type: 'ceremony', note: 'International Press Corps presents their coverage of the conference.' },
      { time: 'TBA', event: 'Awards Deliberation', type: 'logistics', note: 'Chairs finalize award recommendations.' },
      { time: 'TBA', event: 'Closing Ceremony & Awards Night', type: 'ceremony', note: 'Best Delegate, High Commendation, Special Mention, and Verbal Mention awards across all committees.' },
    ],
  },
];

const typeColors = {
  session:   { bg: 'rgba(2, 89, 45, 0.12)',  border: 'rgba(2, 89, 45, 0.35)', dot: '#02592d'  },
  ceremony:  { bg: 'rgba(74,222,128, 0.08)', border: 'rgba(74,222,128, 0.25)', dot: '#4ade80' },
  break:     { bg: 'rgba(115,115,115, 0.08)', border: 'rgba(115,115,115, 0.2)', dot: '#737373' },
  logistics: { bg: 'rgba(31,79,36, 0.12)',   border: 'rgba(31,79,36, 0.35)',  dot: '#1f4f24' },
  social:    { bg: 'rgba(26,89,43, 0.1)',    border: 'rgba(26,89,43, 0.3)',   dot: '#1a592b' },
};

export default function Schedule() {
  return (
    <main className="schedule-page">
      {/* PAGE HERO */}
      <section className="page-hero grid-bg">
        <div className="page-hero__glow" />
        <div className="container page-hero__inner">
          <p className="section-label">Conference Programme</p>
          <h1 className="section-title">Conference<br/>Programme</h1>
          <p className="section-subtitle">
            Two days of debate, diplomacy, deliberation — and an exclusive concert night.
            Rigorous academics by day, grand socials by night.
            Detailed timings will be released closer to the conference date.
          </p>
          <div className="schedule-hero-notice">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="8" stroke="#4ade80" strokeWidth="1.2"/>
              <path d="M9 8v5M9 5.5v.5" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <span>
              This is a draft schedule. Confirmed timings will be published here and shared via email.
            </span>
          </div>
        </div>
      </section>

      {/* SCHEDULE DAYS */}
      <section className="section">
        <div className="container">
          {scheduleData.map((day, di) => (
            <div key={di} className="schedule-day">
              <div className="schedule-day__header">
                <div className="schedule-day__tag">{day.day}</div>
                <h2 className="schedule-day__date">{day.date}</h2>
              </div>
              <div className="schedule-timeline">
                {day.sessions.map((s, si) => {
                  const style = typeColors[s.type] || typeColors.session;
                  return (
                    <div key={si} className="schedule-item" style={{ '--item-bg': style.bg, '--item-border': style.border }}>
                      <div className="schedule-item__time">
                        <span>{s.time}</span>
                        <div className="schedule-item__dot" style={{ background: style.dot }} />
                        {si < day.sessions.length - 1 && <div className="schedule-item__line" />}
                      </div>
                      <div className="schedule-item__content">
                        <div className="schedule-item__event">{s.event}</div>
                        {s.note && <div className="schedule-item__note">{s.note}</div>}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LEGEND */}
      <section className="section--sm">
        <div className="container">
          <h3 className="schedule-legend-title">Session Types</h3>
          <div className="schedule-legend">
            {[
              { type: 'session',   label: 'Committee Session' },
              { type: 'ceremony',  label: 'Ceremony / Keynote' },
              { type: 'break',     label: 'Break' },
              { type: 'logistics', label: 'Logistics / Admin' },
              { type: 'social',    label: 'Social / Networking' },
            ].map(({ type, label }) => (
              <div key={type} className="schedule-legend-item">
                <div className="schedule-legend-dot" style={{ background: typeColors[type].dot }} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
