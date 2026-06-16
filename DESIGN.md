# Design Brief

## Direction

Ananya Capitals — Professional white background with deep blue accents for a trustworthy, modern loans consultant brand.

## Tone

Refined minimalism with professional confidence — clean, trustworthy, financial-services-appropriate without corporate coldness.

## Differentiation

Elevated card surfaces with soft shadows on white background, paired with strategic blue CTAs that guide user attention to loan applications and meeting requests.

## Color Palette

| Token      | OKLCH        | Role                                |
|------------|--------------|-------------------------------------|
| background | 0.99 0.002 240 | Off-white primary surface          |
| foreground | 0.15 0.01 240 | Deep blue-grey text                |
| card       | 1.0 0 0      | Pure white elevated surfaces       |
| primary    | 0.45 0.18 240 | Professional ocean blue CTAs       |
| secondary  | 0.6 0.14 210 | Lighter blue for secondary actions |
| accent     | 0.65 0.16 200 | Cool teal for highlights           |
| muted      | 0.92 0.01 240 | Light backgrounds for sections     |

## Typography

- Display: Space Grotesk — hero headings, product names, value propositions
- Body: General Sans — UI labels, paragraphs, form text
- Mono: JetBrains Mono — calculations, EMI displays, technical data
- Scale: h1 `text-5xl md:text-7xl font-bold tracking-tight`, h2 `text-3xl font-bold`, labels `text-sm font-semibold`

## Elevation & Depth

Hierarchy through surface elevation: white cards (`card-hover`) float above the background with soft drop shadows; borders and spacing reinforce zones without visual darkness.

## Structural Zones

| Zone    | Background        | Border           | Notes                          |
|---------|-------------------|------------------|-----------|
| Header  | bg-card with shadow | border-b border-border | Logo, navigation, CTA         |
| Content | bg-background     | —                | Main content area with cards  |
| Footer  | bg-muted/30       | border-t border-border | Links, copyright, contact     |
| Cards   | bg-card           | subtle shadow    | Loan products, forms, sections |

## Spacing & Rhythm

Spacious layout with clear section gaps (3rem—4rem), cards use 1.5rem internal padding, micro-interactions use smooth transitions (0.3s).

## Component Patterns

- Buttons: Blue primary (`bg-primary text-white rounded-md`), white secondary with border (`border-border`), subtle hover lift via `shadow-card-hover`
- Cards: Rounded corners (8px), white surface, soft shadow, 1.5rem padding
- Badges: Blue text on light blue background, rounded-full for pill shape
- Inputs: Bordered (`border-input`), light grey focus state, blue ring on focus

## Motion

- Entrance: Subtle fade + slide-in-up (0.3s) on page load
- Hover: Card shadow lift + border color shift to primary (0.2s)
- Decorative: Floating animation on hero illustrations if present

## Constraints

- No dark mode override — light mode is primary
- Professional blue dominates CTAs; secondary actions use lighter blue
- Minimum 0.7 lightness difference between foreground and background for WCAG AA+
- Card surfaces always pure white (#FFFFFF / `1.0 0 0`) for clarity

## Signature Detail

When loan product cards transition from rest to hover state, the shadow deepens and primary-blue accent appears — a subtle visual affordance that signals interactivity while maintaining professional restraint.
