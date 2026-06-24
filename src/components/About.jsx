// src/components/About.jsx
import FadeIn from './FadeIn';
import img1 from '../assets/heena-professional.jpg';
import img2 from '../assets/work-lipstick.jpg';
import img3 from '../assets/work-lip2.jpg';
import './About.css';

const points = [
  'Advanced HD & airbrush certified',
  'Specialized in South Asian bridal aesthetics',
  'Premium international product brands only',
  'Hygiene-first, sanitized tools always',
  'National makeup competition participant',
];

export default function About() {
  return (
    <section id="about" className="about">

      {/* ── Image collage ── */}
      <FadeIn className="about__visual">
        <div className="about__img-grid">
          <img
            className="about__img-wide"
            src={img1}
            alt="Heena posing with her bridal creation"
          />
          <img src={img2} alt="Heena applying lipstick" />
          <img src={img3} alt="Heena doing bridal lip colour" />
        </div>
        <div className="about__accent-box" />
      </FadeIn>

      {/* ── Text column ── */}
      <FadeIn>
        <p className="section-label">The Artist</p>
        <h2 className="section-heading">
          Beauty Rooted in <em>Passion</em>
        </h2>

        <p className="about__body">
          Based in Fatehabad, Haryana, Heena has spent over eight years
          transforming brides and celebrating beauty across the region.
          She brings a trained eye for skin tones, colour harmony, and
          the nuances of South Asian bridal traditions into every look
          she creates.
        </p>
        <p className="about__body">
          From intimate home ceremonies to grand wedding halls, and
          from national makeup competitions to mentoring the next
          generation of artists, Heena's work speaks for itself.
        </p>

        <ul className="about__list">
          {points.map((p) => (
            <li key={p}>
              <span className="about__list-line" />
              {p}
            </li>
          ))}
        </ul>

        <a href="#book" className="btn btn-primary">
          Book a Consultation
        </a>
      </FadeIn>

    </section>
  );
}
