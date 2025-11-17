# Styling Customization Guide

Learn how to customize the look and feel of your portfolio.

## Color Scheme

### Primary Colors

Edit `tailwind.config.js` to change the main color scheme:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // Change these values
          50: '#eff6ff',
          100: '#dbeafe',
          // ... more shades
        }
      }
    }
  }
}
```

### Quick Color Changes

Common places to update colors:

1. **Gradient Buttons** (`src/pages/index.astro`)
   ```astro
   <!-- Change from blue/purple to your colors -->
   bg-gradient-to-r from-blue-500 to-purple-600
   ```

2. **Accent Colors**
   - Search for `text-blue-` and replace with your color
   - Search for `border-blue-` and replace with your color

## Typography

### Changing Fonts

1. **Update Layout.astro**

```astro
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

2. **Update Tailwind Config**

```javascript
theme: {
  extend: {
    fontFamily: {
      sans: ['Your Font', 'sans-serif'],
    }
  }
}
```

### Font Sizes

Main title sizes are in `src/pages/index.astro`:
- Desktop: `text-8xl` (adjust as needed)
- Mobile: `text-6xl`

## Animations

### Typing Animation Speed

In `src/pages/index.astro`, adjust these values:

```javascript
let speed = isDeleting ? 50 : 150;  // Character speed
speed = 2000;  // Pause at end
speed = 500;   // Pause before next word
```

### Hover Effects

Search for `hover:` classes throughout the codebase to modify:
- `hover:scale-105` - Grow on hover
- `hover:shadow-xl` - Shadow on hover
- `transition-all duration-300` - Animation speed

## Background Themes

The template includes multiple background options. Users can switch between them using the background switcher.

To modify backgrounds, edit the `backgroundClasses` object in `src/pages/index.astro`.

## Responsive Design

### Breakpoints

Tailwind breakpoints used:
- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

### Testing Responsiveness

```bash
# Start dev server
npm run dev

# Open in browser and use DevTools responsive mode
```

## Dark Mode

The template supports dark mode automatically. Customize dark mode styles:

```astro
<!-- Light mode -->
<div class="bg-white text-gray-900">

<!-- Dark mode variant -->
<div class="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

## Component Styling

### Cards

Project and blog cards use glassmorphism. Adjust in:
- `src/components/ProjectCard.astro`
- `src/components/BlogCard.astro`

Key classes:
```css
bg-white/5           /* Transparency */
backdrop-blur-xl     /* Glass effect */
border-white/10      /* Subtle border */
```

### Buttons

Button styles in `src/pages/index.astro`:

```astro
<!-- Primary button -->
<a class="bg-gradient-to-r from-blue-500 to-purple-600 
          hover:from-blue-600 hover:to-purple-700 
          transform hover:scale-105 
          transition-all duration-300">
  
<!-- Secondary button -->
<a class="border-3 border-gray-500 
          hover:border-white hover:bg-white/5">
```

## Global Styles

Edit `src/styles/global.css` for:
- Custom CSS variables
- Base element styling
- Utility classes

## Advanced Customization

### Adding Custom Animations

1. Define in `global.css`:
```css
@keyframes customAnimation {
  from { transform: translateY(0); }
  to { transform: translateY(-10px); }
}

.custom-animate {
  animation: customAnimation 2s infinite;
}
```

2. Use in components:
```astro
<div class="custom-animate">...</div>
```

### Custom Gradient Backgrounds

```astro
<div class="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500">
  Your content
</div>
```

## Performance Tips

1. **Optimize images** before adding to `/public/`
2. **Use WebP format** when possible
3. **Lazy load images** for better performance
4. **Minimize custom CSS** - use Tailwind utilities

## Testing Your Changes

```bash
# Development with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Common Customizations

### Removing the Typing Animation

Replace the typing text with static text in `src/pages/index.astro`:

```astro
<div class="text-2xl">
  Your Professional Title
</div>
```

### Changing Card Hover Effects

In project/blog cards, modify:
```astro
hover:transform hover:scale-105  → hover:scale-102
transition-all duration-500      → transition-all duration-300
```

### Adjusting Spacing

- `section-padding` class controls section spacing
- Modify in `src/styles/global.css`

---

**Pro Tip**: Make one change at a time and test in the browser to see the effect immediately!
