# Peter Liu — Personal Brand Site
### Design package: wireframe · style guide · page layouts · copy · component structure

---

## 1. Homepage wireframe

```
┌───────────────────────────────────────────────────────────────┐
│  Peter Liu · BUSINESS LEADER      Home  Journey  Impact …  [EN|中] │  ← sticky header
├───────────────────────────────────────────────────────────────┤
│                                                                 │
│  HERO (2-col, generous whitespace)                              │
│  ┌──────────────────────────┐   ┌─────────────────────────┐    │
│  │ PETER LIU · Tech Mfg ...  │   │  abstract line-art SVG  │    │
│  │ Building Technology       │   │  (moss circles, brass   │    │
│  │ Businesses That Scale.    │   │   growth path, nodes)   │    │
│  │ claim (EN) + claim (中)    │   │   ┌──────────┐          │    │
│  │ Strategy·Global·Finance…  │   │   │ photo PH │ ← small  │    │
│  │ [View Journey] [LinkedIn] │   │   └──────────┘          │    │
│  └──────────────────────────┘   └─────────────────────────┘    │
│                                                                 │
├───────────────── CORE POSITIONING (alt bg) ───────────────────┤
│  [ 01 Growth ]   [ 02 Transformation ]   [ 03 Governance ]      │  ← 3 cards
├───────────────── HOW I BUILD SCALE ───────────────────────────┤
│  [Strategy] [Customers] [Capital] [People]                      │  ← 4 pillars (2x2 on mobile)
├───────────────── SELECTED IMPACT (forest bg) ─────────────────┤
│  Silicon Valley | Two rounds | 37%→18% | Asia·NA | AI at top    │  ← stat list, no résumé
├───────────────── EXECUTIVE JOURNAL (alt bg) ──────────────────┤
│  [AI for C-Level] [Tech Mfg Insights] [Corporate Finance]       │  ← 3 article cards
├───────────────── CONNECT ─────────────────────────────────────┤
│            centered note + [Contact] [LinkedIn]                 │
├───────────────────────────────────────────────────────────────┤
│  FOOTER (forest): brand · nav · © 2026                          │
└───────────────────────────────────────────────────────────────┘
```

Design intent for the first screen: low-key confidence. Large left-aligned headline, small role label in brass, abstract visual on the right (not a star-style portrait). The photo is a *small* placeholder card overlapping the visual — understated, professional. The eye should read "a leader who can carry P&L responsibility," not "a startup" or "a CV."

---

## 2. Visual style guide

**Palette**

| Role | Token | Hex |
|---|---|---|
| Background (warm ivory) | `--ivory` | `#FDFBF5` |
| Alt surface | `--ivory-2` | `#F7F4EB` |
| Primary text (charcoal) | `--charcoal` | `#2B2B2B` |
| Muted text | `--charcoal-60` | `#6C6A64` |
| Primary brand (moss) | `--moss` | `#556B5D` |
| Deep accent (forest) | `--forest` | `#25382F` |
| Emphasis (brass gold) | `--brass` | `#B38B59` |
| Hairline divider | `--line` | `#E5E0D6` |

Usage: ivory dominates; moss for primary buttons and the brand; forest reserved for the two "anchor" dark sections (Selected Impact, footer) to create gravity; brass used sparingly for eyebrows, rules, and active states only. No bright tech-blue, no gradients beyond a faint ivory wash.

**Typography**
- English: Calibri / Carlito → falls back to clean system sans-serif.
- Chinese: Noto Sans TC (loaded from Google Fonts), with PingFang TC / JhengHei fallback.
- Scale: H1 `clamp(2.4–4rem)`, H2 `clamp(1.7–2.5rem)`, body 17px / line-height 1.7.
- Weights kept to 400 / 500 / 600 — confident but never heavy. Generous letter-spacing on uppercase eyebrows (`.18–.22em`).

**Spacing & shape**
- Section vertical rhythm `clamp(4.5–8rem)`; container max 1140px.
- Radius 4px (quiet, premium), 1px hairline borders, shadows only on hover and very soft.
- Whitespace is the primary design element — text columns capped at ~62ch.

**Motion**
- One subtle behavior only: fade-and-rise reveal on scroll, plus 1–3px hover lifts. Respects `prefers-reduced-motion`. No 3D, no parallax, no flashy animation.

---

## 3. Page layouts

**Home** — six stacked sections as wireframed above; alternating ivory / alt / forest surfaces for rhythm.

**Leadership Journey** — *not* a timeline. A horizontal capability arrow (Global Business → Strategy → Finance → AI Transformation → Business Leadership), then five evolution rows. Each row = stage label (left) + three blocks (right): *What I learned · What I built · How it shaped my leadership*.

**Impact** — four areas, each a section with two case cards: *Global Expansion · Business Transformation · Financial Strategy · Governance & Public Company*. Every card = *Challenge · Action · Business Impact*. Financial strategy is framed as business capability, not a CFO job hunt.

**Insights** — three category blocks (*AI for C-Level Leaders · Technology Manufacturing · Corporate Finance Strategy*), each with three article cards: *Category · Title · Summary · Reading time*. Reads like an executive journal, not a blog feed.

**Projects** — 2×2 grid of framework cards: *AI Productivity System · Global Expansion Framework · Corporate Finance Strategy Framework · ESG / Governance Program*. Each lists three components. No confidential company detail.

**Connect** — two columns: contact form (left) + LinkedIn / email / short professional note (right). Clean, restrained, executive.

All pages share the sticky header, language toggle, and forest footer. Mobile collapses grids to one column, header nav to a slide-down menu, and keeps comfortable card spacing.

---

## 4. Homepage copy (EN / 中)

**Hero**
- Role: Technology Manufacturing Business Leader · 科技製造業經營領導者
- Headline: *Building Technology Businesses That Scale.* / 打造能持續規模化成長的科技事業。
- Claim: *Connecting strategy, technology, customers, finance, and people to build sustainable growth.* / 整合策略、技術、客戶、財務與團隊，打造能持續規模化成長的企業。
- Sub: Strategy · Global Business · Finance · AI · People / 策略 · 國際業務 · 財務 · AI · 人才
- CTAs: View Leadership Journey · Connect on LinkedIn

**Core Positioning** — Growth / Transformation / Governance (copy as on page).
**How I Build Scale** — Strategy: turning direction into execution · Customers: connecting market needs with technology · Capital: using finance to support sustainable growth · People: building trusted teams with delegation and ownership.
**Selected Impact** — Silicon Valley team built · two financing rounds · effective tax rate 37%→18% · expansion across Asia & North America · AI adoption for executive productivity.
**Connect** — *For executive opportunities, business collaboration, or professional exchange, please connect through LinkedIn or the contact form.*

Full bilingual strings live in the HTML (`<span class="en">` / `<span class="zh">`), so copy edits happen in one place.

---

## 5. Component structure (implementable)

```
SiteHeader        — brand, NavLinks, LangToggle, mobile NavToggle
  NavLink[]       — active-state underline in brass
  LangToggle      — EN/中, persists choice to localStorage
Hero
  HeroCopy        — role, H1, claim(EN), claim(中), sub, CTA group
  HeroVisual      — abstract SVG line-art + PhotoPlaceholder
Section           — variants: default | --alt | --forest
  SectionHead     — Eyebrow + H2 + optional lead
PositioningCard   — num, title, body            (Home §2)
Pillar            — title, brass rule, body      (Home §3)
StatItem          — big value, label             (Impact §4 / Home)
ArticleCard       — category, title, summary, reading time
EvoStep           — stage label + 3 blocks       (Journey)
CaseCard          — title + Challenge/Action/Impact   (Impact)
ProjectCard       — tag, title, body, bullet list (Projects)
ContactForm + ContactList                          (Connect)
SiteFooter        — brand, FooterLinks, copyright
Button            — --primary | --ghost | --light
```

**Bilingual mechanism:** `<html data-lang="en|zh">` + CSS rules `:root[data-lang="en"] .zh { display:none }` and vice-versa. `site.js` flips the attribute and stores the preference. To translate the site to a real framework (React/Next, Astro, etc.), each component above maps 1:1 and the `.en`/`.zh` spans become an `i18n` lookup.

**Files**
```
index.html  leadership-journey.html  impact.html
insights.html  projects.html  connect.html
assets/styles.css   assets/site.js
```

To go live: drop the folder on any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages), swap the LinkedIn URL, replace the hero photo placeholder, and wire the contact form to an email service (Formspree, Basin) or your own endpoint.
