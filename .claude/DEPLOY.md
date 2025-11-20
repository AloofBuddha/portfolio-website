# Deployment Instructions

## Option 1: Vercel (Recommended - Easiest)

### Initial Setup
1. Install Vercel CLI globally:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy from project root:
   ```bash
   vercel
   ```
   - First time: Answer prompts (accept defaults)
   - Vercel auto-detects Vite and configures everything
   - Get preview URL instantly

4. Deploy to production:
   ```bash
   vercel --prod
   ```

### Continuous Deployment (Optional)
- Push to GitHub and connect repo in Vercel dashboard
- Auto-deploys on every push to main branch

---

## Option 2: GitHub Pages

### Setup
1. Add to `package.json`:
   ```json
   {
     "homepage": "https://YOUR_USERNAME.github.io/portfolio-website"
   }
   ```

2. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

4. Create `vite.config.ts` base path:
   ```typescript
   export default defineConfig({
     base: '/portfolio-website/',  // match repo name
     plugins: [react()],
   })
   ```

5. Deploy:
   ```bash
   npm run deploy
   ```

6. Enable GitHub Pages:
   - Go to repo Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` → `/root`
   - Save

Site will be live at: `https://YOUR_USERNAME.github.io/portfolio-website/`

---

## Which to Choose?

**Vercel** (Recommended):
- ✅ Zero configuration
- ✅ Automatic HTTPS
- ✅ Custom domains easy
- ✅ Preview deployments
- ✅ Faster global CDN

**GitHub Pages**:
- ✅ Free forever
- ✅ Integrated with GitHub
- ⚠️ Requires manual deploys
- ⚠️ Slower than Vercel

## Current Build Output
- Build command: `npm run build`
- Output directory: `dist/`
- Static files ready for deployment
