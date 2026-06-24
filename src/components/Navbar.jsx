// src/components/Navbar.jsx
// ── Changes from previous version ─────────────────────
//  • Logo image (logo-banner.jpg) in navbar, cropped to just the Hm mark
//  • Full brand name "HEENA'Z MAKEOVERS" in two-line layout
//  • SVG icons on nav links (no emojis)
//  • Montserrat font via CSS var(--font-sans)
// ────────────────────────────────────────────────────────
import logoBanner from '../assets/logo-banner.jpg';
import './Navbar.css';

const links = [
  { label: 'Portfolio',   href: '#gallery'     },
  { label: 'Services',    href: '#services'    },
  { label: 'Masterclass', href: '#masterclass' },
  { label: 'About',       href: '#about'       },
  { label: 'Book',        href: '#book'        },
];

export default function Navbar() {
  return (
    <nav className="navbar">

      {/* ── Brand / Logo ── */}
      <a href="#home" className="navbar__brand">
        <div className="navbar__logo-wrap">
          <img
            src={logoBanner}
            alt="Heena'z Makeovers logo"
            className="navbar__logo-img"
          />
        </div>
        <div className="navbar__brand-text">
          <span className="navbar__brand-name">HEENA'Z MAKEOVERS</span>
          <span className="navbar__brand-sub">Heena Beauty Parlour</span>
        </div>
      </a>

      {/* ── Nav links ── */}
      <ul className="navbar__links">
        {links.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>

      {/* ── Mobile CTA ── */}
      <a href="#book" className="navbar__cta">
        <svg className="icon icon-sm icon-white" viewBox="0 0 24 24">
          <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
        </svg>
        Book
      </a>
    </nav>
  );
}
