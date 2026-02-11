# 🎮 Game Developer Portfolio

A modern, feature-rich portfolio website for game developers. Built with vanilla HTML, CSS, and JavaScript - no frameworks required!

![Portfolio Preview](./assets/images/portfolio-preview.jpg)

## ✨ Features

### Core Features
- 🌓 **Dark/Light Mode** - Smooth theme switching with system preference detection
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- ⚡ **High Performance** - Vanilla JS with no heavy dependencies
- 🎨 **Modern Design** - Glassmorphism, neon accents, and smooth animations
- ♿ **Accessible** - ARIA labels, keyboard navigation, and semantic HTML

### Sections
- **Hero Section** - Eye-catching introduction with animated stats
- **About Me** - Personal background and journey
- **Skills** - Tech stack with animated progress bars
- **Design Patterns** - Showcase of game development patterns with code examples
- **Projects** - Filterable project gallery with modal details
- **Contact Form** - Validated form with real-time feedback

### Advanced Features
- Scroll progress indicator
- Smooth scroll navigation
- Intersection Observer animations
- Project filtering by technology
- Contact form validation
- Mobile-friendly hamburger menu
- Social media integration

## 🚀 Quick Start

### 1. Clone or Download
```bash
git clone [your-repo-url]
cd portfolio
```

### 2. Customize Your Content

#### Update Personal Information:
Edit `index.html` and replace:
- **Line 267**: Your name in hero section
- **Line 387**: Social media links (GitHub, LinkedIn, Twitter, Itch.io)
- **Line 515**: Email address and location
- **Line 596**: Footer information

#### Add Your Projects:
- Replace project content in the Projects section (starting line 354)
- Add your game screenshots to `assets/images/`
- Update project links and descriptions

#### Add Your Resume:
- Place your resume PDF in `assets/resume.pdf`

### 3. Add Your Assets

#### Profile Photo:
- Add your photo as `assets/images/profile-placeholder.jpg`

#### Project Screenshots:
Add your game screenshots with these names:
- `assets/images/project-runner.jpg`
- `assets/images/project-puzzle.jpg`
- `assets/images/project-phaser.jpg`
- `assets/images/project-ui-util.jpg`
- `assets/images/project-compressor.jpg`
- `assets/images/project-match3.jpg`

#### Favicon:
Generate favicons and place them in `assets/icons/`:
- `favicon-16x16.png`
- `favicon-32x32.png`
- `apple-touch-icon.png`

> **Tip**: Use [Favicon Generator](https://realfavicongenerator.net/) for creating favicons

### 4. Test Locally

Simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# VS Code - Use Live Server extension
```

Then visit `http://localhost:8000`

### 5. Deploy

#### GitHub Pages:
1. Push to GitHub
2. Go to Settings → Pages
3. Select source branch
4. Your site will be at `https://yourusername.github.io/portfolio`

#### Netlify:
1. Drag and drop your folder to [Netlify](https://app.netlify.com)
2. Your site is live!

#### Vercel:
```bash
npm i -g vercel
vercel
```

## 📁 Project Structure

```
portfolio/
├── index.html              # Main HTML file
├── css/
│   ├── variables.css       # Design tokens & theming
│   ├── base.css           # Base styles & utilities
│   ├── components.css     # Reusable components
│   └── sections.css       # Section-specific styles
├── js/
│   ├── main.js            # Core functionality
│   ├── animations.js      # Scroll animations
│   ├── contact.js         # Form handling
│   └── filters.js         # Project filtering
├── assets/
│   ├── images/            # Project screenshots, photos
│   ├── icons/             # Favicons
│   └── resume.pdf         # Your resume/CV
└── README.md              # This file
```

## 🎨 Customization Guide

### Colors
Edit color values in `css/variables.css`:
```css
--neon-primary: #00f2ff;      /* Change primary color */
--neon-secondary: #bd00ff;    /* Change secondary color */
--bg-dark: #0a0a0e;           /* Change background */
```

### Fonts
Change font in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;700&display=swap" rel="stylesheet">
```

Update font variable in `css/variables.css`:
```css
--font-primary: 'YourFont', sans-serif;
```

### Adding New Projects
Copy a project card in `index.html` and update:
```html
<div class="glass-card project-card hidden" data-category="cocos" data-date="2024-01">
    <div class="project-image">
        <img src="./assets/images/your-project.jpg" alt="Your Project">
    </div>
    <h3 class="project-title">Your Project Name</h3>
    <p class="project-description">Your description...</p>
    <div class="project-tags">
        <span class="tag">Tag 1</span>
        <span class="tag">Tag 2</span>
    </div>
    <div class="project-links">
        <a href="#" class="project-link">Play Demo →</a>
    </div>
</div>
```

## 🔧 Form Integration

The contact form currently simulates submission. To make it functional:

### Option 1: FormSpree (Free & Easy)
1. Sign up at [FormSpree](https://formspree.io)
2. Get your form endpoint
3. In `js/contact.js`, uncomment and update:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option 2: Netlify Forms
1. Deploy to Netlify
2. Add `netlify` attribute to form in HTML:
```html
<form id="contact-form" netlify>
```

### Option 3: Custom Backend
Create your own API endpoint and update the fetch URL in `js/contact.js`

## 🌐 SEO Optimization

### Update Meta Tags
Edit in `index.html` (lines 6-22):
- Title, description, keywords
- Open Graph tags for social sharing
- Twitter Card tags

### Add Analytics
Add before closing `</body>` tag:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-GA-ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'YOUR-GA-ID');
</script>
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

Feel free to fork this project and customize it for your own use. If you find bugs or have suggestions, please open an issue!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 💡 Credits

- **Design Inspiration**: Modern web design trends, glassmorphism
- **Fonts**: Google Fonts (Outfit)
- **Built by**: Your Name
- **Year**: 2024

---

## 🎯 Game Development Design Patterns Featured

This portfolio showcases understanding of key game development patterns:

1. **Singleton Pattern** - For managers and global access
2. **Observer Pattern** - Event-driven communication
3. **Command Pattern** - Action encapsulation and undo/redo
4. **State Pattern** - State machine management
5. **Object Pool Pattern** - Performance optimization
6. **Factory Pattern** - Flexible object creation

Each pattern includes:
- Real-world use cases
- Code examples
- Best practices

---

Made with ❤️ and lots of ☕

**Questions?** Feel free to reach out via the contact form!
