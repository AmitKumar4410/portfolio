# Portfolio Setup Guide

## 🎨 Quick Setup Instructions

Since placeholder images couldn't be generated automatically, here's how to add your own:

### Step 1: Add Your Profile Photo
1. Take or find a professional photo of yourself
2. Save it as `assets/images/profile-placeholder.jpg`
3. Recommended size: 400x400px or larger (square format)

### Step 2: Add Project Screenshots
Add screenshots of your games with these exact names in `assets/images/`:

- `project-runner.jpg` - Your runner game screenshot
- `project-puzzle.jpg` - Your puzzle game screenshot  
- `project-phaser.jpg` - Your Phaser project screenshot
- `project-ui-util.jpg` - UI utility tool preview
- `project-compressor.jpg` - Asset compressor preview
- `project-match3.jpg` - Match-3 game screenshot

**Tip**: Recommended size: 800x500px (16:10 ratio) for consistent display

### Step 3: Create Favicons
Use [Favicon.io](https://favicon.io/) to generate favicons from text or image:
1. Go to https://favicon.io/
2. Create your favicon (use 🎮 emoji or your logo)
3. Download the package
4. Extract and copy these files to `assets/icons/`:
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`

### Step 4: Add Your Resume
1. Export your resume as PDF
2. Save it as `assets/resume.pdf`

---

## 🚀 Quick Test

Open `index.html` in your browser to preview your portfolio!

**Using VS Code?**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

**Using Python?**
```bash
cd d:\Pages\portfolio
python -m http.server 8000
```
Then visit: http://localhost:8000

---

## ✏️ Personalization Checklist

### Required Changes in index.html:
- [ ] Line 267: Replace "AMIT KUMAR" with your name
- [ ] Line 387, 515, 596: Update email to your actual email
- [ ] Line 524: Update location  
- [ ] Lines 532-545: Add your GitHub, LinkedIn, Twitter, Itch.io URLs

### Optional Improvements:
- [ ] Customize colors in `css/variables.css`
- [ ] Add actual game links in Projects section
- [ ] Update project descriptions with your real projects
- [ ] Add more projects if you have them
- [ ] Customize the "About Me" section with your story

---

## 🎯 What You Have Now

✅ **Fully functional portfolio** with:
- Dark/Light mode toggle
- Smooth animations and scroll effects
- Responsive design (mobile, tablet, desktop)
- Contact form with validation
- Project filtering system
- Professional navigation
- SEO-optimized meta tags

✅ **Modular code structure**:
- Separated CSS files for easy customization
- Organized JavaScript modules
- Clean, maintainable architecture

---

## 📝 Next Steps

1. **Add Your Images** (see Step 1-3 above)
2. **Personalize Content** (see checklist above)
3. **Test Locally** (open index.html)
4. **Deploy** (GitHub Pages, Netlify, or Vercel)

### Deployment Options:

**GitHub Pages (Free):**
```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```
Then enable GitHub Pages in repository settings.

**Netlify (Easiest):**
1. Go to https://app.netlify.com/drop
2. Drag & drop your `portfolio` folder
3. Done! Your site is live.

---

## 💡 Tips for Success

1. **Use Real Projects**: Replace placeholder projects with your actual work
2. **Add Live Demos**: Link to playable versions of your games
3. **Show Code**: Link to GitHub repos to prove your skills
4. **Keep It Updated**: Add new projects as you create them
5. **Get Feedback**: Share with other developers for improvement ideas

---

## 🐛 Troubleshooting

**Issue**: Dark mode not working
- **Solution**: Make sure `js/main.js` is loaded after the HTML

**Issue**: Animations not showing
- **Solution**: Add class `hidden` to elements you want to animate on scroll

**Issue**: Form not submitting
- **Solution**: Check `js/contact.js` - it's set to simulate submission. See README for integration options.

---

## 📞 Need Help?

If you encounter any issues:
1. Check the browser console for errors (F12)
2. Verify all CSS/JS files are loading
3. Make sure file paths are correct
4. Test in different browsers

---

**Your portfolio is ready! Just add your content and images.** 🚀
