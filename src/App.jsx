// src/App.jsx
//
// SvgSprite: all icons defined once as <symbol> elements
// Components reference them via <svg><use href="#icon-NAME"/></svg>
// WhatsApp button uses the official WA path icon
import Navbar        from './components/Navbar';
import Hero          from './components/Hero';
import Divider       from './components/Divider';
import Gallery       from './components/Gallery';
import Services      from './components/Services';
import Masterclass   from './components/Masterclass';
import About         from './components/About';
import Testimonials  from './components/Testimonials';
import FormsSection  from './components/FormsSection';
import Contact       from './components/Contact';
import Footer        from './components/Footer';

const WA = 'https://wa.me/919896901992?text=Hi%20Heena%27z%20Makeovers!%20I%27d%20like%20to%20connect.';

// ── Hidden SVG sprite, all icon symbols live here ──────────────
function SvgSprite() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" style={{ display: 'none' }}>
      {/* ── Navigation / UI ── */}
      <symbol id="icon-calendar" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/>
      </symbol>
      <symbol id="icon-arrow-right" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </symbol>
      <symbol id="icon-eye" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>
      </symbol>
      <symbol id="icon-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 6 9 17l-5-5"/>
      </symbol>
      <symbol id="icon-star" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z"/>
      </symbol>

      {/* ── Contact ── */}
      <symbol id="icon-whatsapp" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M5.337 17.81L4 20l2.338-.617A9.945 9.945 0 0 0 12 21c5.523 0 10-4.477 10-10S17.523 1 12 1 2 5.477 2 11c0 1.88.52 3.637 1.425 5.143l-.088.667zm1.61-1.01A7.963 7.963 0 0 1 4 11c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8a7.964 7.964 0 0 1-4.16-1.163l-.893.963z"/>
      </symbol>
      <symbol id="icon-phone" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.37 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
      </symbol>
      <symbol id="icon-map-pin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>
      </symbol>
      <symbol id="icon-clock" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
      </symbol>
      <symbol id="icon-instagram" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
      </symbol>

      {/* ── Services ── */}
      <symbol id="icon-sparkles" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4M19 17v4M3 5h4M17 19h4"/>
      </symbol>
      <symbol id="icon-ring" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/><path d="M8 12a4 4 0 0 1 8 0"/><path d="m9 9 1.5 1.5L12 9l1.5 1.5L15 9"/>
      </symbol>
      <symbol id="icon-camera" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3Z"/><circle cx="12" cy="13" r="3"/>
      </symbol>
      <symbol id="icon-scissors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" x2="8.12" y1="4" y2="15.88"/><line x1="14.47" x2="20" y1="14.48" y2="20"/><line x1="8.12" x2="12" y1="8.12" y2="12"/>
      </symbol>
      <symbol id="icon-flower" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/><path d="m8 8 1.88 1.88M14.12 9.88 16 8M8 16l1.88-1.88M14.12 14.12 16 16"/>
      </symbol>
      <symbol id="icon-crown" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z"/><path d="M5 20h14"/>
      </symbol>

      {/* ── New service icons ── */}
      <symbol id="icon-droplet" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2.69s-5.5 6.27-5.5 10.31a5.5 5.5 0 0 0 11 0c0-4.04-5.5-10.31-5.5-10.31Z"/>
      </symbol>
      <symbol id="icon-flask" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3"/><path d="M7.5 14.5h9"/>
      </symbol>
      <symbol id="icon-nail" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 21c0-5 1-9 1-13a3 3 0 0 1 6 0c0 4 1 8 1 13"/><path d="M7 21h10"/><path d="M9.5 5.5h5"/>
      </symbol>
      <symbol id="icon-eyebrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 14c2-4 6-6 9-6s7 2 9 6"/><path d="M7 17c0-1 1-2 2-2M15 15c1 0 2 1 2 2"/>
      </symbol>
      <symbol id="icon-extension" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3c-1 3-1 5 0 8s1 5 0 8"/><path d="M8 4c-.6 3-.6 5 0 8s.6 5 0 8"/><path d="M16 4c.6 3 .6 5 0 8s-.6 5 0 8"/>
      </symbol>
      <symbol id="icon-leaf" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 11 13 11 11"/>
      </symbol>

      {/* ── Masterclass / Education ── */}
      <symbol id="icon-graduation" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>
      </symbol>
      <symbol id="icon-award" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
      </symbol>

      {/* ── Misc ── */}
      <symbol id="icon-diamond" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"/>
      </symbol>
      <symbol id="icon-heart" viewBox="0 0 24 24" fill="currentColor" stroke="none">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z"/>
      </symbol>
    </svg>
  );
}

export default function App() {
  return (
    <>
      {/* Hidden SVG sprite, icons referenced across all components */}
      <SvgSprite />

      <Navbar />
      <Hero />
      <Divider />
      <Gallery />
      <Divider />
      <Services />
      <Masterclass />
      <Divider />
      <About />
      <Testimonials />
      <FormsSection />
      <Contact />
      <Footer />

      {/* ── WhatsApp Floating Button with official icon ── */}
      <a href={WA} target="_blank" rel="noreferrer" className="wa-float" aria-label="Chat on WhatsApp">
        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" style={{ width: 30, height: 30 }}>
          <path
            d="M16 2C8.268 2 2 8.268 2 16c0 2.476.671 4.794 1.84 6.786L2 30l7.466-1.796A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2Z"
            fill="white"
          />
          <path
            d="M22.003 18.763c-.314-.158-1.858-.918-2.146-1.022-.288-.105-.498-.157-.708.157-.21.315-.812 1.022-.994 1.233-.183.21-.366.236-.68.079-.314-.158-1.327-.489-2.527-1.56-.934-.834-1.565-1.863-1.748-2.178-.183-.314-.02-.484.137-.641.14-.14.315-.366.472-.549.157-.183.21-.314.315-.524.105-.21.052-.394-.026-.55-.079-.157-.708-1.706-.97-2.334-.255-.613-.514-.53-.708-.54-.183-.008-.393-.01-.603-.01-.21 0-.55.078-.837.393-.288.314-1.1 1.075-1.1 2.622 0 1.547 1.127 3.042 1.284 3.252.157.21 2.218 3.387 5.374 4.75.75.325 1.336.519 1.792.661.753.24 1.438.207 1.98.126.604-.09 1.859-.76 2.12-1.494.263-.735.263-1.365.184-1.495-.08-.13-.288-.21-.602-.367Z"
            fill="#25D366"
          />
        </svg>
      </a>
    </>
  );
}