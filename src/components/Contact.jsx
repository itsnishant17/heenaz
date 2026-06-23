import FadeIn from './FadeIn';
import './Contact.css';

const INSTAGRAM_URL = 'https://www.instagram.com/heena_beauty_parlour_fatehabad';

export default function Contact() {
  return (
    <section className="contact">
      <div className="contact__grid">

        <FadeIn>
          <p className="section-label">Find Us</p>
          <h2 className="section-heading">Visit the <em>Studio</em></h2>

          <ul className="contact__list">

            <li className="contact__item">
              <div className="contact__icon-box">
                <svg className="icon icon-md icon-filled" style={{ fill: 'var(--gold)' }} aria-hidden="true">
                  <use href="#icon-whatsapp" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">WhatsApp</p>
                <p className="contact__item-value"><a href="https://wa.me/919896901992">+91 98969-01992</a></p>
              </div>
            </li>

            <li className="contact__item">
              <div className="contact__icon-box">
                <svg className="icon icon-md" style={{ stroke: 'var(--gold)' }} aria-hidden="true">
                  <use href="#icon-phone" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">Phone / Call</p>
                <p className="contact__item-value"><a href="tel:+919416143320">+91 94161-43320</a></p>
              </div>
            </li>

            <li className="contact__item">
              <div className="contact__icon-box">
                <svg className="icon icon-md" style={{ stroke: 'var(--gold)' }} aria-hidden="true">
                  <use href="#icon-map-pin" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">Studio Address</p>
                <p className="contact__item-value">Jawahar Chowk, Fatehabad, Haryana 125050</p>
              </div>
            </li>

            <li className="contact__item">
              <div className="contact__icon-box">
                <svg className="icon icon-md" style={{ stroke: 'var(--gold)' }} aria-hidden="true">
                  <use href="#icon-clock" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">Studio Hours</p>
                <p className="contact__item-value">Mon to Sat: 9:00 AM to 8:00 PM</p>
                <p className="contact__item-value">Sunday: By appointment only</p>
              </div>
            </li>

            <li className="contact__item">
              <div className="contact__icon-box">
                <svg className="icon icon-md" style={{ stroke: 'var(--gold)' }} aria-hidden="true">
                  <use href="#icon-instagram" />
                </svg>
              </div>
              <div>
                <p className="contact__item-label">Instagram</p>
                <p className="contact__item-value"><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">@heena_beauty_parlour_fatehabad</a></p>
              </div>
            </li>

          </ul>
        </FadeIn>

        <FadeIn>
          <div className="contact__map">
            <svg className="icon icon-xl" style={{ stroke: 'var(--gold-light)' }}>
              <use href="#icon-map-pin" />
            </svg>
            <p className="contact__map-text">Jawahar Chowk, Fatehabad, Haryana</p>
            <a href="https://maps.google.com/?q=Jawahar+Chowk+Fatehabad+Haryana" target="_blank" rel="noreferrer" className="contact__map-link">Open in Google Maps</a>
          </div>

          <div className="contact__social">
            <div className="contact__social-header">
              <svg className="icon icon-sm icon-gold" aria-hidden="true">
                <use href="#icon-instagram" />
              </svg>
              <p className="contact__social-label">Follow Our Work</p>
            </div>
            <p className="contact__social-text">
              See the latest bridal looks and masterclass highlights on Instagram.
            </p>
            <p className="contact__social-text">
              Follow <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="contact__social-link">@heena_beauty_parlour_fatehabad</a> to stay inspired.
            </p>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}