// src/components/Testimonials.jsx
import FadeIn from './FadeIn';
import './Testimonials.css';

const testimonials = [
  {
    text: "Heena understood exactly what I wanted, timeless yet modern. My wedding day makeup was absolutely stunning and lasted all day. So many guests asked who my artist was!",
    name: 'Priya Sharma',
    occasion: 'Bridal Client, 2024',
  },
  {
    text: "I was nervous about my engagement look but she put me completely at ease. The makeup looked fresh even in the evening photos. Absolutely professional and so talented!",
    name: 'Anjali Verma',
    occasion: 'Engagement Look, 2025',
  },
  {
    text: "I took her masterclass to learn bridal techniques and it completely changed the way I work. Heena is an incredible teacher, patient, knowledgeable, and truly passionate.",
    name: 'Meena Gupta',
    occasion: 'Masterclass Student, 2025',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <FadeIn style={{ textAlign: 'center', maxWidth: '50ch', margin: '0 auto 1rem' }}>
        <p className="section-label">Client Love</p>
        <h2 className="section-heading">
          Brides Who <em>Glowed</em>
        </h2>
      </FadeIn>

      <FadeIn>
        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <div key={t.name} className="testimonials__card">
              <div className="testimonials__quote">"</div>
              <div className="testimonials__stars">★★★★★</div>
              <p className="testimonials__text">{t.text}</p>
              <p className="testimonials__name">{t.name}</p>
              <p className="testimonials__occasion">{t.occasion}</p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
