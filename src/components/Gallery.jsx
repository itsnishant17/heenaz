// src/components/Gallery.jsx
import FadeIn from './FadeIn';

// ── Artist / BTS shots ──────────────
import workLipstick   from '../assets/work-lipstick.jpg';
import workHair       from '../assets/work-hair.jpg';
import workLip2       from '../assets/work-lip2.jpg';
import workCompetition from '../assets/work-competition.jpg';
import heenaBride     from '../assets/heena-bride.jpg';
import heenaprofessional from '../assets/heena-professional.jpg';

// ── Bridal portfolio shots ──────────
import bridalFull     from '../assets/bridal-full.jpg';
import bridalRedFull  from '../assets/bridal-red-full.jpg';
import bridalPinkLeh  from '../assets/bridal-pink-lehenga.jpg';
import bridalIvory    from '../assets/bridal-ivory-sit.jpg';
import bridalPinkVeil from '../assets/bridal-pink-veil.jpg';
import bridalRedClose from '../assets/bridal-red-close.jpg';
import bridalRedSit   from '../assets/bridal-red-sit.jpg';
import bridalPurple   from '../assets/bridal-purple.jpg';
import bridalRedJhumka from '../assets/bridal-red-jhumka.jpg';
import bridalPinkVeil2 from '../assets/bridal-pink-veil2.jpg';
import bridalRedGarden from '../assets/bridal-red-garden.jpg';
import bridalRedPortrait from '../assets/bridal-red-portrait.jpg';
import bridalRedArch  from '../assets/bridal-red-arch.jpg';

import './Gallery.css';

// ── Bento layout definition ────────────────────────────
// span: [colSpan, rowSpan]  pos: top/center/bottom for object-position
const bentoItems = [
  { src: bridalPinkVeil,    alt: 'Bride with pink veil',        label: 'Bridal Glam',       span: [2, 2], pos: 'top' },
  { src: workCompetition,   alt: 'Heena at competition',        label: 'Award Look',        span: [1, 1], pos: 'top center' },
  { src: bridalRedGarden,   alt: 'Bride in red, garden setting',       label: 'Red Bridal',        span: [1, 1], pos: 'top center' },
  { src: workLipstick,      alt: 'Heena applying lip colour',   label: 'Lip Artistry',      span: [1, 2], pos: 'top' },
  { src: bridalPurple,      alt: 'Bride in purple lehenga',     label: 'Purple Bridal',     span: [1, 1], pos: 'top center' },
  { src: bridalPinkLeh,     alt: 'Bride in pink lehenga',       label: 'Pink Lehenga',      span: [1, 1], pos: 'top center' },
  { src: bridalRedFull,     alt: 'Bride in red lehenga',        label: 'Traditional Bride', span: [1, 1], pos: 'top center' },
  { src: heenaBride,        alt: 'Heena with bride',            label: 'Artist + Bride',    span: [1, 1], pos: 'top center' },
  { src: bridalPinkVeil2,   alt: 'Bride holding dupatta',       label: 'Dupatta Look',      span: [2, 1], pos: 'center' },
  { src: bridalRedClose,    alt: 'Bridal close-up portrait',    label: 'HD Close-up',       span: [1, 2], pos: 'top center' },
  { src: workHair,          alt: 'Heena styling hair',          label: 'Hairstyling',       span: [1, 1], pos: 'top center' },
  { src: bridalIvory,       alt: 'Bride in ivory gown',         label: 'Ivory Elegance',    span: [1, 1], pos: 'top center' },
  { src: bridalRedPortrait, alt: 'Bride in red portrait',       label: 'Bridal Portrait',   span: [1, 1], pos: 'top center' },
  { src: bridalRedSit,      alt: 'Bride sitting, red lehenga',         label: 'Bridal Session',    span: [1, 1], pos: 'top center' },
  { src: bridalRedJhumka,   alt: 'Bride with gold jhumka',      label: 'Gold Jewellery',    span: [1, 1], pos: 'top center' },
  { src: bridalRedArch,     alt: 'Bride at carved arch',        label: 'Traditional Look',  span: [1, 1], pos: 'top center' },
  { src: heenaprofessional, alt: 'Heena professional shoot',    label: 'The Artist',        span: [2, 1], pos: 'top center' },
  { src: bridalFull,        alt: 'Bridal full look black gold', label: 'Competition Look',  span: [1, 1], pos: 'top center' },
  { src: workLip2,          alt: 'Final lip touch-up',          label: 'Final Touches',     span: [1, 1], pos: 'top center' },
];

export default function Gallery() {
  return (
    <section id="gallery" className="gallery">
      <FadeIn>
        <p className="section-label">Portfolio</p>
        <h2 className="section-heading">
          Every Bride, A <em>Masterpiece</em>
        </h2>
      </FadeIn>

      <FadeIn>
        <div className="gallery__bento">
          {bentoItems.map((item, i) => (
            <div
              key={i}
              className="gallery__cell"
              style={{
                gridColumn: `span ${item.span[0]}`,
                gridRow:    `span ${item.span[1]}`,
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                style={{ objectPosition: item.pos }}
              />
              <div className="gallery__overlay">
                <span className="gallery__label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
