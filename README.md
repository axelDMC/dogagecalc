# 🏭 Micro-SaaS Template

Template base para crear micro-SaaS tools de un nicho específico cada día.
Incluye diseño estilo Apple, SEO integrado, y deploy a Cloudflare Pages.

## Qué incluye (ya construido, no tocar)
- Layout: navbar con blur, footer 4 cols, dark/light mode toggle
- SEO: JsonLd, Breadcrumb, FaqAccordion, WebAppSchema, SeoContent (generan schema automáticamente)
- UI: ToolCard, CopyButton, Badge, EmptyState, Button, Card, ToolHero, AdSlot, ThemeToggle
- Legal: Privacy Policy, Terms of Service, About
- Config: sitemap dinámico, robots.ts, wrangler.toml, open-next

## Cómo usar
1. "Use this template" → crear nuevo repo
2. `pnpm install`
3. Editar `src/lib/constants.ts` → cambiar [PLACEHOLDERS]
4. Editar `CLAUDE.md` → agregar reglas del proyecto
5. `claude` → pegar prompt del Arquitecto
6. `git push` → Cloudflare auto-deploys

## Placeholders a reemplazar por proyecto
| Archivo | Placeholder | Qué poner |
|---------|------------|-----------|
| src/lib/constants.ts | [PROJECT_NAME] | Nombre del sitio |
| src/lib/constants.ts | https://example.com | URL real |
| src/lib/constants.ts | [PROJECT_DESCRIPTION] | Meta description |
| src/lib/constants.ts | [PROJECT_TAGLINE] | Tagline corto |
| wrangler.toml | [PROJECT_NAME] | Nombre del worker |
| src/app/page.tsx | [HEADLINE] | H1 del hero |
| src/app/page.tsx | [SUBTITLE] | Subtítulo |

## Stack
Next.js 15 · TypeScript · Tailwind CSS v4 · lucide-react · Cloudflare Pages

## Design System
Estilo Apple/Linear: fondo negro puro, tipografía grande (clamp 40-72px),
espaciado extremo (120px entre secciones), animaciones suaves (800ms cubic-bezier),
iconos lucide strokeWidth 1.5, cero shadows en dark mode.
