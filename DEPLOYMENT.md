# Deployment Instructions for StorageOS Pitch Deck

## ✅ Build Status: READY TO DEPLOY

The website has been successfully built and tested!

---

## 🚀 Quick Deploy to Vercel

### Method 1: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Navigate to project directory
cd "C:\Users\thema\Documents\BIZ\Radar\Ai Coding\Claude\antler\storageos-pitch"

# 3. Deploy (first time)
vercel

# Follow prompts:
# - "Set up and deploy?" → Yes
# - "Which scope?" → Select your account
# - "Link to existing project?" → No
# - "What's your project's name?" → storageos-pitch
# - "In which directory is your code located?" → ./
# - "Want to modify settings?" → No

# 4. Deploy to production
vercel --prod
```

Your site will be live at: `https://storageos-pitch.vercel.app`

---

### Method 2: GitHub + Vercel (Recommended for Team)

#### Step 1: Push to GitHub

```bash
cd "C:\Users\thema\Documents\BIZ\Radar\Ai Coding\Claude\antler\storageos-pitch"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create first commit
git commit -m "Initial StorageOS pitch deck"

# Create main branch
git branch -M main

# Add remote (replace with your repo URL)
git remote add origin https://github.com/YOUR_USERNAME/storageos-pitch.git

# Push to GitHub
git push -u origin main
```

#### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New..."** → **"Project"**
3. Click **"Import Git Repository"**
4. Select your GitHub repository: `storageos-pitch`
5. Configure project:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
6. Click **"Deploy"**

✅ Your pitch deck will be live in ~2 minutes!

**Live URL**: `https://storageos-pitch.vercel.app` (or custom domain)

---

## 📱 Testing Locally First

Before deploying, test locally:

```bash
# Start development server
npm run dev

# Open in browser
# http://localhost:3000
```

**Test checklist:**
- [ ] All 5 slides load correctly
- [ ] Navigation works (arrows, space, home, end)
- [ ] Animations are smooth
- [ ] Mobile responsive (test in Chrome DevTools)
- [ ] All content displays properly

---

## 🔧 Custom Domain (Optional)

After deploying to Vercel:

1. Go to your project on Vercel
2. Click **"Settings"** → **"Domains"**
3. Add custom domain: `pitch.storageos.ai`
4. Configure DNS:
   - Add `A` record: `76.76.21.21`
   - Or `CNAME` record: `cname.vercel-dns.com`
5. Wait for DNS propagation (~5-30 minutes)

---

## 📊 Vercel Analytics (Optional)

Track slide views and engagement:

```bash
npm install @vercel/analytics
```

Then add to `app/layout.tsx`:

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

Redeploy to activate analytics.

---

## 🔄 Updates & Redeployment

To update the pitch deck:

### If using GitHub + Vercel:

```bash
# Make your changes
# ...

# Commit and push
git add .
git commit -m "Update: [describe changes]"
git push

# Vercel auto-deploys! ✨
```

### If using Vercel CLI:

```bash
# Make your changes
# ...

# Redeploy to production
vercel --prod
```

---

## 🌐 Sharing the Pitch Deck

### Share with Antler Team

**Full deck**: `https://storageos-pitch.vercel.app`

**Specific slides** (shareable URLs):
- Problem: `https://storageos-pitch.vercel.app/slides/problem`
- Solution: `https://storageos-pitch.vercel.app/slides/solution`
- Market: `https://storageos-pitch.vercel.app/slides/market`
- Team: `https://storageos-pitch.vercel.app/slides/team`
- The Ask: `https://storageos-pitch.vercel.app/slides/ask`

### Embed in Notion/Docs

```html
<iframe
  src="https://storageos-pitch.vercel.app/slides/problem"
  width="100%"
  height="600px"
  frameborder="0">
</iframe>
```

---

## 🐛 Troubleshooting

### Build fails on Vercel

**Issue**: Build errors during deployment

**Solution**:
1. Test build locally: `npm run build`
2. Fix any errors
3. Commit and push again

### Animations not working

**Issue**: Framer Motion animations don't play

**Solution**:
- Ensure `use client` directive is at top of component files
- Check browser console for errors
- Clear cache and hard reload (Ctrl+Shift+R)

### Navigation broken

**Issue**: Arrow keys or clicks don't work

**Solution**:
- Check browser console for JavaScript errors
- Ensure all route files exist
- Verify paths in `lib/slides.ts`

---

## 📈 Performance Tips

### Optimize for Presentation

1. **Preload next slide** (add to `components/SlideNav.tsx`):
```tsx
<Link href={nextSlide.path} prefetch={true}>
```

2. **Reduce animation duration** for faster pace (edit `lib/animations.ts`)

3. **Add loading states** (edit `app/loading.tsx`)

---

## ✅ Deployment Checklist

Before sharing with Antler:

- [ ] All slides reviewed for typos
- [ ] Data and numbers verified
- [ ] Animations tested and smooth
- [ ] Mobile responsive tested
- [ ] Keyboard navigation works
- [ ] Site deployed to Vercel
- [ ] Custom domain configured (optional)
- [ ] Analytics installed (optional)
- [ ] Team has access to URL
- [ ] Preview mode tested in presentation setting

---

## 🎉 You're Ready!

Your pitch deck is built, tested, and ready to deploy!

**Next step**: Run `vercel --prod` or push to GitHub to go live.

**Share URL**: Send Antler team the live link for review.

**Pro tip**: Test in fullscreen presentation mode (F11) before the actual pitch!

---

**Built by Antoni & Marcus | StorageOS | Antler Japan 🚀**
