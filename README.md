# Heena'z Makeovers — React Site + Email Backend

A single Vercel project: React frontend (Create React App) + a serverless
API route (`/api/send-email`) that emails booking and masterclass enquiries
straight to your inbox via Gmail SMTP. No separate backend to host.

---

## 📁 File Structure

```
heenaz-makeovers/
├── api/
│   └── send-email.js         ← Vercel serverless function (Gmail SMTP)
├── public/
│   └── index.html
├── src/
│   ├── index.js
│   ├── index.css
│   ├── App.jsx                ← SVG icon sprite + page assembly
│   ├── hooks/useFadeIn.js
│   ├── assets/                ← all photos, logo
│   └── components/
│       ├── Navbar.jsx/.css    ← logo + HEENA'Z MAKEOVERS brand
│       ├── Hero.jsx/.css
│       ├── Gallery.jsx/.css   ← bento grid, 19 unique photos
│       ├── Services.jsx/.css  ← SVG icons (no emoji)
│       ├── Masterclass.jsx/.css ← teaching photo, no tier cards
│       ├── About.jsx/.css
│       ├── Testimonials.jsx/.css
│       ├── FormsSection.jsx/.css
│       ├── BookingForm.jsx    ← emails via /api/send-email
│       ├── StudentForm.jsx    ← emails via /api/send-email
│       ├── Forms.css
│       ├── Contact.jsx/.css
│       └── Footer.jsx/.css
├── .env.example                ← copy to .env locally (never commit .env)
├── .gitignore
├── vercel.json                 ← tells Vercel: CRA frontend + /api functions
└── package.json
```

---

## ✉️ Email Backend — How It Works

`api/send-email.js` is a **Vercel Serverless Function**. Vercel automatically
turns any file inside `/api` into its own endpoint — so when you deploy,
`POST /api/send-email` just works, with zero extra backend hosting,
zero separate server, and zero extra configuration on your part.

Both `BookingForm.jsx` and `StudentForm.jsx` call this same endpoint with a
`formType` of `"booking"` or `"student"` and a `fields` object built from
whatever the person typed. The function formats a clean HTML email and
sends it through Gmail's SMTP using [Nodemailer](https://nodemailer.com/).

### Required environment variables

| Variable        | What it is                                              |
|------------------|----------------------------------------------------------|
| `SMTP_EMAIL`     | The Gmail address that sends the mail                   |
| `SMTP_APP_PASS`  | A Gmail **App Password** (not your normal password)     |
| `SEND_TO_EMAIL`  | The inbox that should receive enquiries                 |

> ⚠️ **Never put these values directly in any `.jsx`, `.js`, or `.json` file.**
> They must only live in environment variables — locally in a `.env` file
> (already `.gitignore`d) and in Vercel's dashboard for production.

### Generating a Gmail App Password
1. Enable **2-Step Verification** on the sending Gmail account
   (Google Account → Security).
2. Go to **myaccount.google.com/apppasswords**.
3. Generate a new app password (name it e.g. "Heenaz Website").
4. Copy the 16-character code shown — that's your `SMTP_APP_PASS`.

> If a Gmail App Password has ever been shared anywhere outside of Vercel's
> environment variable settings (a chat, a screenshot, a doc) — **regenerate
> it**. Old codes can simply be revoked from the same App Passwords page.

---

## 🚀 Deploy to Vercel (Hobby plan, via GitHub)

This repo is structured so a single `vercel` deploy handles both the static
site and the API — no separate backend hosting needed.

1. **Push this folder to a GitHub repo** (public or private, either works
   on the Hobby plan).
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/heenaz-makeovers.git
   git push -u origin main
   ```

2. **Import the repo on vercel.com**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repo
   - Vercel auto-detects Create React App (the `vercel.json` confirms it)
   - **Before clicking Deploy**, open **Environment Variables** and add:
     - `SMTP_EMAIL`
     - `SMTP_APP_PASS`
     - `SEND_TO_EMAIL`
   - Click **Deploy**

3. **That's it.** Your live URL serves both the React site and
   `/api/send-email` from the same domain, the same deploy, the same
   project. No CORS issues, no separate server bill, no extra DNS.

### Testing locally before you deploy
```bash
npm install -g vercel     # one-time global install
npm install                # installs nodemailer + react deps
cp .env.example .env        # then fill in real values in .env
vercel dev                  # runs both frontend AND /api locally
```
Visit `http://localhost:3000`, fill out a form, and check the inbox set in
`SEND_TO_EMAIL`.

---

## 🎨 Design System (index.css CSS Variables)

| Variable          | Value                    | Usage                          |
|--------------------|--------------------------|---------------------------------|
| `--gold`           | `#C9A84C`                | Primary accent, borders, icons |
| `--gold-light`     | `#E8C97A`                | Lighter gold for dark bg text  |
| `--gold-pale`      | `#F5E9C8`                | Very light gold fills          |
| `--plum`           | `#6B1A3A`                | Primary brand colour           |
| `--plum-deep`      | `#3D0B20`                | Dark bg sections, headings     |
| `--plum-soft`      | `#9B2D55`                | Hover states, italic headings  |
| `--cream`          | `#FDF8F2`                | Page background                |
| `--warm-white`     | `#FAF5EE`                | Alternate section background   |
| `--font-serif`     | `Cormorant Garamond`     | Display headings               |
| `--font-sans`      | `Montserrat`             | Body text, UI                  |

---

## 🧩 What Changed In This Update

1. Navbar now shows the logo image plus "HEENA'Z MAKEOVERS" with
   "Heena Beauty Parlour" as a subtitle.
2. Hero stat updated from 500+ to 1000+ Brides Adorned.
3. Em-dashes (—) and middle-dots (·) replaced with commas/periods
   throughout all visible copy.
4. Masterclass section: tier cards (1-on-1 / Group / Online) replaced
   with a real teaching photo and caption.
5. Booking and Masterclass forms now send real emails through a Vercel
   serverless function instead of opening WhatsApp.
6. Confirmed the Gallery bento grid uses 19 unique photos with zero
   repeats.

---

## 📱 Responsive Breakpoints

| Breakpoint   | Layout changes                                          |
|--------------|-----------------------------------------------------------|
| `≤ 1024px`  | Gallery bento grid drops to 3 columns                     |
| `≤ 900px`   | 2-col sections stack to 1 column; hero stacks vertically  |
| `≤ 820px`   | Desktop nav links hide, mobile Book button appears        |
| `≤ 640px`   | Gallery → 2 columns, form grid → single column             |
| `≤ 420px`   | Brand text hides in navbar, logo only                      |
