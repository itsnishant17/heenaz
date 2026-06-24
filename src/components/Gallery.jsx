import FadeIn from './FadeIn';

// New HB-branded bridal portraits
import portrait1 from '../assets/bridal-hb-portrait1.jpg'; // red bride, kalire
import portrait2 from '../assets/bridal-hb-portrait2.jpg'; // pink bride on sofa
import portrait3 from '../assets/bridal-hb-portrait3.jpg'; // maroon velvet bride
import portrait4 from '../assets/bridal-hb-portrait4.jpg'; // green saree

// Existing bridal portfolio
import bridalPinkVeil  from '../assets/bridal-pink-veil.jpg';
import bridalRedClose  from '../assets/bridal-red-close.jpg';
import bridalPurple    from '../assets/bridal-purple.jpg';
import bridalRedGarden from '../assets/bride_mobile_cover.jpg';
import bridalPinkLeh   from '../assets/bridal-pink-lehenga.jpg';
import bridalRedFull   from '../assets/bridal-red-full.jpg';
import bridalRedPortrait from '../assets/bridal-red-portrait.jpg';
import bridalPinkVeil2 from '../assets/bridal-pink-veil2.jpg';
import bridalIvory     from '../assets/bridal-ivory-sit.jpg';
import bridalRedSit    from '../assets/bridal-red-sit.jpg';
import bridalRedJhumka from '../assets/bridal-red-jhumka.jpg';
import bridalRedArch   from '../assets/bridal-red-arch.jpg';

import './Gallery.css';

// 16 unique images → fills a 4-col (desktop) and 2-col (mobile) grid with no gaps.
const galleryItems = [
  { src: portrait1,        alt: 'Bride in red with kalire',     label: 'Bridal Glam',       pos: 'center 22%' },
  { src: bridalPinkVeil,   alt: 'Bride with pink veil',         label: 'Pink Veil',         pos: 'center 18%' },
  { src: portrait4,        alt: 'Elegant green saree look',     label: 'Reception Glam',    pos: 'center 25%' },
  { src: bridalRedClose,   alt: 'Bridal close-up portrait',     label: 'HD Close-up',       pos: 'center 20%' },
  { src: portrait2,        alt: 'Bride in pink on sofa',        label: 'Royal Bride',       pos: 'center 18%' },
  { src: bridalPurple,     alt: 'Bride in purple lehenga',      label: 'Purple Bridal',     pos: 'center 18%' },
  { src: portrait3,        alt: 'Bride in maroon velvet',       label: 'Regal Bride',       pos: 'center 15%' },
  { src: bridalRedGarden,  alt: 'Bride in red lehenga',         label: 'Red Bridal',        pos: 'center 18%' },
  { src: bridalPinkLeh,    alt: 'Bride in pink lehenga',        label: 'Pink Lehenga',      pos: 'center 18%' },
  { src: bridalRedFull,    alt: 'Bride in red lehenga',         label: 'Traditional Bride', pos: 'center 18%' },
  { src: bridalRedPortrait,alt: 'Bride in red portrait',        label: 'Bridal Portrait',   pos: 'center 18%' },
  { src: bridalPinkVeil2,  alt: 'Bride holding dupatta',        label: 'Dupatta Look',      pos: 'center 20%' },
  { src: bridalIvory,      alt: 'Bride in ivory gown',          label: 'Ivory Elegance',    pos: 'center 18%' },
  { src: bridalRedSit,     alt: 'Bride sitting, red lehenga',   label: 'Bridal Session',    pos: 'center 18%' },
  { src: bridalRedJhumka,  alt: 'Bride with gold jhumka',       label: 'Gold Jewellery',    pos: 'center 18%' },
  { src: bridalRedArch,    alt: 'Bride at carved arch',         label: 'Traditional Look',  pos: 'center 18%' },
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
        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div key={i} className="gallery__cell">
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
