# ThumbGen

> AI-powered YouTube thumbnail generator built for content creators.

ThumbGen lets you generate stunning, click-worthy YouTube thumbnails in seconds using Google's Gemini AI. Choose your style, color scheme, and aspect ratio — and let AI do the rest. All your generated thumbnails are saved to your account for easy access and management.

---

## Features

- **AI Thumbnail Generation** — Powered by Google Gemini (`gemini-3-pro-image-preview`)
- **5 Visual Styles** — Bold & Graphic, Tech/Futuristic, Minimalist, Photorealistic, Illustrated
- **8 Color Schemes** — Vibrant, Sunset, Forest, Neon, Purple, Monochrome, Ocean, Pastel
- **3 Aspect Ratios** — 16:9, 1:1, 9:16
- **Generation History** — All thumbnails saved to your personal account
- **YouTube Preview** — See how your thumbnail looks in a real YouTube-style feed
- **Download** — Download generated thumbnails directly from your gallery
- **Auth System** — Secure session-based register & login
- **Cloud Storage** — Thumbnails stored and served via Cloudinary CDN
- **Legal Pages** — Privacy Policy & Terms of Service included

---

## Tech Stack

### Frontend
| Technology | Version | Purpose |
|---|---|---|
| React | 19 | UI framework |
| Vite | 7 | Build tool & dev server |
| TypeScript | 5 | Type safety |
| Tailwind CSS | v4 | Utility-first styling |
| React Router DOM | v7 | Client-side routing |
| Motion (Framer Motion) | 12 | Animations |
| Lenis | 1.3 | Smooth scrolling |
| Axios | 1.13 | HTTP requests |
| Lucide React | — | Icon library |
| React Hot Toast | 2.6 | Toast notifications |
| React Fast Marquee | 1.6 | Scrolling marquee |

### Backend
| Technology | Version | Purpose |
|---|---|---|
| Node.js + Express | 5 | Server framework |
| TypeScript + tsx | 5 / 4 | Type safety & runtime |
| MongoDB + Mongoose | 9 | Database & ORM |
| express-session | 1.18 | Session management |
| connect-mongo | 6 | MongoDB session store |
| bcrypt | 6 | Password hashing |
| Google Gemini AI (`@google/genai`) | 1.34 | Image generation |
| Cloudinary | 2.8 | Image cloud storage & CDN |
| dotenv | 17 | Environment variables |
| nodemon | 3 | Dev auto-reload |

---

## Project Structure

```
ThumbGen/
├── client/                        # React frontend (Vite + TS)
│   ├── public/
│   │   ├── favicon.svg
│   │   └── assets/                # Static SVG icons
│   ├── src/
│   │   ├── assets/
│   │   │   └── assets.ts          # Shared constants, types & YT preview HTML
│   │   ├── components/            # Reusable UI components
│   │   │   ├── Navbar.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Login.tsx
│   │   │   ├── PreviewPanel.tsx
│   │   │   ├── AspectRatioSelector.tsx
│   │   │   ├── StyleSelector.tsx
│   │   │   ├── ColorSchemeSelector.tsx
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── TiltImage.tsx
│   │   │   ├── SoftBackdrop.tsx
│   │   │   └── LenisScroll.tsx
│   │   ├── configs/
│   │   │   └── api.ts             # Axios instance with base URL
│   │   ├── context/
│   │   │   └── AuthContext.tsx    # Global auth state
│   │   ├── data/                  # Static data arrays
│   │   │   ├── features.tsx
│   │   │   ├── footer.ts
│   │   │   ├── pricing.ts
│   │   │   └── testimonial.ts
│   │   ├── pages/
│   │   │   ├── HomePage.tsx       # Landing page
│   │   │   ├── Generate.tsx       # Thumbnail generation form
│   │   │   ├── MyGeneration.tsx   # User's saved thumbnails gallery
│   │   │   ├── YtPreview.tsx      # YouTube-style preview page
│   │   │   ├── PrivacyPage.tsx    # Privacy Policy
│   │   │   └── TermsPage.tsx      # Terms of Service
│   │   ├── sections/              # Homepage sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── ContactSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── types.ts               # Shared TypeScript interfaces
│   │   ├── globals.css            # Global styles + custom scrollbar
│   │   ├── App.tsx                # Root component & router
│   │   └── main.tsx               # Entry point
│   ├── .env                       # VITE_BASE_URL
│   ├── vercel.json
│   └── package.json
│
└── server/                        # Node.js + Express backend (TS)
    ├── configs/
    │   ├── ai.ts                  # Google Gemini AI client setup
    │   └── db.ts                  # MongoDB connection
    ├── controllers/
    │   ├── AuthControllers.ts     # Register, Login, Logout, Verify
    │   ├── ThumbnailController.ts # Generate & Delete thumbnails
    │   └── UserController.ts      # Fetch user thumbnails
    ├── middlewares/
    │   └── auth.ts                # Session auth guard middleware
    ├── models/
    │   ├── User.ts                # User Mongoose schema
    │   └── Thumbnail.ts           # Thumbnail Mongoose schema
    ├── routes/
    │   ├── AuthRoutes.ts
    │   ├── ThumbnailRoutes.ts
    │   └── UserRoutes.ts
    ├── server.ts                  # Express app entry point
    ├── example.env                # Environment variable template
    ├── vercel.json
    └── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** v18+
- **MongoDB Atlas** account — [Create free cluster](https://www.mongodb.com/atlas)
- **Google AI Studio** API key — [Get it free](https://aistudio.google.com)
- **Cloudinary** account — [Sign up free](https://cloudinary.com)

---

### 1. Clone the Repository

```bash
git clone https://github.com/Chirag1724/ThumbGen.git
```

---

### 2. Setup the Server

```bash
cd server
npm install
```

Create a `.env` file inside `server/` (refer to `example.env`):

```env
PORT=3000
SESSION_SECRET="your_random_secret_string"
MONGODB_URI="your_mongodb_connection_string"
GEMINI_API_KEY="your_gemini_api_key"
CLOUDINARY_URL="cloudinary://api_key:api_secret@cloud_name"
NODE_ENV="development"
```

Start the dev server:

```bash
npm run server
```

> Server runs at `http://localhost:3000`

---

### 3. Setup the Client

```bash
cd client
npm install
```

Create a `.env` file inside `client/`:

```env
VITE_BASE_URL="http://localhost:3000"
```

Start the client:

```bash
npm run dev
```

> Client runs at `http://localhost:5173`

---

## Routes

| Path | Page | Auth Required |
|---|---|---|
| `/` | Home / Landing page | ❌ |
| `/generate` | Thumbnail generator | ✅ |
| `/generate/:id` | View a specific generation | ✅ |
| `/my-generation` | Your thumbnail gallery | ✅ |
| `/preview` | YouTube-style thumbnail preview | ❌ |
| `/login` | Login & Register | ❌ |
| `/privacy` | Privacy Policy | ❌ |
| `/terms` | Terms of Service | ❌ |

---

## API Endpoints

### Auth — `/api/auth`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Create a new account |
| POST | `/login` | Login to existing account |
| POST | `/logout` | Logout current session |
| GET | `/verify` | Verify current session |

### Thumbnail — `/api/thumbnail`
| Method | Endpoint | Description |
|---|---|---|
| POST | `/generate` | Generate a new AI thumbnail |
| DELETE | `/delete/:id` | Delete a thumbnail |

### User — `/api/user`
| Method | Endpoint | Description |
|---|---|---|
| GET | `/thumbnails` | Get all thumbnails for current user |
| GET | `/thumbnail/:id` | Get a single thumbnail by ID |

---

## Thumbnail Options

### Styles
| Style | Description |
|---|---|
| Bold & Graphic | Eye-catching, high contrast, expressive reactions |
| Tech/Futuristic | Sleek, glowing, cyber-tech aesthetic |
| Minimalist | Clean layout, flat design, negative space |
| Photorealistic | DSLR-style, natural lighting, candid feel |
| Illustrated | Digital illustration, cartoon or vector art |

### Color Schemes
`Vibrant` · `Sunset` · `Forest` · `Neon` · `Purple Dream` · `Monochrome` · `Ocean` · `Pastel`

### Aspect Ratios
| Ratio | Use Case |
|---|---|
| `16:9` | YouTube standard / landscape |
| `1:1` | Square / community posts |
| `9:16` | YouTube Shorts / vertical |

---

## Authentication

ThumbGen uses **session-based authentication** (not JWT):

- Sessions are stored in MongoDB via `connect-mongo`
- Passwords are hashed using `bcrypt`
- Sessions persist for 7 days
- Unauthenticated users visiting protected routes are redirected to `/login`

---

## Deployment

Both `client/` and `server/` include `vercel.json` for Vercel deployment.

**Deploy Server:**
```bash
cd server
vercel --prod
```

**Deploy Client:**
```bash
cd client
vercel --prod
```

> Add all environment variables in your Vercel project dashboard before deploying.

---

## License

This project is licensed under the [Apache-2.0 License](./LICENSE).

---

<div align="center">
  <p>Built with ❤️ by <a href="https://github.com/Chirag1724">Chirag</a></p>
</div>
