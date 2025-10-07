# StorageOS - Antler Pitch Deck

An interactive, web-based pitch deck for StorageOS built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **5 Interactive Slides**: Problem, Solution, Market, Team, and The Ask
- **Smooth Animations**: Framer Motion powered transitions
- **Keyboard Navigation**: Arrow keys, Space, Home, End
- **Mobile Responsive**: Works on all devices
- **Black & Blue Design**: Professional, tech-forward aesthetic
- **Shareable URLs**: Each slide has its own URL

## 📋 Slides

1. **Problem** (`/slides/problem`) - WHO + WHAT the problem is
2. **Solution** (`/slides/solution`) - StorageOS AI agents system
3. **Market** (`/slides/market`) - Why Now + Market size + Business model
4. **Team** (`/slides/team`) - Founders + First 5 hires
5. **The Ask** (`/slides/ask`) - Funding + Milestones + Vision

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Deployment**: Vercel

## 🏃‍♂️ Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the pitch deck.

### Build for Production

```bash
npm run build
npm run start
```

## ⌨️ Keyboard Shortcuts

- **→ / Space**: Next slide
- **←**: Previous slide
- **Home**: First slide
- **End**: Last slide

## 🚢 Deploying to Vercel

### Option 1: Vercel CLI

```bash
npm i -g vercel
vercel
```

### Option 2: GitHub + Vercel

1. Push to GitHub:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```

2. Import to Vercel:
- Go to [vercel.com](https://vercel.com)
- Click "Import Project"
- Select your GitHub repository
- Deploy!

Your pitch deck will be live at: `https://storageos-pitch.vercel.app`

## 📁 Project Structure

```
storageos-pitch/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Redirect to first slide
│   ├── globals.css         # Global styles
│   └── slides/
│       ├── problem/
│       ├── solution/
│       ├── market/
│       ├── team/
│       └── ask/
├── components/
│   ├── SlideLayout.tsx     # Slide wrapper
│   ├── SlideNav.tsx        # Navigation UI
│   └── KeyboardNav.tsx     # Keyboard controls
├── lib/
│   ├── slides.ts           # Slide data
│   └── animations.ts       # Animation variants
└── public/                 # Static assets
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js`:

```js
colors: {
  'black-primary': '#0A0A0A',
  'blue-primary': '#00AEEF',
  // ... more colors
}
```

### Animations

Edit `lib/animations.ts` for custom Framer Motion variants.

### Content

Each slide is in `app/slides/[slide-name]/page.tsx` - edit directly!

## 📱 Mobile Support

The deck is fully responsive. On mobile:
- Swipe gestures work (left/right)
- Touch-friendly navigation
- Optimized layouts

## 📊 Analytics (Optional)

Add Vercel Analytics:

```bash
npm install @vercel/analytics
```

Then in `app/layout.tsx`:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

## 🔗 Useful Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Deployment](https://vercel.com/docs)

## 👥 Team

**Antoni Watts** - Co-Founder & CEO (Technical/Product)
**Marcus Whelan** - Co-Founder & President (Commercial/Growth)

## 📝 License

Private - Antler Cohort Use Only

---

**Built for Antler Japan Track-Out 🚀**
