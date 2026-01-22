# Assets Folder

This folder should contain all images and media files for the website.

## Required Images

### 1. Logo Image
- **Filename**: `logo.png`
- **Dimensions**: 360x120px to 600x200px (or similar aspect ratio, will scale to 120px height on desktop, 90px on mobile)
- **Format**: PNG (with transparent background recommended) or SVG
- **Description**: Republic Lawyers logo
- **Usage**: Header/navigation bar on all pages

### 2. Hero Portrait Image
- **Filename**: `javid-portrait.webp`
- **Dimensions**: 600x500px (or larger, will scale responsively)
- **Format**: WebP (or JPG/PNG - convert to WebP for best performance)
- **Description**: Professional portrait photo of Javid Ahmadi or principal lawyer
- **Usage**: Homepage hero section

### 3. Open Graph Image
- **Filename**: `og-default.jpg`
- **Dimensions**: 1200x630px (Facebook/Twitter recommended size)
- **Format**: JPG or PNG
- **Description**: Default social media share image (can be logo or branded image)
- **Usage**: Social media previews when website is shared

### 4. Favicon
- **Filename**: `favicon.ico`
- **Dimensions**: 32x32px (or multi-size ICO file)
- **Format**: ICO
- **Description**: Small icon that appears in browser tabs
- **Usage**: Browser tab icon

## Optional Images

- Additional lawyer photos for team pages
- Office photos for about/contact pages
- Service-specific imagery
- Client testimonial photos (with permission)
- Logo variations (light/dark)

## Image Optimization Tips

1. **Compress images** before uploading:
   - Use tools like TinyPNG, ImageOptim, or Squoosh
   - Target < 200KB for hero images
   - Target < 100KB for other images

2. **Use modern formats**:
   - WebP for photos (better compression)
   - SVG for logos and icons (scalable)
   - PNG for images requiring transparency

3. **Responsive images**:
   - Provide multiple sizes for different screen sizes
   - Use `srcset` attribute in HTML if needed

4. **Alt text**:
   - Always include descriptive alt text for accessibility
   - Already implemented in HTML templates

## Current Status

⚠️ **Images Not Included**: This is a code-only build. You need to add actual images to this folder before deploying the website.

### Placeholders

The HTML currently references these images:
- `/assets/logo.png` - Used in header/navigation on all pages
- `/assets/javid-portrait.webp` - Used in homepage hero
- `/assets/og-default.jpg` - Used in meta tags for social sharing
- `/assets/favicon.ico` - Used in head section

Until you add real images, browsers will show broken image icons or 404 errors.

## Adding Images

1. Obtain high-quality source images
2. Resize and optimize as needed
3. Save to this folder with the correct filenames
4. Test the website to ensure images load correctly

---

**Pro Tip**: Create a `/assets/icons/` subfolder if you want to add custom SVG icons for services instead of using the inline SVGs in the HTML.

