# Quick Start Guide

Welcome to your new portfolio template! Follow these steps to get started.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Start Development Server

```bash
npm run dev
```

Visit `http://localhost:4321` to see your site!

## Step 3: Customize Your Content

### Priority 1: Replace Placeholder Text

1. Open `CUSTOMIZATION_GUIDE.md` for a complete checklist
2. Start with `src/pages/index.astro` - update your name and title
3. Update `src/pages/resume.astro` with your experience
4. Change email in `src/pages/contact.astro`

### Priority 2: Add Your Projects

1. Delete example files in `src/content/projects/`
2. Create new `.md` files for your projects
3. Add project images to `public/` folder

### Priority 3: Personalize Styling

1. Update colors in `tailwind.config.js` (optional)
2. Replace favicon in `public/favicon.svg`
3. Add your resume PDF to `public/`

## Step 4: Build for Production

```bash
npm run build
```

## Step 5: Deploy

Choose your platform:
- **Vercel**: Connect your GitHub repo
- **Netlify**: Drag & drop the `dist` folder
- **GitHub Pages**: Follow Astro's deployment guide

## Need Help?

-  Read the full `README.md`
-  Follow the `CUSTOMIZATION_GUIDE.md` checklist
-  Check [Astro documentation](https://docs.astro.build)

---

**Pro Tip**: Make changes incrementally and test often. The dev server will auto-reload as you edit files!
