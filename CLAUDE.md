# [PROJECT_NAME] — [PROJECT_DESCRIPTION]

## Tech Stack
- Next.js 15 (App Router, TypeScript)
- Tailwind CSS v4 (config in globals.css under @theme — NO tailwind.config.ts)
- lucide-react (icons)
- pnpm package manager
- Deploy: Cloudflare Pages

## Commands
- Dev: pnpm dev
- Build: pnpm build

## SEO (EVERY tool page needs ALL of these — components already exist in template)
- metadata export: title 50-60 chars, description 150-160 chars, canonical, OG, Twitter
- JSON-LD: WebApplication + FAQPage + BreadcrumbList (use existing components)
- Single H1 with primary keyword
- Semantic HTML: main, section, article, nav, header, footer
- Educational content below tool: 300+ words
- Internal links to related tools
- Breadcrumb navigation
- Image alt texts on everything
- All content in English

## Design (Apple/Linear aesthetic — follow strictly)
- Black pure background (#000000), NO dark grays
- Geist Sans body, Geist Mono for data/results
- Headings: huge (clamp 40-72px), weight 800, letter-spacing -0.04em
- Heading color: gradient from #f5f5f7 to #86868b (CSS background-clip text)
- Body text: #86868b, 15-17px, line-height 1.5
- Sections: 120px padding vertical (80px mobile)
- Cards: rgba(255,255,255,0.02) bg, 1px border rgba(255,255,255,0.08), radius 20px
- Card hover: bg 0.04, border 0.12, translateY(-2px), transition 400ms cubic-bezier(0.16,1,0.3,1)
- Buttons: solid bg (#2563eb primary, #fafafa secondary), radius 14px, height 52px
- Button hover: scale(1.03), transition 400ms
- Inputs: height 52px, bg rgba(255,255,255,0.06), border rgba(255,255,255,0.1), radius 14px, font-size 16px min
- Input focus: border-color rgba(37,99,235,0.5), box-shadow 0 0 0 3px rgba(37,99,235,0.1)
- Navbar: fixed, height 56px, bg rgba(0,0,0,0.72), backdrop-blur 20px, saturate 180%
- Icons: lucide-react, strokeWidth 1.5 (thinner = Apple feel)
- Animations: fade-in on scroll using IntersectionObserver, 800ms cubic-bezier(0.16,1,0.3,1)
- Subtle radial glow behind hero sections
- Labels: 12-13px, uppercase, letter-spacing 0.06em, color #86868b
- NO shadows on dark mode. Only border + subtle bg changes
- NO gradients on backgrounds. Only on text (heading gradient)
- NO emojis as icons. Always lucide-react
- Copy buttons: ghost style, icon swaps to Check with green for 1.5s
- Mobile-first, touch targets 44px min
- Ad containers: fixed min-height (90px leaderboard, 250px rectangle), NO ads above fold

## Light Mode (toggle already exists)
- Background: #fafafa (NOT pure white #fff — too harsh)
- Cards: #ffffff bg, border rgba(0,0,0,0.06), radius 20px
- Card hover: border rgba(0,0,0,0.12), shadow 0 2px 12px rgba(0,0,0,0.04)
- Headings: #09090b solid color (NO gradient in light mode)
- Body text: #52525b
- Labels/muted: #a1a1aa
- Navbar: bg rgba(250,250,250,0.72), backdrop-blur 20px, border-bottom rgba(0,0,0,0.06)
- Inputs: bg #ffffff, border rgba(0,0,0,0.1)
- Buttons primary: bg #09090b, text #fafafa
- Icons: color #09090b, strokeWidth 1.5
- Links: #2563eb
- Badges success: bg rgba(22,163,74,0.08), text #16a34a
- Transition between themes: 300ms ease on background, color, border-color, box-shadow

## Performance
- Lighthouse > 90 all categories
- LCP < 2.5s, INP < 200ms, CLS < 0.1
- JS < 100KB first load per route
- Use next/font, next/image, dynamic imports

## Rules
- Server Components default. "use client" only for interactive parts
- No any types
- No console.log
- No code outside src/
- No tailwind.config.ts (v4 uses CSS)
