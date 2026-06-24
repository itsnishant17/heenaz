// src/components/Masterclass.jsx
import FadeIn from './FadeIn';
import teachingImg from '../assets/work-hair.jpg';
import './Masterclass.css';

const pills = [
  'Bridal Techniques',
  'HD & Airbrush',
  'Colour Theory',
  'Skin Prep',
  'Eye Artistry',
  'Certificate Awarded',
];

export default function Masterclass() {
  return (
    <section id="masterclass" className="masterclass">
      <div className="masterclass__grid">

        {/* ── Left: copy ── */}
        <FadeIn>
          <p className="masterclass__eyebrow">Learn from the Expert</p>
          <h2 className="section-heading section-heading--light">
            Join Heena's<br /><em>Makeup Masterclass</em>
          </h2>
          <p className="masterclass__sub">
            Whether you're a beginner eager to learn or a working artist
            looking to level up, our hands-on masterclasses are designed
            to transform your passion into a profession.
          </p>

          <div className="masterclass__pills">
            {pills.map((p) => (
              <span key={p} className="masterclass__pill">{p}</span>
            ))}
          </div>

          <a href="#book" className="btn btn-gold">Enroll in Masterclass</a>
        </FadeIn>

        {/* ── Right: teaching photo ── */}
        <FadeIn>
          <div className="masterclass__photo-frame">
            <img
              src={teachingImg}
              alt="Heena teaching hands-on hairstyling technique to a student"
              className="masterclass__photo"
            />
            <div className="masterclass__photo-caption">
              <p className="masterclass__photo-caption-title">Hands-on Training</p>
              <p className="masterclass__photo-caption-sub">Real techniques, real results</p>
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
