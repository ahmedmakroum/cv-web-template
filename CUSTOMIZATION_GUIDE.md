# 📋 Customization Checklist

Use this checklist to ensure you've personalized all parts of the template.

## ✅ Essential Customization

### 1. Personal Information

- [ ] **src/pages/index.astro**
  - [ ] Update page title and description (lines 4-5)
  - [ ] Change "Your Name Here" to your actual name
  - [ ] Update professional statement/tagline
  - [ ] Modify typing animation roles (search for `roles` array in script section)

- [ ] **src/components/NameTitle.astro**
  - [ ] Change `'Your'` to your first name
  - [ ] Change `'NAME'` to your last name
  - [ ] Update "Your Professional Title" subtitle

- [ ] **src/pages/resume.astro**
  - [ ] Update page title and description
  - [ ] Change PDF link from `/your-resume.pdf` to your actual filename
  - [ ] Update full name in header
  - [ ] Update contact information (location, email, phone)
  - [ ] Update social media links (LinkedIn, GitHub, website)
  - [ ] Write your professional profile/summary
  - [ ] Add your work experience
  - [ ] Add your education
  - [ ] List your skills

- [ ] **src/pages/contact.astro**
  - [ ] Update page title
  - [ ] Change form action email from `your-email@example.com` to your actual email
  - [ ] Customize contact page messaging

- [ ] **src/components/Footer.astro**
  - [ ] Change "Your Name" to your actual name
  - [ ] Update tagline/description
  - [ ] Update GitHub link
  - [ ] Update LinkedIn link
  - [ ] Update email link
  - [ ] Update copyright notice

### 2. Content

- [ ] **Projects** (`src/content/projects/`)
  - [ ] Delete example project files
  - [ ] Create your own project markdown files
  - [ ] Add project screenshots to `/public/`
  - [ ] Ensure each project has: title, description, tags, image, link

- [ ] **Blog Posts** (`src/content/blog/`)
  - [ ] Delete example blog posts (or keep as templates)
  - [ ] Write your own blog posts
  - [ ] Add any blog images to `/public/`

- [ ] **Assets** (`/public/`)
  - [ ] Add your resume PDF
  - [ ] Add your profile photo
  - [ ] Add project screenshots
  - [ ] Update favicon if desired
  - [ ] Remove remaining placeholder images

### 3. Styling & Branding

- [ ] **tailwind.config.js**
  - [ ] Customize color scheme if desired
  - [ ] Adjust fonts if needed

- [ ] **src/styles/global.css**
  - [ ] Review and customize global styles
  - [ ] Adjust dark mode colors if needed

### 4. SEO & Metadata

- [ ] **src/layouts/Layout.astro**
  - [ ] Update default meta tags
  - [ ] Add your site name
  - [ ] Update Open Graph image

- [ ] **package.json**
  - [ ] Update project name
  - [ ] Update description
  - [ ] Add your repository URL (if applicable)

### 5. Configuration Files

- [ ] **README.md**
  - [ ] Update repository URL in clone command
  - [ ] Add your own screenshot
  - [ ] Customize description if needed

- [ ] **vercel.json** (if deploying to Vercel)
  - [ ] Review and update if needed

## 🎨 Optional Customization

- [ ] Update typing animation speed
- [ ] Change gradient colors
- [ ] Modify animation effects
- [ ] Add additional pages
- [ ] Add Google Analytics or other tracking
- [ ] Set up custom domain
- [ ] Add more social media links

## 🚀 Before Deployment

- [ ] Test all links
- [ ] Check contact form submission
- [ ] Verify resume PDF opens correctly
- [ ] Test on mobile devices
- [ ] Check dark mode appearance
- [ ] Run `npm run build` to ensure no errors
- [ ] Preview production build with `npm run preview`

## 📝 Content Tips

### Writing Effective Resume Content

- **Quantify achievements**: Use numbers and percentages
- **Use action verbs**: Built, Designed, Implemented, Led
- **Be specific**: Name technologies and tools
- **Show impact**: How did your work help the business?

### Project Descriptions

- Start with a clear overview
- List key features
- Explain technologies used
- Share results and impact
- Include live demo or GitHub links

### Blog Posts

- Write about what you know
- Share lessons learned
- Provide code examples
- Make it valuable for readers
- Use proper formatting and headings

---

**Need help?** Check the main README.md for detailed instructions.
