// src/components/Services.jsx
// ── Uses SVG sprite icons (defined in App.jsx SvgSprite) instead of emojis ──
import FadeIn from './FadeIn';
import './Services.css';

const services = [
  {
    iconId: 'icon-ring',
    name: 'Bridal Makeup',
    desc: 'Flawless HD bridal looks, from traditional to contemporary, built to glow through every ritual and photograph.',
    price: 'Full package, trial available',
  },
  {
    iconId: 'icon-sparkles',
    name: 'Party Glam',
    desc: 'Bold, radiant party looks for functions, receptions, sangeet nights, and festive celebrations.',
    price: 'Packages from ₹2,500',
  },
  {
    iconId: 'icon-diamond',
    name: 'Engagement Look',
    desc: 'Delicate, luminous makeup for your engagement that photographs beautifully in every light.',
    price: 'Trial session available',
  },
  {
    iconId: 'icon-camera',
    name: 'HD Makeup',
    desc: 'High-definition techniques that hold up under professional photography, video, and studio lighting.',
    price: 'Camera-ready finish',
  },
  {
    iconId: 'icon-flower',
    name: 'Saree Draping',
    desc: 'Expert draping in Rajasthani, Bengali, Gujarati styles and more, for a truly regal complete look.',
    price: 'Includes styling consultation',
  },
  {
    iconId: 'icon-scissors',
    name: 'Hairstyling',
    desc: 'Bridal buns, waves, updos, and modern styles perfectly complementing your complete look.',
    price: 'Add-on or standalone',
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <FadeIn>
        <p className="section-label">What We Offer</p>
        <h2 className="section-heading">
          Crafted for <em>Every Occasion</em>
        </h2>
      </FadeIn>

      <div className="services__grid">
        {services.map((s) => (
          <FadeIn key={s.name}>
            <div className="services__card">
              {/* SVG icon from sprite */}
              <svg className="icon icon-xl services__icon" aria-hidden="true">
                <use href={`#${s.iconId}`} />
              </svg>
              <h3 className="services__name">{s.name}</h3>
              <p className="services__desc">{s.desc}</p>
              <p className="services__price">{s.price}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
