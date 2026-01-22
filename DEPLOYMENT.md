# Deployment Guide — Republic Lawyers Website

This guide will help you deploy the Republic Lawyers website to production.

## 🚀 Quick Start

### Before Deploying

1. **Add Required Images** to `/assets/` folder:
   - `javid-portrait.webp` - Hero section image
   - `og-default.jpg` - Social media preview image
   - `favicon.ico` - Browser tab icon

2. **Set Up Form Handler**:
   - Choose a form service (Formspree, Netlify Forms, or custom backend)
   - Update form `action` URL in `index.html` and `contact.html`

3. **Update Domain** in `sitemap.xml`:
   - Replace `republiclawyers.com.au` with your actual domain

## 📋 Deployment Options

### Option 1: Netlify (Recommended) ⭐

**Why Netlify?**
- Free tier available
- Automatic HTTPS
- Form handling built-in
- Easy custom domain setup
- Continuous deployment from Git

**Steps:**

1. **Prepare Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Republic Lawyers website"
   ```

2. **Push to GitHub/GitLab**
   ```bash
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

3. **Deploy to Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" > "Import an existing project"
   - Connect your Git provider
   - Select your repository
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.`
   - Click "Deploy site"

4. **Configure Forms** (if using Netlify Forms)
   - Add `netlify` attribute to forms:
     ```html
     <form name="contact" method="POST" netlify>
     ```
   - Netlify will automatically handle form submissions
   - View submissions in Netlify dashboard

5. **Add Custom Domain**
   - Go to Site settings > Domain management
   - Add custom domain: `republiclawyers.com.au`
   - Follow DNS configuration instructions
   - SSL certificate will be automatically provisioned

### Option 2: Vercel

**Steps:**

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow prompts to link project and deploy

4. Add custom domain in Vercel dashboard

### Option 3: GitHub Pages (Free)

**Steps:**

1. Push to GitHub repository

2. Go to repository Settings > Pages

3. Source: Deploy from branch `main`, folder `/ (root)`

4. Site will be live at `username.github.io/repo-name`

5. **For custom domain**:
   - Add `CNAME` file to root with your domain
   - Configure DNS records with your registrar

**Limitations:**
- Form handling requires external service
- No server-side processing

### Option 4: Traditional Web Hosting (cPanel, etc.)

**Steps:**

1. **Connect via FTP/SFTP**:
   - Host: your-server.com
   - Username: your-username
   - Password: your-password

2. **Upload Files**:
   - Upload ALL files and folders to `public_html` or `www` directory
   - Maintain folder structure

3. **Set Default Document**:
   - Ensure `index.html` is set as default/index file
   - Usually automatic

4. **Configure SSL**:
   - Use cPanel "SSL/TLS" or Let's Encrypt

## 🔧 Post-Deployment Configuration

### 1. Form Handling

**If using Formspree:**

1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form
3. Update form action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

**If using Netlify Forms:**

1. Add `netlify` and `name` attributes:
   ```html
   <form name="contact" method="POST" netlify>
   ```
2. Add hidden input for bot filtering:
   ```html
   <input type="hidden" name="form-name" value="contact">
   ```

### 2. Email Notifications

Configure form service to send notifications to:
- `info@republiclawyers.com.au`
- Or Javid's preferred email

### 3. Analytics (Optional)

**Google Analytics:**

1. Create GA4 property
2. Add tracking code before `</head>`:
   ```html
   <!-- Google tag (gtag.js) -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

### 4. Search Console

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://republiclawyers.com.au`
3. Verify ownership (DNS or HTML file method)
4. Submit sitemap: `https://republiclawyers.com.au/sitemap.xml`

### 5. DNS Configuration

Update DNS records with your domain registrar:

**For Netlify:**
```
Type: A
Name: @
Value: 75.2.60.5

Type: CNAME
Name: www
Value: your-site.netlify.app
```

**For Cloudflare (recommended):**
- Enable Cloudflare for free CDN and DDoS protection
- Set SSL mode to "Full (strict)"

## ✅ Launch Checklist

### Pre-Launch

- [ ] All images added to `/assets/` folder
- [ ] Images optimized (compressed to < 200KB each)
- [ ] Form handler configured and tested
- [ ] All phone numbers verified (02) 8626 5171, 0424 623 052
- [ ] Email address verified: info@republiclawyers.com.au
- [ ] Office addresses confirmed
- [ ] Sitemap domain updated
- [ ] All internal links tested
- [ ] Test on multiple browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (iOS, Android)
- [ ] Run Lighthouse audit (aim for 90+ on all metrics)
- [ ] Accessibility check with screen reader
- [ ] Check keyboard navigation works
- [ ] Verify all animations respect prefers-reduced-motion

### At Launch

- [ ] Deploy to production
- [ ] Configure custom domain
- [ ] Verify SSL certificate active (HTTPS)
- [ ] Test form submissions
- [ ] Submit sitemap to Google Search Console
- [ ] Submit site to Bing Webmaster Tools
- [ ] Set up email notifications for form submissions
- [ ] Create Google Business Profile (if not already done)
- [ ] Update Google Business Profile with website URL

### Post-Launch

- [ ] Monitor form submissions for first 48 hours
- [ ] Check analytics are recording (if implemented)
- [ ] Monitor site uptime
- [ ] Share website with client for final approval
- [ ] Create social media posts announcing website
- [ ] Update email signatures with website URL
- [ ] Update all business directories with new website

## 🔍 Testing URLs

After deployment, test these pages:

- Homepage: `/`
- Contact: `/contact.html`
- Family Law: `/services/family-law.html`
- Criminal Law: `/services/criminal-law.html`
- Wills & Estates: `/services/wills-estates.html`
- Business Law: `/services/business-law.html`
- Commercial Contracts: `/services/commercial-contracts.html`
- Dispute Resolution: `/services/dispute-resolution.html`
- Sitemap: `/sitemap.xml`
- Robots: `/robots.txt`

## 📊 Performance Targets

Run [Lighthouse](https://developers.google.com/web/tools/lighthouse) after deployment:

| Metric | Target | 
|--------|--------|
| Performance | 95+ |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

**If scores are lower:**
- Optimize images further
- Enable Gzip compression on server
- Minify CSS/JS (if not already done)
- Use CDN (Cloudflare)

## 🆘 Troubleshooting

### Images Not Loading

- Check file paths are correct (case-sensitive on most servers)
- Verify images exist in `/assets/` folder
- Check browser console for 404 errors

### Forms Not Working

- Verify form `action` URL is correct
- Check form `method="POST"` is set
- Test form handler independently
- Check browser console for errors

### CSS Not Loading

- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Verify `/styles/main.css` uploaded correctly
- Check for typos in `<link>` tag

### Mobile Menu Not Working

- Verify `/scripts/main.js` uploaded correctly
- Check browser console for JavaScript errors
- Test on actual mobile device, not just browser resize

## 🔐 Security Recommendations

1. **SSL/HTTPS**: Always use HTTPS (automatic with Netlify/Vercel)
2. **Form Spam Protection**: Add reCAPTCHA or use Netlify's bot detection
3. **Regular Updates**: While static HTML doesn't need updates, monitor for security advisories
4. **Backup**: Keep Git repository as backup of all files
5. **Access Control**: Limit who has deployment access

## 📞 Support

For technical deployment questions:
- Review this guide
- Check hosting provider documentation
- Consult with web hosting support

For content updates:
- Edit HTML files directly
- Push changes to Git (if using Netlify/Vercel for auto-deploy)
- Or upload updated files via FTP

---

**Last Updated**: November 26, 2025
**Version**: 1.0

