import { useState } from 'react';
import { Link } from 'react-router-dom';
import { committees } from '../data/committees';
import './Resources.css';

// Master Resources Database
const resourcesData = [
  {
    id: "prep-guide",
    category: "fundamentals",
    title: "JHMUN Delegate Preparation Guide",
    type: "Official Handbook",
    desc: "Our comprehensive guide covering research methodologies, country profiling, policy mapping, and speech preparation.",
    url: "/resources/JHMUN_Delegate_Prep_Guide.pdf",
    downloadable: true
  },
  {
    id: "rop-guide",
    category: "fundamentals",
    title: "JHMUN Rules of Procedure (RoP) Manual",
    type: "Official Handbook",
    desc: "Complete manual of parliamentary procedure, motions, points, speakers list rules, and voting block structures.",
    url: "/resources/JHMUN_Rules_Of_Procedure_Guide.pdf",
    downloadable: true
  },
  {
    id: "drafting-guide",
    category: "writing",
    title: "JHMUN Position Paper & Resolution Drafting Manual",
    type: "Official Handbook",
    desc: "A step-by-step guide to writing position papers, formatting clauses, and building draft resolutions.",
    url: "/resources/JHMUN_Drafting_Handbook.pdf",
    downloadable: true
  },
  // Fundamentals
  {
    category: "fundamentals",
    title: "Harvard MUN Guide to Delegate Preparation",
    type: "External Guide",
    desc: "The flagship guide from Harvard University outlining the philosophy of collaborative diplomacy and debate.",
    url: "https://www.harvardmun.org/",
    downloadable: false
  },
  {
    category: "fundamentals",
    title: "National MUN (NMUN) Delegate Preparation Guide",
    type: "External Guide",
    desc: "Comprehensive handbook detailing research workflows and UN charter analysis from the largest collegiate MUN.",
    url: "https://www.nmun.org/",
    downloadable: false
  },
  {
    category: "fundamentals",
    title: "Best Delegate: MUN Made Easy Guide",
    type: "Quick Start",
    desc: "Familiarize yourself with the basic rules, motions, and timeline of a typical Model UN committee.",
    url: "https://bestdelegate.com/model-un/",
    downloadable: false
  },
  // Databases
  {
    category: "databases",
    title: "UN Official Document System (ODS)",
    type: "Research Database",
    desc: "The primary repository for official UN documents, resolutions, and meeting reports since 1946.",
    url: "https://documents.un.org/",
    downloadable: false
  },
  {
    category: "databases",
    title: "UN Digital Library",
    type: "Research Database",
    desc: "Comprehensive database containing UN documents, speeches, voting records, and open-access publications.",
    url: "https://digitallibrary.un.org/",
    downloadable: false
  },
  {
    category: "databases",
    title: "CIA World Factbook",
    type: "Country Profile",
    desc: "Detailed demographic, economic, military, and political information on every country in the world.",
    url: "https://www.cia.gov/the-world-factbook/",
    downloadable: false
  },
  {
    category: "databases",
    title: "Council on Foreign Relations (CFR)",
    type: "Policy Think Tank",
    desc: "In-depth background briefs and analyses on international relations and global security developments.",
    url: "https://www.cfr.org/",
    downloadable: false
  },
  {
    category: "databases",
    title: "UN Member States Missions Directory",
    type: "Foreign Policy",
    desc: "Access the official websites and press statements of national delegations to the United Nations.",
    url: "https://research.un.org/en/unmembers/currentmembers",
    downloadable: false
  },
  // India/State
  {
    category: "legislative",
    title: "Parliament of India (Lok Sabha) Debates & Archives",
    type: "Indian Law",
    desc: "Search official transcripts and records of parliamentary sessions and debates in the House of the People.",
    url: "https://loksabha.nic.in/Home/Debates",
    downloadable: false
  },
  {
    category: "legislative",
    title: "PRS Legislative Research",
    type: "Indian Policy",
    desc: "Independent research database providing comprehensive briefs on Indian bills, budgets, and judicial backlogs.",
    url: "https://prsindia.org/",
    downloadable: false
  },
  {
    category: "legislative",
    title: "Santhal Pargana Tenancy (SPT) Act, 1949 (Revenue Department)",
    type: "State Law",
    desc: "Official text of the landmark tenancy act designed to protect tribal land rights in the Santhal Pargana region.",
    url: "https://jharkhand.gov.in/revenue-land-reforms",
    downloadable: false
  },
  {
    category: "legislative",
    title: "Law Commission of India Reports",
    type: "Indian Policy",
    desc: "Reports detailing judicial reforms, village courts (Gram Nyayalayas), and litigation backlog statistics.",
    url: "https://lawcommissionofindia.nic.in/",
    downloadable: false
  },
  {
    category: "legislative",
    title: "National Legal Services Authority (NALSA)",
    type: "Indian Law",
    desc: "Information on institutionalizing pre-litigation mediation and rural legal aid services in India.",
    url: "https://nalsa.gov.in/",
    downloadable: false
  },
  // Writing
  {
    category: "writing",
    title: "NMUN Position Paper Guidelines & Sample Papers",
    type: "Sample Template",
    desc: "Review highly-awarded position papers to learn how to frame national policies and proposed solutions.",
    url: "https://www.nmun.org/",
    downloadable: false
  },
  {
    category: "writing",
    title: "Best Delegate Guide: How to Write a Position Paper",
    type: "Writing Tutorial",
    desc: "Learn how to research and structure your policy into a standard one-page position paper.",
    url: "https://bestdelegate.com/position-papers/",
    downloadable: false
  },
  {
    category: "writing",
    title: "Best Delegate Guide: Drafting Resolutions",
    type: "Drafting Tutorial",
    desc: "Detailed guidelines on structuring clauses, preambles, and working papers inside the committee room.",
    url: "https://bestdelegate.com/draft-resolutions/",
    downloadable: false
  }
];

const ropRules = [
  { motion: "Point of Personal Privilege", purpose: "Address individual discomfort (e.g. audibility, temperature)", debate: "No", vote: "None (Chair's decision)", interrupt: "Yes" },
  { motion: "Point of Order", purpose: "Point out a violation of Rules of Procedure by a delegate or the Chair", debate: "No", vote: "None (Chair's decision)", interrupt: "No" },
  { motion: "Point of Parliamentary Inquiry", purpose: "Ask the Chair a question regarding Rules of Procedure", debate: "No", vote: "None", interrupt: "No" },
  { motion: "Motion to Set the Agenda", purpose: "Choose which topic will be debated first", debate: "1-For / 1-Against", vote: "Simple Majority", interrupt: "No" },
  { motion: "Motion to Establish Speaking Time", purpose: "Set or change the time limit for general speeches", debate: "2-For / 2-Against", vote: "Simple Majority", interrupt: "No" },
  { motion: "Motion for a Moderated Caucus", purpose: "Structured debate on a specific sub-topic (specify total time, speaking time, and topic)", debate: "No", vote: "Simple Majority", interrupt: "No" },
  { motion: "Motion for an Unmoderated Caucus", purpose: "Informal debate for drafting resolutions, negotiating, and lobbying (specify total time)", debate: "No", vote: "Simple Majority", interrupt: "No" },
  { motion: "Motion to Introduce a Draft Resolution", purpose: "Formally present a sponsored working paper to the floor", debate: "No", vote: "Simple Majority", interrupt: "No" },
  { motion: "Motion to Introduce an Amendment", purpose: "Formally present an addition or deletion to a draft resolution", debate: "No", vote: "Simple Majority", interrupt: "No" },
  { motion: "Motion to Enter Voting Procedures", purpose: "Close debate and vote on all active resolutions on the floor", debate: "2-For / 2-Against", vote: "2/3 Majority", interrupt: "No" }
];

export default function Resources() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter logic
  const filteredResources = resourcesData.filter(res => {
    const matchesTab = activeTab === 'all' || res.category === activeTab;
    const matchesSearch = res.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          res.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          res.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const handbookResources = resourcesData.filter(res => res.downloadable);
  const generalLinkResources = filteredResources.filter(res => !res.downloadable);

  return (
    <main className="resources-page dot-texture">
      {/* ── HERO ──────────────────────────────────────────────── */}
      <section className="page-hero grid-bg">
        <div className="page-hero__glow" />
        <div className="container page-hero__inner">
          <span className="badge">📖 Comprehensive Prep Hub</span>
          <h1 className="section-title">Academic Resources</h1>
          <p className="section-subtitle">
            A high-level collection of guides, databases, and structural protocols compiled from the best practices of National MUN, Harvard MUN, and JHMUN guidelines.
          </p>
        </div>
      </section>

      {/* ── HANDBOOKS & GUIDEBOOKS (FEATURED) ────────────────── */}
      <section className="section pb-0">
        <div className="container">
          <p className="section-label">JHMUN Publications</p>
          <h2 className="section-title" style={{ marginBottom: '40px' }}>Official Conference Handbooks</h2>
          <div className="handbook-grid">
            {handbookResources.map(handbook => (
              <div key={handbook.id} className="handbook-card card">
                <div className="handbook-card__badge">{handbook.type}</div>
                <div className="handbook-card__icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                  </svg>
                </div>
                <h3 className="handbook-card__title">{handbook.title}</h3>
                <p className="handbook-card__desc">{handbook.desc}</p>
                <a
                  href={handbook.url}
                  className="btn btn--outline handbook-card__btn"
                  onClick={(e) => {
                    // Check if file exists, else prevent default and notify
                    e.preventDefault();
                    alert(`The file '${handbook.url.split('/').pop()}' is currently a placeholder. Please upload the file in the public/resources directory to enable downloads.`);
                  }}
                >
                  Download Handbook
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '6px' }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GENERAL RESEARCH LIBRARY (INTERACTIVE) ───────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">Research Engine</p>
          <h2 className="section-title">Reference Library</h2>
          
          {/* Controls Bar */}
          <div className="library-controls card">
            <div className="search-box">
              <span className="search-box__icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.7 }}>
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search resources by title, description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-box__input"
                aria-label="Search resources"
              />
            </div>
            
            <div className="filter-tabs">
              {[
                { id: 'all', label: 'All Resources' },
                { id: 'fundamentals', label: 'Foundations' },
                { id: 'databases', label: 'Global Databases' },
                { id: 'legislative', label: 'Indian/State Policy' },
                { id: 'writing', label: 'Writing & Drafting' }
              ].map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`filter-tab ${activeTab === tab.id ? 'filter-tab--active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Resources Grid */}
          <div className="resources-categories" style={{ marginTop: '32px' }}>
            {generalLinkResources.length > 0 ? (
              generalLinkResources.map((res, idx) => (
                <a
                  key={idx}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resource-card card"
                >
                  <div className="resource-card__header">
                    <span className="resource-card__type-badge">{res.type}</span>
                    <span className="resource-card__arrow">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                      </svg>
                    </span>
                  </div>
                  <h3 className="resource-card__title">{res.title}</h3>
                  <p className="resource-card__desc">{res.desc}</p>
                </a>
              ))
            ) : (
              <div className="resources-empty card">
                <p>No resources found matching "{searchQuery}" under the selected tab.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── RULES OF PROCEDURE CHEAT-SHEET ───────────────────── */}
      <section className="section bg-surface-2 dot-texture--green">
        <div className="container">
          <p className="section-label">Rules of Procedure (RoP)</p>
          <h2 className="section-title">Motions &amp; Points Reference Sheet</h2>
          <p className="section-subtitle" style={{ marginBottom: '40px' }}>
            Standard rules followed in JHMUN Bokaro Chapter. Keep this reference table open during debate to quickly raise points and motions.
          </p>

          <div className="table-responsive card">
            <table className="rop-table">
              <thead>
                <tr>
                  <th>Motion / Point</th>
                  <th>Core Purpose</th>
                  <th>Debate?</th>
                  <th>Vote Required</th>
                  <th>Interrupt Speaker?</th>
                </tr>
              </thead>
              <tbody>
                {ropRules.map((rule, idx) => (
                  <tr key={idx}>
                    <td className="rop-table__motion">{rule.motion}</td>
                    <td className="rop-table__purpose">{rule.purpose}</td>
                    <td className="rop-table__debate">{rule.debate}</td>
                    <td className="rop-table__vote">{rule.vote}</td>
                    <td className="rop-table__interrupt">
                      <span className={`interrupt-badge interrupt-badge--${rule.interrupt.toLowerCase()}`}>
                        {rule.interrupt}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── COMMITTEE RESEARCH LINKS ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <p className="section-label">By Committee</p>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Committee Research Links</h2>
          <div className="committee-resources-grid">
            {committees.map(c => (
              <div key={c.id} className="committee-resource-card card">
                <div className="committee-resource-card__header">
                  <div>
                    <div className="committee-resource-card__abbr">{c.abbr}</div>
                    <div className="committee-resource-card__type">{c.type}</div>
                  </div>
                </div>
                <div className="committee-resource-card__links">
                  {c.researchLinks.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="resource-link resource-link--sm">
                      <span className="resource-link__text">{link.label}</span>
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  ))}
                </div>
                <Link to={`/committees/${c.slug}`} className="btn btn--ghost committee-resource-card__btn">
                  Full Committee Guide →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ADVANCED RESEARCH WORKFLOW ───────────────────────── */}
      <section className="section--sm">
        <div className="container">
          <div className="position-paper-guide card">
            <div className="position-paper-guide__left">
              <p className="section-label">Harvard-Style Framework</p>
              <h3 className="position-paper-guide__title">
                Delegate<br />Research<br />Methodology
              </h3>
              <p className="position-paper-guide__subdesc" style={{ marginTop: '16px', color: 'var(--c-text-dim)', fontSize: '14px', lineHeight: '1.6' }}>
                Follow this structured framework derived from Harvard MUN's training curricula to systematically build a comprehensive committee policy.
              </p>
            </div>
            <div className="position-paper-guide__right">
              <div className="pp-steps">
                {[
                  { num: '01', step: 'Deconstruct the Agenda (Topic Analysis)', desc: 'Thoroughly analyze the official background guide. List the historical timeline, key terms, previous UN resolutions, and the primary sticking points that have blocked international consensus.' },
                  { num: '02', step: 'Establish the Sovereign Policy (Country Stance)', desc: 'Research your assigned country\'s official stance. Check voting history at the General Assembly, national legislation, official government gazettes, and statements of allies to map your policy boundaries.' },
                  { num: '03', step: 'Cross-Reference Legal & Statutory Frameworks', desc: 'Identify existing legal structures (e.g., Santhal Pargana Tenancy Act for JLA, or the 1989 Mercenary Convention for DISEC). Note loopholes, lack of enforcement mechanism, or outdated sections.' },
                  { num: '04', step: 'Formulate Actionable Operative Solutions', desc: 'Construct a detailed policy. Solutions must be specific, financially feasible, respect national sovereignty, and propose concrete institutional frameworks (like expanding Gram Nyayalayas for Lok Sabha).' }
                ].map(({ num, step, desc }) => (
                  <div key={num} className="pp-step">
                    <div className="pp-step__num">{num}</div>
                    <div>
                      <div className="pp-step__title">{step}</div>
                      <div className="pp-step__desc">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
