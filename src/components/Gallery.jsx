import FadeIn from './FadeIn';

// ── Bridal ──────────────────────────────────
import portrait1 from '../assets/bridal-hb-portrait1.jpg';
import portrait2 from '../assets/bridal-hb-portrait2.jpg';
import portrait3 from '../assets/bridal-hb-portrait3.jpg';
import portrait4 from '../assets/bridal-hb-portrait4.jpg';
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

// ── Party makeup ────────────────────────────
import partyPink     from '../assets/party-pink-glam.jpg';
import partySage     from '../assets/party-sage-gown.jpg';
import partyCream    from '../assets/party-cream-anarkali.jpg';
import partyDuoGlam  from '../assets/party-duo-glam.jpg';
import partyDuoHair  from '../assets/party-duo-hair.jpg';
import partyMauve    from '../assets/party-mauve-suit.jpg';
import partyBeige    from '../assets/party-beige-gown.jpg';
import partyGreen    from '../assets/party-green-lehenga.jpg';

// ── Punjabi look ────────────────────────────
import punjabiRedBride  from '../assets/punjabi-red-bride.jpg';
import punjabiRedKalire from '../assets/punjabi-red-kalire.jpg';
import punjabiPurpleSuit from '../assets/punjabi-purple-suit.jpg';
import punjabiPurpleSaree from '../assets/punjabi-purple-saree.jpg';
import punjabiRedSide   from '../assets/punjabi-red-side.jpg';
import punjabiRedClassic from '../assets/punjabi-red-classic.jpg';
import punjabiTeal      from '../assets/punjabi-teal.jpg';
import punjabiPink      from '../assets/punjabi-pink-lehenga.jpg';

import './Gallery.css';

// Each section uses a uniform 4-col grid; counts are multiples of 4 so the
// grid fills evenly on desktop (×4) and mobile (×2) with no empty cells.
const sections = [
  {
    id: 'gallery',
    label: 'Bridal Makeup',
    title: 'Every Bride, A ',
    em: 'Masterpiece',
    items: [
      { src: portrait1,        alt: 'Bride in red with kalire',   label: 'Bridal Glam',       pos: 'center 22%' },
      { src: bridalPinkVeil,   alt: 'Bride with pink veil',       label: 'Pink Veil',         pos: 'center 18%' },
      { src: portrait4,        alt: 'Elegant green saree look',   label: 'Reception Glam',    pos: 'center 25%' },
      { src: bridalRedClose,   alt: 'Bridal close-up portrait',   label: 'HD Close-up',       pos: 'center 20%' },
      { src: portrait2,        alt: 'Bride in pink on sofa',      label: 'Royal Bride',       pos: 'center 18%' },
      { src: bridalPurple,     alt: 'Bride in purple lehenga',    label: 'Purple Bridal',     pos: 'center 18%' },
      { src: portrait3,        alt: 'Bride in maroon velvet',     label: 'Regal Bride',       pos: 'center 15%' },
      { src: bridalRedGarden,  alt: 'Bride in red lehenga',       label: 'Red Bridal',        pos: 'center 18%' },
      { src: bridalPinkLeh,    alt: 'Bride in pink lehenga',      label: 'Pink Lehenga',      pos: 'center 18%' },
      { src: bridalRedFull,    alt: 'Bride in red lehenga',       label: 'Traditional Bride', pos: 'center 18%' },
      { src: bridalRedPortrait,alt: 'Bride in red portrait',      label: 'Bridal Portrait',   pos: 'center 18%' },
      { src: bridalPinkVeil2,  alt: 'Bride holding dupatta',      label: 'Dupatta Look',      pos: 'center 20%' },
      { src: bridalIvory,      alt: 'Bride in ivory gown',        label: 'Ivory Elegance',    pos: 'center 18%' },
      { src: bridalRedSit,     alt: 'Bride sitting, red lehenga', label: 'Bridal Session',    pos: 'center 18%' },
      { src: bridalRedJhumka,  alt: 'Bride with gold jhumka',     label: 'Gold Jewellery',    pos: 'center 18%' },
      { src: bridalRedArch,    alt: 'Bride at carved arch',       label: 'Traditional Look',  pos: 'center 18%' },
    ],
  },
  {
    id: 'party',
    label: 'Party Makeup',
    title: 'Every Party, A ',
    em: 'Showstopper',
    items: [
      { src: partyPink,    alt: 'Pink reception glam',        label: 'Reception Glam',  pos: 'center 28%' },
      { src: partySage,    alt: 'Sage embroidered gown',      label: 'Evening Gown',    pos: 'center 20%' },
      { src: partyCream,   alt: 'Cream anarkali look',        label: 'Anarkali Charm',  pos: 'center 18%' },
      { src: partyDuoGlam, alt: 'Two-model glam shoot',       label: 'Glam Duo',        pos: 'center 28%' },
      { src: partyMauve,   alt: 'Mauve suit with diamonds',   label: 'Party Glam',      pos: 'center 18%' },
      { src: partyBeige,   alt: 'Beige sequin gown',          label: 'Cocktail Look',   pos: 'center 22%' },
      { src: partyGreen,   alt: 'Green cocktail lehenga',     label: 'Cocktail Glam',   pos: 'center 20%' },
      { src: partyDuoHair, alt: 'Two-model hairstyling',      label: 'Hairstyling',     pos: 'center 26%' },
    ],
  },
  {
    id: 'punjabi',
    label: 'Punjabi Look',
    title: 'Tradition Meets ',
    em: 'Glamour',
    items: [
      { src: punjabiRedKalire,  alt: 'Punjabi bride with kalire',  label: 'Kalire Moment',  pos: 'center 18%' },
      { src: punjabiRedBride,   alt: 'Punjabi bride in red',       label: 'Red Bridal',     pos: 'center 14%' },
      { src: punjabiPurpleSuit, alt: 'Bride in purple suit',       label: 'Chooda & Kalire',pos: 'center 20%' },
      { src: punjabiRedSide,    alt: 'Red bridal side profile',    label: 'Classic Red',    pos: 'center 18%' },
      { src: punjabiTeal,       alt: 'Bride in teal lehenga',      label: 'Festive Glam',   pos: 'center 16%' },
      { src: punjabiPurpleSaree,alt: 'Bride in purple saree',      label: 'Punjabi Suit',   pos: 'center 18%' },
      { src: punjabiPink,       alt: 'Bride in pink lehenga',      label: 'Pink Glam',      pos: 'center 20%' },
      { src: punjabiRedClassic, alt: 'Traditional red bride',      label: 'Bridal Glow',    pos: 'center 22%' },
    ],
  },
];

export default function Gallery() {
  return (
    <>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="gallery">
          <FadeIn>
            <p className="section-label">{section.label}</p>
            <h2 className="section-heading">
              {section.title}<em>{section.em}</em>
            </h2>
          </FadeIn>

          <FadeIn>
            <div className="gallery__grid">
              {section.items.map((item, i) => (
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
      ))}
    </>
  );
}
