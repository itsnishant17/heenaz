// src/components/FormsSection.jsx
import { useState } from 'react';
import FadeIn from './FadeIn';
import BookingForm from './BookingForm';
import StudentForm from './StudentForm';
import './FormsSection.css';

const tabs = [
  { key: 'client',  label: '💄 Client Booking'         },
  { key: 'student', label: '🎓 Masterclass Enrollment'  },
];

export default function FormsSection() {
  const [active, setActive] = useState('client');

  return (
    <section id="book" className="forms-section">
      {/* ── Intro ── */}
      <FadeIn className="forms-section__intro">
        <p className="section-label">Get Started</p>
        <h2 className="section-heading">
          Book or <em>Learn</em>
        </h2>
        <p className="forms-section__desc">
          Choose below, whether you want to look stunning for your special
          day, or you're ready to learn the art yourself.
        </p>
      </FadeIn>

      {/* ── Tab switcher ── */}
      <div className="forms-section__tabs">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            className={`forms-section__tab${active === key ? ' forms-section__tab--active' : ''}`}
            onClick={() => setActive(key)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* ── Active form ── */}
      <div className="forms-section__body">
        {active === 'client' ? <BookingForm /> : <StudentForm />}
      </div>
    </section>
  );
}
