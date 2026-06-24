// src/components/StudentForm.jsx
//
// Controlled form. On submit, POSTs to /api/send-email (Vercel serverless
// function). Sends the masterclass enquiry directly by email.
import { useState } from 'react';
import './Forms.css';

const initialState = {
  name: '',
  phone: '',
  city: '',
  age: '',
  course: '',
  format: '',
  skillLevel: '',
  startDate: '',
  goal: '',
  questions: '',
};

export default function StudentForm() {
  const [fields, setFields] = useState(initialState);
  const [status, setStatus] = useState('idle');

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!fields.name || !fields.phone) {
      setStatus('error');
      return;
    }

    setStatus('sending');

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'student', fields }),
      });

      if (!res.ok) throw new Error('Request failed');

      setStatus('success');
      setFields(initialState);
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  }

  return (
    <form className="form-box" onSubmit={handleSubmit}>
      <h3 className="form-box__title">Join the Masterclass</h3>
      <p className="form-box__sub">
        Tell us about yourself and we'll suggest the right course for you.
      </p>

      <div className="form-grid">
        {/* Row 1 */}
        <div className="form-group">
          <label className="form-label">Full Name *</label>
          <input
            className="form-input"
            type="text"
            name="name"
            value={fields.name}
            onChange={handleChange}
            placeholder="Your name"
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
          <label className="form-label">Your City *</label>
          <input
            className="form-input"
            type="text"
            name="city"
            value={fields.city}
            onChange={handleChange}
            placeholder="e.g. Fatehabad, Hisar, Delhi"
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label">Age</label>
          <input
            className="form-input"
            type="number"
            name="age"
            value={fields.age}
            onChange={handleChange}
            placeholder="e.g. 22"
            min="15"
            max="60"
          />
        </div>

        {/* Row 3 */}
        <div className="form-group">
          <label className="form-label">Course Interested In *</label>
          <select
            className="form-input form-select"
            name="course"
            value={fields.course}
            onChange={handleChange}
            required
          >
            <option value="">Select a course…</option>
            <option>Beginner (Basic Makeup Fundamentals)</option>
            <option>Intermediate (Bridal &amp; Party Looks)</option>
            <option>Advanced (HD, Airbrush &amp; Contouring)</option>
            <option>Complete Professional Course (All Levels)</option>
            <option>Short Masterclass (1 Day Workshop)</option>
            <option>Private Coaching</option>
            <option>Online Video Course</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Learning Format</label>
          <select
            className="form-input form-select"
            name="format"
            value={fields.format}
            onChange={handleChange}
          >
            <option value="">Preferred format…</option>
            <option>In-Studio (Fatehabad)</option>
            <option>Online / Video Call</option>
            <option>Home Visit (extra charges apply)</option>
            <option>Group Batch</option>
          </select>
        </div>

        {/* Row 4 */}
        <div className="form-group">
          <label className="form-label">Current Skill Level</label>
          <select
            className="form-input form-select"
            name="skillLevel"
            value={fields.skillLevel}
            onChange={handleChange}
          >
            <option value="">Select level…</option>
            <option>Complete Beginner</option>
            <option>Some Self-Taught Skills</option>
            <option>Working Artist (want to upgrade)</option>
            <option>Salon Professional</option>
          </select>
        </div>
        <div className="form-group">
          <label className="form-label">Preferred Start Date</label>
          <input
            className="form-input"
            type="date"
            name="startDate"
            value={fields.startDate}
            onChange={handleChange}
          />
        </div>

        {/* Full width */}
        <div className="form-group form-group--full">
          <label className="form-label">Your Goal / Why You Want to Learn</label>
          <textarea
            className="form-input form-textarea"
            name="goal"
            value={fields.goal}
            onChange={handleChange}
            placeholder="e.g. I want to start my own makeup business, I love bridal artistry"
          />
        </div>
        <div className="form-group form-group--full">
          <label className="form-label">Any Questions for Heena?</label>
          <textarea
            className="form-input form-textarea form-textarea--short"
            name="questions"
            value={fields.questions}
            onChange={handleChange}
            placeholder="Certificate provided? Kit included? Hostel available? Anything you'd like to know"
          />
        </div>
      </div>

      <div className="form-actions">
        <button
          type="submit"
          className="btn btn-gold"
          disabled={status === 'sending'}
        >
          {status === 'sending' ? 'Sending…' : 'Send Enrollment Enquiry'}
        </button>
        <span className="form-note">Certificate awarded, limited seats per batch</span>
      </div>

      {status === 'success' && (
        <p className="form-feedback form-feedback--success">
          Thank you. Your enquiry has been sent, we'll be in touch shortly.
        </p>
      )}
      {status === 'error' && (
        <p className="form-feedback form-feedback--error">
          Something went wrong. Please check the required fields, or call us directly.
        </p>
      )}
    </form>
  );
}
