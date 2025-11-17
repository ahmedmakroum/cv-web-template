# Modern Portfolio & Resume Template

A stunning, fully customizable portfolio and resume website built with Astro, Tailwind CSS, and modern web technologies. Perfect for developers, designers, data engineers, and professionals looking to showcase their work online.

![Demo](https://raw.githubusercontent.com/ahmedmakroum/cv-web-template/main/public/image.png)


[![Astro](https://img.shields.io/badge/Astro-5.14.1-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build)

[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)



## Features

- **Modern Design**: Sleek, professional design with glassmorphism effects and smooth animations
- **Fully Responsive**: Perfect display on desktop, tablet, and mobile devices
- **Dark Mode Ready**: Beautiful appearance in both light and dark modes
- **Content Collections**: Easy content management for projects and blog posts using Markdown
- **Dynamic Typing Animation**: Eye-catching typing effect on the homepage
- **Contact Form**: Integrated contact form with FormSubmit
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Fast Performance**: Built with Astro for optimal loading speeds
- **Easy Customization**: Simple to personalize with your own information

## Quick Start

### Prerequisites

- Node.js 18+ installed on your machine
- Basic knowledge of HTML, CSS, and Markdown

### Installation

```sh
# Clone this repository
git clone <your-repo-url>

# Navigate to the project directory
cd cv-template

# Install dependencies
npm install

# Start the development server
npm run dev
```

Visit `http://localhost:4321` to see your site!

## Customization Guide

### 1. Personal Information

Update these files with your information:

**`src/pages/index.astro`**
- Replace "Your Name Here" with your name
- Update the typing animation text
- Modify your professional statement
- Customize skill categories and technologies

**`src/pages/resume.astro`**
- Update personal details (name, location, contact info)
- Add your work experience
- List your education
- Customize skills section

**`src/pages/contact.astro`**
- Replace `your-email@example.com` with your actual email in the form action

**`src/components/NameTitle.astro`**
- Change `'Your'` and `'NAME'` to your first and last name
- Update "Your Professional Title"

### 2. Projects

Projects are stored in `src/content/projects/` as Markdown files.

**Remove example projects:**
```sh
rm src/content/projects/*.md
```

**Create your own projects:**

Create a new file `src/content/projects/my-project.md`:

```markdown
---
title: "My Amazing Project"
description: "Brief description of what this project does"
tags: ["React", "Node.js", "MongoDB"]
image: "/project-image.png"
link: "https://github.com/yourusername/project"
featured: true
---

Detailed description of your project goes here...
```

### 3. Blog Posts

Blog posts are in `src/content/blog/`

**Remove example posts:**
```sh
rm src/content/blog/*.md
```

**Add your own posts** following the same Markdown format.

### 4. Assets

**Remove personal images:**
```sh
cd public
rm *.png *.jpg *.pdf
```

**Add your own:**
- Profile photo
- Project screenshots
- Resume PDF (name it `your-resume.pdf` or update the link in `resume.astro`)
- Favicon (update `favicon.svg`)

### 5. Metadata & SEO

Update `src/layouts/Layout.astro` with your default SEO information.

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Styling

This template uses Tailwind CSS for styling. Customize colors, fonts, and more in:
- `tailwind.config.js`
- `src/styles/global.css`

## Deployment

This template can be deployed to various platforms:

### Vercel
```sh
npm run build
# Deploy ./dist folder to Vercel
```

### Netlify
```sh
npm run build
# Deploy ./dist folder to Netlify
```

### GitHub Pages
See [Astro's deployment guide](https://docs.astro.build/en/guides/deploy/)

## Tech Stack

- **Framework**: [Astro](https://astro.build)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Icons**: SVG icons
- **Animations**: CSS animations + AOS (Animate On Scroll)
- **Forms**: [FormSubmit](https://formsubmit.co)

## License

This template is open source and free to use for personal and commercial projects under the MIT License.

## Contributing

Contributions, issues, and feature requests are welcome!

## Support

If you found this template helpful, please give it a star on GitHub!

---

**Built with Astro**


````
