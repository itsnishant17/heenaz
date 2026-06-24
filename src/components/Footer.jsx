// src/components/Footer.jsx
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        <p className="footer__logo">Heena'z Makeovers</p>
        <p className="footer__tagline">
          Where Beauty Becomes Art, Fatehabad, Haryana
        </p>
      </div>

      <div className="footer__right">
        <p>Jawahar Chowk, Fatehabad, 125050 (HRY.)</p>
        <p>WA: 98969-01992, Call: 94161-43320</p>
        <p className="footer__copy">© 2026 Heena'z Makeovers</p>
      </div>
    </footer>
  );
}
