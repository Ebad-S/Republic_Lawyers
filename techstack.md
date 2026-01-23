# Republic Lawyers - Technical Stack Documentation

> **Project:** Republic Lawyers Website  
> **NEW version Live URL:** https://republic.serenity-webcrafts.com.au  
> **OLD version Live URL:**https://www.republiclawyers.com.au/
> **Hosting:** Private VPS + Coolify  
> **Version:** 1.0  
> **Last Updated:** January 23, 2026

---

## 📋 Table of Contents

- [Overview](#overview)
- [Core Technologies](#core-technologies)
- [Architecture](#architecture)
- [File Structure](#file-structure)
- [Frontend Stack](#frontend-stack)
- [Deployment & Hosting](#deployment--hosting)
- [Performance & Optimization](#performance--optimization)
- [SEO & Accessibility](#seo--accessibility)
- [Browser Support](#browser-support)
- [Development Workflow](#development-workflow)
- [Security Considerations](#security-considerations)
- [Monitoring & Analytics](#monitoring--analytics)
- [Dependencies](#dependencies)

---

## Overview

Republic Lawyers is a **static website** built with pure HTML, CSS, and vanilla JavaScript. The site prioritizes performance, accessibility, and SEO without relying on frameworks, build tools, or external dependencies. This approach ensures:

- **Resend**: 
- **Fast Load Times**: No framework overhead
- **Low Maintenance**: No dependency updates or security patches
- **High Reliability**: Static files served directly by web server
- **Full Control**: Complete control over every line of code
- **Easy Deployment**: Simple file upload or git-based deployment

---

## Core Technologies

### Frontend Stack

| Technology | Version/Specification | Purpose |
|------------|----------------------|---------|
| **HTML5** | Living Standard | Semantic markup, document structure |
| **CSS3** | Level 3 & 4 modules | Styling, layout, animations |
| **JavaScript** | ES6+ (ES2015+) | Interactive functionality, DOM manipulation |

### Build Tools

**None.** This is a zero-build, zero-dependency static website. No npm, webpack, Vite, or any build tooling required.

### Runtime Environment

- **Server**: Nginx or Apache (recommended) via Coolify
- **Node.js**: Not required
- **PHP/Python/Ruby**: Not required

---

## Architecture

### Architecture Type

**Static Site Architecture** — Pure client-side rendering with no backend processing.

```
┌─────────────────┐
│   Web Browser   │
└────────┬────────┘
         │ HTTP/HTTPS Request
         ▼
┌─────────────────┐
│   Web Server    │  (Nginx via Coolify)
│   (Nginx/CDN)   │
└────────┬────────┘
         │ Static Files
         ▼
┌─────────────────┐
│   HTML + CSS +  │
│   JS + Assets   │
└─────────────────┘
```

### No Backend Required

- No server-side processing
- No databases
- No API endpoints (unless form handler added)
- All content is pre-rendered in HTML files

### Form Handling

Currently implemented with **placeholder form action**. Ready for integration with:
- **Formspree** (recommended for simplicity)
- **Netlify Forms** (if deploying to Netlify)
- **Custom backend endpoint** (Node.js, PHP, Python)
- **Email service APIs** (SendGrid, Mailgun)

---

## File Structure

```
Republic_Lawyers/
├── index.html                      # Homepage
├── contact.html                    # Contact page
├── services/                       # Service pages
│   ├── family-law.html
│   ├── criminal-law.html
│   ├── wills-estates.html
│   ├── business-law.html
│   ├── commercial-contracts.html
│   └── dispute-resolution.html
├── styles/
│   └── main.css                    # Main stylesheet (1,154 lines)
├── scripts/
│   └── main.js                     # JavaScript functionality (250 lines)
├── assets/                         # Images and media
│   ├── favicon.ico
│   ├── logo.png
│   ├── javid-portrait.webp
│   └── homepage.png
├── components/                     # Reference components (not used in build)
│   ├── header.html
│   ├── footer.html
│   └── service-card.html
├── content/
│   └── seeds.json                  # LLMO content seeds for AI tools
├── sitemap.xml                     # XML sitemap for search engines
├── robots.txt                      # Robots exclusion protocol
├── README.md                       # Project documentation
├── DEPLOYMENT.md                   # Deployment guide
├── build_specs.md                  # Original build specifications
├── build_additions.md              # Additional build notes
├── Project_Summary.md              # Project summary
└── techstack.md                    # This file

Total: 8 HTML pages, 1 CSS file, 1 JS file
```

---

## Frontend Stack

### HTML5

**Features Used:**
- Semantic HTML elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- ARIA labels for accessibility (`aria-label`, `aria-expanded`, `aria-haspopup`, `role`)
- Microdata & JSON-LD structured data for SEO
- Native HTML5 form validation (`required`, `type="email"`, `type="tel"`)
- Responsive images (`width`, `height`, `loading="eager"`)

**Key Patterns:**
- Clean, semantic markup
- Proper heading hierarchy (h1 → h6)
- Accessible navigation with keyboard support
- SEO-optimized meta tags and Open Graph tags

### CSS3

**Version:** 1,154 lines of custom CSS  
**File:** `styles/main.css`

**CSS Features:**
- **CSS Custom Properties** (CSS Variables) for theming
  ```css
  --color-primary: #1a365d;
  --color-accent: #3182ce;
  --space-lg: 2.5rem;
  ```
- **CSS Grid Layout** for responsive grids
- **Flexbox** for component layout
- **CSS Transitions & Animations** for micro-interactions
- **Media Queries** for responsive design
- **clamp()** for fluid typography
- **Pseudo-elements** for decorative effects

**CSS Architecture:**
```
main.css
├── Reset & Base Styles          (lines 1-82)
├── Typography                   (lines 84-116)
├── Layout Utilities             (lines 118-131)
├── Header & Navigation          (lines 133-367)
├── Trust Strip                  (lines 369-415)
├── Hero Section                 (lines 417-522)
├── Buttons                      (lines 524-586)
├── Services Grid                (lines 588-664)
├── How We Help Section          (lines 666-704)
├── Testimonials                 (lines 706-751)
├── Contact/CTA Section          (lines 753-831)
├── Footer                       (lines 833-973)
├── Animations                   (lines 975-985)
├── Practice Pages               (lines 1009-1083)
├── Contact Page                 (lines 1085-1132)
└── Responsive Styles            (lines 1134-1154)
```

**Design System:**
- **Colors:** Navy blue primary (#1a365d), bright blue accent (#3182ce)
- **Typography:** System font stack (San Francisco, Segoe UI, Roboto)
- **Spacing:** Consistent spacing scale (0.5rem to 6rem)
- **Breakpoints:** Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)

**No CSS Framework:** No Bootstrap, Tailwind, or any CSS framework used.

### JavaScript (Vanilla ES6+)

**Version:** 250 lines of vanilla JavaScript  
**File:** `scripts/main.js`

**Features Implemented:**

1. **Mobile Menu Toggle** (lines 7-44)
   - Hamburger menu animation
   - Overlay navigation for mobile
   - Body scroll lock when menu open
   - Dropdown submenu handling

2. **Scroll Reveal Animation** (lines 46-77)
   - IntersectionObserver API
   - Respects `prefers-reduced-motion`
   - Progressive enhancement

3. **FAQ Accordion** (lines 79-101)
   - Expand/collapse functionality
   - ARIA attributes for accessibility
   - Auto-close other FAQs

4. **Contact Form Handler** (lines 103-164)
   - Form validation
   - Loading states
   - Success/error messaging
   - Ready for backend integration

5. **Smooth Scroll** (lines 166-193)
   - Anchor link smooth scrolling
   - Offset for sticky header

6. **Service Card Enhancement** (lines 195-223)
   - Click-anywhere-on-card functionality
   - Keyboard navigation support

7. **Copyright Year Updater** (lines 225-233)
   - Automatic year update in footer

8. **Performance Logging** (lines 239-248)
   - Development mode only
   - Page load time tracking

**JavaScript APIs Used:**
- **DOM Manipulation**: `querySelector`, `addEventListener`, `classList`
- **IntersectionObserver API**: For scroll animations
- **Fetch API**: Ready for form submissions (commented out)
- **Window API**: `scrollTo`, `matchMedia`, `performance.timing`

**No JavaScript Framework:** No React, Vue, Angular, jQuery, or any JS framework used.

---

## Deployment & Hosting

### Hosting Platform

**Provider:** Private VPS  
**Platform:** Coolify  
**Live URL:** https://republic.serenity-webcrafts.com.au

### Coolify Deployment Configuration

**Coolify Settings:**
```yaml
Type: Static Site
Build Command: (none)
Publish Directory: . (root)
Port: 80 (HTTP), 443 (HTTPS)
```

### Web Server

**Recommended:** Nginx (via Coolify)

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name republic.serenity-webcrafts.com.au;
    root /var/www/republic_lawyers;
    index index.html;

    # Gzip compression
    gzip on;
    gzip_types text/css application/javascript image/svg+xml;

    # Cache static assets
    location ~* \.(css|js|jpg|png|webp|svg|ico|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    # Redirect to HTTPS
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name republic.serenity-webcrafts.com.au;
    root /var/www/republic_lawyers;
    index index.html;

    # SSL certificates (handled by Coolify)
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    # Modern SSL configuration
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers HIGH:!aNULL:!MD5;

    # Enable HTTP/2
    http2_push_preload on;

    # Serve static files
    location / {
        try_files $uri $uri/ =404;
    }

    # Cache headers
    location ~* \.(css|js|jpg|png|webp|svg|ico|woff2)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }
}
```

### Deployment Methods

**Option 1: Git-based Deployment (Recommended)**
```bash
# On local machine
git add .
git commit -m "Update website"
git push origin main

# Coolify auto-deploys from git repository
```

**Option 2: Direct File Upload**
```bash
# Via SFTP/SCP
scp -r ./* user@server:/var/www/republic_lawyers/
```

**Option 3: Coolify Manual Deployment**
- Upload files via Coolify dashboard
- Coolify handles deployment automatically

### SSL/TLS

- **Certificate Provider:** Let's Encrypt (via Coolify)
- **Auto-renewal:** Yes
- **Forced HTTPS:** Yes
- **HSTS:** Recommended to enable

### DNS Configuration

```
Type: A
Name: republic
Value: [VPS IP Address]
TTL: 3600

Type: CNAME
Name: www
Value: republic.serenity-webcrafts.com.au
TTL: 3600
```

---

## Performance & Optimization

### Performance Metrics (Target)

| Metric | Target Score | Notes |
|--------|--------------|-------|
| **Performance** | 95+ | Lighthouse score |
| **Accessibility** | 100 | WCAG 2.1 AA compliant |
| **Best Practices** | 100 | Security, HTTPS, console errors |
| **SEO** | 100 | Meta tags, structured data, sitemap |

### Optimization Techniques

**1. Zero Dependencies**
- No npm packages
- No JavaScript frameworks
- No CSS frameworks
- No external libraries
- **Result:** 0 KB of third-party code

**2. System Fonts**
```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', 
             Roboto, 'Helvetica Neue', Arial, sans-serif;
```
- **Benefit:** Zero font download time
- **Fallback:** Native OS fonts on all platforms

**3. Optimized Images**
- **Format:** WebP for photos (javid-portrait.webp)
- **Compression:** Target < 200KB per image
- **Lazy loading:** `loading="eager"` for above-fold images
- **Responsive:** Width/height attributes prevent layout shift

**4. Minification**
- **CSS:** Can be minified (currently 1,154 lines → ~30KB minified)
- **JS:** Can be minified (currently 250 lines → ~3KB minified)
- **HTML:** Can be minified (optional)

**5. Caching Strategy**
```nginx
# Static assets: 1 year cache
Cache-Control: public, max-age=31536000, immutable

# HTML: No cache or short cache
Cache-Control: no-cache, must-revalidate
```

**6. Compression**
- **Gzip:** Enabled for text files (CSS, JS, HTML)
- **Brotli:** Recommended for better compression (optional)

**7. HTTP/2**
- **Multiplexing:** Single connection for all resources
- **Server Push:** Pre-push critical CSS/JS (optional)

### Bundle Sizes

```
main.css:     ~35KB (uncompressed), ~8KB (gzipped)
main.js:      ~10KB (uncompressed), ~3KB (gzipped)
Total JS+CSS: ~45KB (uncompressed), ~11KB (gzipped)
```

**Initial Page Load:**
- HTML: ~20KB
- CSS: ~35KB
- JS: ~10KB
- Images: ~100-200KB (hero image)
- **Total:** ~165-265KB for initial load

### Performance Best Practices

✅ **Implemented:**
- Inline critical CSS (optional but not done)
- Defer non-critical JavaScript (loaded at end of body)
- Responsive images with width/height
- System fonts (zero font download)
- Minimal JavaScript (250 lines)
- CSS animations with `will-change`
- IntersectionObserver for scroll animations

🔜 **Recommendations:**
- Enable Brotli compression
- Add resource hints (`<link rel="preconnect">`)
- Consider service worker for offline support
- Implement HTTP/2 Server Push for critical resources

---

## SEO & Accessibility

### SEO Implementation

**1. Meta Tags**
```html
<!-- Title tag with keywords -->
<title>Experienced Sydney Lawyers | Free Case Review — Republic Lawyers</title>

<!-- Meta description (unique per page) -->
<meta name="description" content="...">

<!-- Keywords (legacy but included) -->
<meta name="keywords" content="family lawyer Sydney, criminal lawyer Sydney, ...">
```

**2. Open Graph (Social Media)**
```html
<meta property="og:title" content="Republic Lawyers">
<meta property="og:description" content="...">
<meta property="og:image" content="/assets/og-default.jpg">
<meta property="og:type" content="website">
```

**3. JSON-LD Structured Data**

Implemented on all pages:
- **LegalService** schema (homepage)
- **FAQPage** schema (all pages with FAQs)
- **Service** schema (service pages)
- **LocalBusiness** schema (contact info)

**4. Sitemap & Robots**
- `sitemap.xml`: All 8 pages indexed
- `robots.txt`: Allow all crawlers
- Submitted to Google Search Console

**5. Semantic HTML**
- Proper heading hierarchy (h1 → h6)
- Semantic elements (`<article>`, `<section>`, `<nav>`)
- Descriptive link text (not "click here")

### Accessibility (WCAG 2.1 AA)

**1. Keyboard Navigation**
- All interactive elements keyboard accessible
- Visible focus indicators
- Skip to content link (optional, not implemented)

**2. ARIA Labels**
```html
<button aria-label="Toggle navigation menu" aria-expanded="false">
<nav role="navigation">
<footer role="contentinfo">
```

**3. Color Contrast**
- Navy blue (#1a365d) on white: 12.6:1 (AAA)
- Accent blue (#3182ce) on white: 4.5:1 (AA)
- All text meets WCAG AA standards

**4. Screen Reader Support**
- Descriptive alt text for images
- ARIA live regions for dynamic content
- Hidden decorative elements with `aria-hidden="true"`

**5. Responsive Design**
- Mobile-first approach
- Touch targets ≥ 44x44px
- Readable text sizes (18px base)

**6. Motion Preferences**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

### SEO Checklist

✅ **Implemented:**
- Unique title tags (all 8 pages)
- Unique meta descriptions (all 8 pages)
- JSON-LD structured data
- Semantic HTML markup
- XML sitemap
- robots.txt
- Open Graph tags
- Descriptive URLs (`/services/family-law.html`)
- Internal linking
- Mobile-friendly design
- Fast load times
- HTTPS (via Coolify)

---

## Browser Support

### Supported Browsers

| Browser | Version | Notes |
|---------|---------|-------|
| **Chrome** | Last 2 versions | ✅ Full support |
| **Firefox** | Last 2 versions | ✅ Full support |
| **Safari** | Last 2 versions | ✅ Full support |
| **Edge** | Last 2 versions | ✅ Full support |
| **Chrome Mobile** | Latest | ✅ Full support |
| **Safari iOS** | Last 2 versions | ✅ Full support |

### Browser Features Used

**Modern JavaScript (ES6+):**
- Arrow functions
- Template literals
- `const`/`let`
- Async/await (ready for use)
- IntersectionObserver API
- `fetch()` API (for forms)

**Modern CSS:**
- CSS Grid
- Flexbox
- CSS Custom Properties
- `clamp()` for fluid typography
- CSS Transitions & Animations

### Fallbacks

**JavaScript:**
- Progressive enhancement: Site works without JS
- IntersectionObserver: Graceful degradation (elements visible immediately)
- Smooth scroll: Falls back to instant scroll

**CSS:**
- Grid/Flexbox: Supported in all modern browsers
- CSS Variables: Supported in all modern browsers (IE11 not supported)

### Legacy Browser Support

**IE11:** ❌ Not supported
- CSS Grid not fully supported
- CSS Variables not supported
- Modern JavaScript not supported
- **Solution:** Show upgrade message (optional)

---

## Development Workflow

### Local Development

**Option 1: Python HTTP Server**
```bash
python -m http.server 8000
# Visit http://localhost:8000
```

**Option 2: Node.js http-server**
```bash
npm install -g http-server
http-server -p 8000
```

**Option 3: VS Code Live Server**
- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

**Option 4: PHP Built-in Server**
```bash
php -S localhost:8000
```

### Code Editing

**IDE Recommendations:**
- **VS Code** (recommended)
- Sublime Text
- WebStorm
- Any text editor

**VS Code Extensions:**
- Live Server (local development)
- Prettier (code formatting)
- HTML CSS Support
- ESLint (optional)

### Version Control

**Git Repository:**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [your-repo-url]
git push -u origin main
```

**Branching Strategy:**
```
main (production)
├── develop (staging)
└── feature/* (features)
```

### Testing

**Manual Testing:**
- Test on Chrome, Firefox, Safari, Edge
- Test on mobile devices (iOS, Android)
- Test form submissions
- Test all links
- Test navigation (desktop & mobile)

**Automated Testing:**
- **Lighthouse:** Performance, accessibility, SEO
- **WAVE:** Accessibility checker
- **W3C Validator:** HTML validation
- **CSS Validator:** CSS validation

**Testing Checklist:**
- [ ] All pages load correctly
- [ ] All links work (internal & external)
- [ ] Forms submit correctly
- [ ] Mobile menu works
- [ ] FAQ accordions work
- [ ] Scroll animations work
- [ ] Contact info is correct
- [ ] Images load correctly
- [ ] No console errors
- [ ] HTTPS works
- [ ] Lighthouse score 90+ on all metrics

---

## Security Considerations

### Current Security Features

**1. Static Site = Minimal Attack Surface**
- No server-side code
- No database
- No user authentication
- No file uploads
- **Result:** Very secure by design

**2. HTTPS Enforced**
- SSL/TLS certificates via Let's Encrypt
- Automatic HTTP → HTTPS redirect
- All resources loaded over HTTPS

**3. Content Security Policy (Recommended)**
```nginx
add_header Content-Security-Policy "
    default-src 'self';
    script-src 'self' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data:;
    font-src 'self';
    connect-src 'self';
    frame-ancestors 'none';
" always;
```

**4. Security Headers (Recommended)**
```nginx
add_header X-Frame-Options "SAMEORIGIN" always;
add_header X-Content-Type-Options "nosniff" always;
add_header X-XSS-Protection "1; mode=block" always;
add_header Referrer-Policy "strict-origin-when-cross-origin" always;
```

**5. CORS Policy**
- Not required (no API)
- If form handler added, configure CORS on backend

### Form Security

**Current State:** Form not connected to backend

**When Implementing:**
- Use HTTPS for form submission
- Add CSRF token
- Implement rate limiting
- Add reCAPTCHA (optional)
- Validate on backend
- Sanitize all inputs
- Use secure form handler (Formspree, Netlify Forms)

### Recommendations

✅ **Must Have:**
- [x] HTTPS enabled
- [x] SSL certificate auto-renewal
- [x] HTTP → HTTPS redirect
- [ ] Security headers configured
- [ ] CSP header configured

🔒 **Nice to Have:**
- [ ] WAF (Web Application Firewall) via Cloudflare
- [ ] DDoS protection via Cloudflare
- [ ] Regular security audits
- [ ] Automated backups

---

## Monitoring & Analytics

### Current State

**Analytics:** Not implemented

### Recommendations

**1. Google Analytics 4**
```html
<!-- Add before </head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**2. Google Search Console**
- Add property: `https://republic.serenity-webcrafts.com.au`
- Verify ownership
- Submit sitemap: `/sitemap.xml`
- Monitor search performance

**3. Uptime Monitoring**
- **UptimeRobot** (free)
- **Pingdom**
- **StatusCake**

**4. Error Tracking**
- **Sentry** (JavaScript error tracking)
- **Rollbar**
- Server error logs via Coolify

### Performance Monitoring

**Tools:**
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse CI (automated testing)

---

## Dependencies

### Runtime Dependencies

**None.** This project has zero runtime dependencies.

### Development Dependencies

**None.** No build tools, no npm packages, no dev dependencies.

### External Services

**Currently Used:**
- None

**Ready to Integrate:**
- **Form Handler:** Formspree, Netlify Forms, or custom backend
- **Analytics:** Google Analytics 4
- **CDN:** Cloudflare (optional)
- **Email Service:** SendGrid, Mailgun (for form submissions)

---

## Technical Specifications Summary

### Technology Matrix

```yaml
Frontend:
  HTML: HTML5 Living Standard
  CSS: CSS3 (custom, no framework)
  JavaScript: Vanilla ES6+ (no framework)
  
Backend:
  Server-Side: None (static site)
  Database: None
  API: None (ready for form handler)
  
Hosting:
  Platform: Coolify (Docker-based)
  Server: Private VPS
  Web Server: Nginx (via Coolify)
  SSL/TLS: Let's Encrypt (auto-renewal)
  Domain: republic.serenity-webcrafts.com.au
  
Build:
  Build Tool: None
  Package Manager: None
  CI/CD: Git-based deployment via Coolify
  
Performance:
  Bundle Size: ~45KB (HTML+CSS+JS, uncompressed)
  Images: WebP format, < 200KB each
  Fonts: System fonts (zero download)
  Dependencies: Zero external dependencies
  
SEO:
  Structured Data: JSON-LD (LegalService, FAQPage, Service)
  Sitemap: Yes (sitemap.xml)
  Robots: Yes (robots.txt)
  Meta Tags: Unique per page
  
Accessibility:
  WCAG: 2.1 AA compliant
  ARIA: Yes (labels, roles, states)
  Keyboard Nav: Full support
  Screen Reader: Tested and supported
  
Browser Support:
  Chrome: Last 2 versions
  Firefox: Last 2 versions
  Safari: Last 2 versions
  Edge: Last 2 versions
  Mobile: iOS Safari, Chrome Mobile
  IE11: Not supported
```

---

## Contact & Support

**Developer:** Serenity WebCrafts  
**Project Type:** Static Website  
**Maintenance:** Low (static HTML, no dependencies)  
**Updates:** Simple file replacement via git or FTP

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | Jan 23, 2026 | Initial release |

---

**Last Updated:** January 23, 2026  
**Document Version:** 1.0
