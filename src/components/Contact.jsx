// src/components/Contact.jsx, SVG icons from sprite
import FadeIn from './FadeIn';
import './Contact.css';

const contactItems = [
  { iconId: 'icon-whatsapp', label: 'WhatsApp',       value: '+91 98969-01992',                       href: 'https://wa.me/919896901992', filled: true },
  { iconId: 'icon-phone',    label: 'Phone / Call',    value: '+91 94161-43320',                       href: 'tel:+919416143320',          filled: false },
  { iconId: 'icon-map-pin',  label: 'Studio Address',  value: 'Jawahar Chowk, Fatehabad, Haryana 125050', href: null,                filled: false },
  { iconId: 'icon-clock',    label: 'Studio Hours',    value: 'Mon–Sat: 9:00 AM – 8:00 PM\nSunday: By appointment only', href: null,   filled: false },
];

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__grid">

        {/* ── Info column ── */}
        <FadeIn>
          <p className="section-label">Find Us</p>
          <h2 className="section-heading">
            Visit the <em>Studio</em>
          </h2>

          <ul className="contact__list">
            {contactItems.map((c) => (
              <li key={c.label} className="contact__item">
                <div className="contact__icon-box">
                  <svg
                    className={`icon icon-md${c.filled ? ' icon-filled' : ''}`}
                    style={{ stroke: c.filled ? 'none' : 'var(--gold)', fill: c.filled ? 'var(--gold)' : 'none' }}
                    aria-hidden="true"
                  >
                    <use href={`#${c.iconId}`} />
                  </svg>
                </div>
                <div>
                  <p className="contact__item-label">{c.label}</p>
                  <p className="contact__item-value" style={{ whiteSpace: 'pre-line' }}>
                    {c.href ? <a href={c.href}>{c.value}</a> : c.value}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>

        {/* ── Map & social column ── */}
        <FadeIn>
          <div className="contact__map">
            <svg className="icon icon-xl" style={{ stroke: 'var(--gold-light)', fill: 'none' }}>
              <use href="#icon-map-pin" />
            </svg>
            <p className="contact__map-text">Jawahar Chowk, Fatehabad, Haryana</p>
            <a
              href="https://maps.google.com/?q=Jawahar+Chowk+Fatehabad+Haryana"
              target="_blank"
              rel="noreferrer"
              className="contact__map-link"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="contact__social">
            <div className="contact__social-header">
              <svg className="icon icon-sm icon-gold" aria-hidden="true">
                <use href="#icon-instagram" />
              </svg>
              <p className="contact__social-label">Follow Our Work</p>
            </div>
            <p className="contact__social-text">
              See the latest bridal looks and masterclass highlights on
              Instagram and Facebook. Search{' '}
              <strong>@HeenazMakeovers</strong> to stay inspired.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
