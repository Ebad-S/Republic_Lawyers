
# Republic Lawyers — Website Build Plan

---

## 1. Design Style & Direction

- **Modern-but-trustworthy**  
  Strong typographic hierarchy, ample white space, restrained blue/navy accent colors to convey authority.
- **Professional portrait focus**  
  Full-bleed, high-quality professional photo of Javid (or principal lawyers) in the hero section, with a short value-led headline and clear CTA.
- **Minimal legal**  
  De-cluttered UI: card-based service sections with iconography, 2–3-column responsive grid for key practice areas.
- **Accessible & readable**  
  18px body text minimum on mobile, 1.4 line-height, high contrast, keyboard focus states, ARIA labels for forms.
- **Conversion-first hero**  
  Hero contains single-line promise, visible phone CTA, and a “Free Case Review” microform (1–2 fields).
- **Micro-interactions**  
  Animations on card hover, subtle fade-in on scroll for content blocks, animated CTA pulse for urgent contact.
- **Trust strip**  
  Thin, always-visible sticky bar with phone number, emergency hours, and “No Win No Fee”/other offers.
- **Clean legal branding**  
  Logo lockup, sans-serif headline and (optionally) serif accent for quotes/testimonials.
- **Mobile-first layout**  
  Stacked content, hamburger menu with quick-call button, collapsible FAQs.

---

## 2. Stack & Hosting Approach

- **Stack Choice**  
  Use static HTML/CSS/JS for fastest, cheapest hosting (Netlify, Vercel, any static host), best performance.
- **Modular Build**  
  Construct modular components (header, hero, services, about, contact) as HTML includes/partials or light templates; support AI-code-generation per-component.
- **Minimal dependencies**  
  Vanilla JS + small animation library (AOS) or pure CSS + IntersectionObserver for animations. No build step required (optionally: rollup/parcel for asset pipeline).

---

## 3. Component Animation Suggestions

- **Hero text entrance:**  
  Fade-in and slight upward movement via CSS `@keyframes` or IntersectionObserver class toggle.
- **Service card hover:**  
  `transform: translateY(-6px)` & box-shadow transition.
- **CTA pulse:**  
  CSS scale & box-shadow pulse on `:focus` or every 6s (with `prefers-reduced-motion` check).
- **On-scroll reveal:**  
  IntersectionObserver adds `.is-visible` class to trigger opacity & translateY effect.
- **Form success:**  
  Animated checkmark SVG (stroke-draw) after successful submission.

---

## 4. Example Code

### CSS (Service Card Hover)

```css
.service-card {
  transition: transform .28s cubic-bezier(.2,.9,.3,1), box-shadow .28s;
  will-change: transform;
}
.service-card:hover,
.service-card:focus-within {
  transform: translateY(-6px);
  box-shadow: 0 14px 30px rgba(20,30,60,.08);
}
```

### JavaScript (On-Scroll Reveal)

```js
const io = new IntersectionObserver((entries)=> {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('is-visible');
  });
}, {threshold:0.12});
document.querySelectorAll('.reveal').forEach(el => io.observe(el));
```

---

## 5. Example JSON Page Layout

<details>
<summary>JSON Structure (collapsed - click to expand)</summary>

```json
{
  "site": {
    "title": "Javid Ahmadi — Republic Lawyers",
    "domain": "republiclawyers.com.au",
    "defaultMeta": {
      "description": "Experienced Sydney lawyers offering Family Law, Criminal Law, Wills & Estates, Business Law and Dispute Resolution. Free case review. Call (02) 8626 5171.",
      "keywords": ["Family lawyer Sydney","Criminal lawyer Sydney","Wills and estates Parramatta","Business lawyer Sutherland"]
    }
  },
  "routes": [
    {
      "path": "/",
      "template": "home",
      "meta": {
        "title": "Experienced Sydney Lawyers | Free Case Review",
        "description": "Trusted legal advice across Family Law, Criminal Law, Wills & Estates, Business Law and Commercial Contracts. No-cost case review."
      },
      "sections": [
        {
          "type": "hero",
          "props": {
            "eyebrow": "Do Not Settle For Less",
            "headline": "Practical legal solutions:\nclear, direct, effective.",
            "subheadline": "Experienced Sydney lawyers offering personalised representation across Family Law, Criminal Law, Wills & Estates and Business Law.",
            "primaryCta": {"text":"Request Free Case Review","href":"/contact#free-review"},
            "secondaryCta": {"text":"Call Now","href":"tel:+61286265171"},
            "heroImage": "/assets/javid-portrait.webp"
          }
        },
        {
          "type": "trusted-strip",
          "props": {
            "items": [
              {"icon":"phone","text":"(02) 8626 5171 — urgent: 0424 623 052"},
              {"icon":"location","text":"Sydney CBD • Parramatta • Sutherland"},
              {"icon":"tick","text":"No Win, No Fee options (where applicable)"}
            ]
          }
        },
        {
          "type": "services-grid",
          "props": {
            "heading":"Featured Services",
            "intro":"Practical, outcome-focused representation.",
            "cards": [
              {"title":"Family Law","short":"Separation, parenting & property settlements. Clear advice, calm guidance.","href":"/services/family-law"},
              {"title":"Criminal Law","short":"Bail, charges, representation in court. Tough, strategic defence.","href":"/services/criminal-law"},
              {"title":"Wills & Estates","short":"Wills, probate and estate planning — protect your family.","href":"/services/wills-estates"},
              {"title":"Business Law","short":"Contracts, disputes, commercial advice for SMEs.","href":"/services/business-law"},
              {"title":"Commercial Contracts","short":"Drafting & negotiation to reduce business risk.","href":"/services/commercial-contracts"},
              {"title":"Dispute Resolution","short":"Mediation and negotiation to avoid costly litigation.","href":"/services/dispute-resolution"}
            ]
          }
        },
        {
          "type": "how-we-help",
          "props": {
            "heading":"How we work",
            "steps":[
              {"title":"Book a free review","desc":"Tell us the facts — 10 minute intake, no obligation."},
              {"title":"Clear plan","desc":"We outline options, risks and likely outcomes."},
              {"title":"Take action","desc":"We represent you confidently in negotiations or court."}
            ]
          }
        },
        {
          "type":"testimonials",
          "props":{
            "heading":"Client outcomes",
            "items":[
              {"quote":"Javid guided us through a difficult separation with clarity and care.","name":"Client, Sydney"}
            ]
          }
        },
        {
          "type":"contact-cta",
          "props":{
            "heading":"Request a Free Case Review",
            "sub":"No cost, no obligation. We’ll respond within one business day.",
            "formFields":[{"name":"name"},{"name":"phone"},{"name":"email"},{"name":"brief"}],
            "privacyNote":"We treat your information as confidential."
          }
        }
      ]
    },
    {
      "path": "/contact",
      "template": "contact",
      "meta": {"title":"Contact — Republic Lawyers","description":"Contact Republic Lawyers. Offices: Sydney CBD, Parramatta, Sutherland. Phone (02) 8626 5171."},
      "sections":[
        {"type":"contact-info","props":{"offices":[{"name":"Sydney CBD","address":"Suite 1307, 109 Pitt St, Sydney NSW 2000"},{"name":"Parramatta","address":"57 Macquarie St, Parramatta NSW 2150 (mail)"}],"phone":"(02) 8626 5171","email":"info@republiclawyers.com.au"}},
        {"type":"map","props":{"embed":true}},
        {"type":"contact-form","props":{"fields":["name","email","phone","practiceArea","message"], "submitText":"Request Free Review"}}
      ]
    },
    {
      "path": "/services/family-law",
      "template":"practice",
      "meta":{"title":"Family Lawyer Sydney — Separation & Parenting","description":"Practical family law advice: separation, parenting arrangements, property settlement. Free case review."},
      "sections":[
        {"type":"practice-intro","props":{"heading":"Family Law","lead":"We protect your rights and your family during separation and parenting disputes."}},
        {"type":"answers","props":{"qnas":[
          {"q":"How long do property settlements take?","a":"Timing depends on complexity; many matters settle within 3–12 months; contested matters can take longer."},
          {"q":"Can I modify child support?","a":"Yes — we can advise based on family court principles and current guidelines."}
        ]}}
      ]
    }
  ],
  "siteSchema": {
    "legalName":"Republic Lawyers Pty Ltd",
    "founder":"Javid Ahmadi",
    "telephone":"+61286265171",
    "sameAs":["https://www.linkedin.com/","https://www.facebook.com/","https://www.instagram.com/republic.lawyers/"],
    "address":"Suite 1307, 109 Pitt St, Sydney NSW 2000",
    "yearEstablished":"2022"
  },
  "seo": {
    "generateSitemap": true,
    "addFAQSchema": true,
    "addLocalBusinessSchema": true,
    "openGraphDefaults": {
      "og:title":"Republic Lawyers — Practically focused legal advice",
      "og:image":"/assets/og-default.jpg"
    }
  },
  "llmo": {
    "snippets": {
      "bioShort":"Javid Ahmadi — Principal lawyer. Practical, direct legal advice across family, criminal and commercial law.",
      "faqSeed":["What to bring to a free review? — Brief timeline, ID, and key documents (e.g., court orders, contracts).","How much will it cost? — We provide an upfront estimate after the initial review."]
    },
    "contentHints":[
      "Provide 15–40 word answers for FAQs.",
      "Provide 40–120 word service summaries for LLM consumption.",
      "Tag each content block with intent: {informational, transactional, navigational}"
    ]
  }
}
```
</details>

## For AI Coder Agents

1. **File Structure**:  
   - Use a file-per-route setup: for example, `index.html`, `services/family-law.html`.
   - Place reusable parts in a `components/` folder (e.g., `header.html`, `footer.html`, `service-card.html`).

2. **Build Output**:  
   - Generate plain static HTML and CSS.
   - Include a small `main.js` for animations (total bundle <200KB gzipped).

3. **SEO & Schema**:  
   - Embed JSON-LD for LocalBusiness and FAQ.
   - Generate `sitemap.xml` and `robots.txt`.

4. **Content Seeds**:  
   - Create `content/seeds.json` with the values from `llmo.snippets` so LLM-based copy tools can produce alternate phrasings.

5. **Layout Implementation**:  
   - Implement a responsive header, hero section, and a grid for service cards.

6. **Schema.org Data**:  
   - Add `<script type="application/ld+json">` with LocalBusiness, LegalService, and FAQ schema objects.

7. **UI Animation**:  
   - Include JS for on-scroll reveal and CSS for the card-hover effect.
   - Use `prefers-reduced-motion` to respect accessibility preferences.

8. **Performance**:  
   - Audit with Lighthouse.
   - Optimize images, inline critical CSS, and defer non-essential JS.

9. **LLMO Content Seeds**:  
   - Ensure `/content/seeds.json` contains the LLMO snippets for future AI-driven content generation.
