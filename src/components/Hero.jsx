// src/components/Hero.jsx
import FadeIn from './FadeIn';
import heroMain   from '../assets/heena-professional.jpg';
import heroSub    from '../assets/bridal-pink-veil.jpg';
import './Hero.css';

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* ── Left text column ── */}
      <FadeIn className="hero__text">
        <p className="hero__eyebrow">Fatehabad, Haryana</p>
        <h1 className="hero__headline">
          Where Beauty<br />Becomes <em>Art</em>
        </h1>
        <p className="hero__sub">
          Bridal glam, HD makeovers, and bold party looks, crafted by
          Heena for women who deserve to feel extraordinary.
        </p>
        <div className="hero__cta-row">
          <a href="#book"    className="btn btn-primary">Book a Session</a>
          <a href="#gallery" className="btn btn-outline">View Portfolio</a>
        </div>
      </FadeIn>

      {/* ── Right image collage ── */}
      <FadeIn className="hero__visual">
        <img
          className="hero__img-main"
          src={heroMain}
          alt="Heena doing makeup at competition"
        />
        <img
          className="hero__img-sub"
          src={heroSub}
          alt="Stunning bridal look"
        />
        <div className="hero__badge">
          <strong>1000+</strong>
          Brides Adorned
        </div>
      </FadeIn>
    </section>
  );
}
