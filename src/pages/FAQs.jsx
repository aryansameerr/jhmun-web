import { useState } from 'react';
import { faqs } from '../data/faqs';
import './FAQs.css';

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className={`faq-item${isOpen ? ' faq-item--open' : ''}`} onClick={onToggle}>
      <div className="faq-item__header">
        <h3 className="faq-item__question">{faq.question}</h3>
        <div className="faq-item__icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d={isOpen ? 'M5 13l5-5 5 5' : 'M5 7l5 5 5-5'} stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="faq-item__answer">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(prev => prev === i ? null : i);

  return (
    <main className="faqs-page">
      {/* PAGE HERO */}
      <section className="page-hero grid-bg">
        <div className="page-hero__glow" />
        <div className="container page-hero__inner">
          <p className="section-label">Help & Information</p>
          <h1 className="section-title">Frequently Asked<br />Questions</h1>
          <p className="section-subtitle">
            Everything you need to know about JHMUN Bokaro Chapter — from what MUN is,
            to how to register, and what to expect on the day.
          </p>
        </div>
      </section>

      {/* FAQ LIST */}
      <section className="section">
        <div className="container faqs-layout">
          <div className="faqs-sidebar">
            <div className="faqs-sidebar__card">
              <div className="faqs-sidebar__icon" style={{ display: 'flex', alignItems: 'center', color: 'var(--c-primary-light)' }}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3 className="faqs-sidebar__title">Still have questions?</h3>
              <p className="faqs-sidebar__body">
                Can't find what you're looking for? Reach out to the JHMUN Secretariat
                via our social media channels or through the registration form.
              </p>
              <a
                href="https://forms.gle/RBLedZrFsAMpRufc7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost faqs-sidebar__btn"
              >
                Contact via Form →
              </a>
            </div>
            <div className="faqs-sidebar__notice">
              <span className="badge">✦ {faqs.length} FAQs</span>
              <p>More FAQs will be added as we get closer to the conference date.</p>
            </div>
          </div>

          <div className="faqs-list">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
