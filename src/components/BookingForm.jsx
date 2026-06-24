// src/components/BookingForm.jsx
//
// Controlled form. On submit, POSTs to /api/send-email (Vercel serverless
// function). No WhatsApp link anymore; the enquiry is emailed directly to
// the studio inbox configured via SEND_TO_EMAIL in environment variables.
import { useState } from 'react';
import './Forms.css';

const initialState = {
  name: '',
  phone: '',
  service: '',
  date: '',
  venue: '',
  people: '',
  lookReference: '',
  notes: '',
};

export default function BookingForm() {
  const [fields, setFields] = useState(initialState);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errorDetail, setErrorDetail] = useState('');

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!fields.name || !fields.phone) {
      setErrorDetail('Name and phone are required');
      setStatus('error');
      return;
    }

    setStatus('sending');
    setErrorDetail('');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'booking', fields }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        console.error('Server responded with error:', data);
        setErrorDetail(data.error || data.detail || 'Unknown server error');
        setStatus('error');
        return;
      }

      setStatus('success');
      setFields(initialState);
    } catch (err) {
      console.error(err);
      setErrorDetail(err.message);
      setStatus('error');
    }
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h3 className="form-box__title">Book Your Makeover</h3>
      <p className="form-box__sub">
        Fill in your details and we'll confirm availability within 24 hours by email.
      </p>

      <div className="form-grid">
        {/* Row 1 */}
        <div className="form-group">
          <label className="form-label">Your Full Name *</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="e.g. Priya Sharma"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Phone / WhatsApp Number *</label>
          <input
            className="form-input"
            type="tel"
            name="phone"
            value={fields.phone}
            onChange={handleChange}
            placeholder="+91 00000 00000"
            required
          />
        </div>

        {/* Row 2 */}
        <div className="form-group">
          <label className="form-label">Service Required *</label>
          <select
            className="form-input form-select"
            name="service"
            value={fields.service}
            onChange={handleChange}
            required
          >
            <option value="">Select a service…</option>
            <option>Bridal Makeup (Full Package)</option>
            <option>Engagement Look</option>
            <option>Party / Function Glam</option>
            <option>HD Makeup</option>
            <option>Hairstyling</option>
            <option>Saree Draping</option>
            <option>Bridal Trial Session</option>
            <option>Complete Bridal Package (Makeup + Hair + Saree)</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Event Date *</label>
          <input
            className="form-input"
            type="date"
            name="date"
            value={fields.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Row 3 */}
        <div className="form-group">
          <label className="form-label">Event Location / Venue</label>
          <input
            className="form-input"
            type="text"
            name="venue"
            value={fields.venue}
            onChange={handleChange}
            placeholder="City or venue name"
          />
        </div>
        <div className="form-group">
          <label className="form-label">No. of People</label>
          <input
            className="form-input"
            type="number"
            name="people"
            value={fields.people}
            onChange={handleChange}
            placeholder="1"
            min="1"
          />
        </div>

        {/* Full width */}
        <div className="form-group form-group--full">
          <label className="form-label">Preferred Look / Reference</label>
          <input
            className="form-input"
            type="text"
            name="lookReference"
            value={fields.lookReference}
            onChange={handleChange}
            placeholder="e.g. Dewy bridal, smoky eyes, traditional Haryanvi"
          />
        </div>
        <div className="form-group form-group--full">
          <label className="form-label">Additional Notes</label>
          <textarea
            className="form-input form-textarea"
            name="notes"
            value={fields.notes}
            onChange={handleChange}
            placeholder="Skin concerns, allergies, special requests or questions"
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-primary"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Booking Enquiry'}
        </button>

        <span className="form-note">
          or call:{' '}
          <a href="tel:+919416143320" className="form-note__link">
            94161-43320
          </a>
        </span>
      </div>

      {status === 'success' && (
        <p className="form-feedback form-feedback--success">
          Thank you. Your enquiry has been sent, we'll be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="form-feedback form-feedback--error">
          Something went wrong{errorDetail ? `: ${errorDetail}` : ''}. Please check the required fields, or call us directly.
        </p>
      )}
    </form>
  );
}