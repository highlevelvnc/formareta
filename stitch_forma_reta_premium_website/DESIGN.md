---
name: Forma Reta Design System
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1b1b1b'
  on-surface-variant: '#4d453c'
  inverse-surface: '#303030'
  inverse-on-surface: '#f1f1f1'
  outline: '#7f756b'
  outline-variant: '#d1c4b9'
  surface-tint: '#715b3e'
  primary: '#715b3e'
  on-primary: '#ffffff'
  primary-container: '#8b7355'
  on-primary-container: '#0a0400'
  inverse-primary: '#dfc29f'
  secondary: '#735a3c'
  on-secondary: '#ffffff'
  secondary-container: '#ffddb7'
  on-secondary-container: '#796042'
  tertiary: '#a53b1b'
  on-tertiary: '#ffffff'
  tertiary-container: '#c65331'
  on-tertiary-container: '#120100'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fcdeba'
  primary-fixed-dim: '#dfc29f'
  on-primary-fixed: '#281903'
  on-primary-fixed-variant: '#574329'
  secondary-fixed: '#ffddb7'
  secondary-fixed-dim: '#e2c19d'
  on-secondary-fixed: '#291802'
  on-secondary-fixed-variant: '#594327'
  tertiary-fixed: '#ffdbd1'
  tertiary-fixed-dim: '#ffb5a0'
  on-tertiary-fixed: '#3b0900'
  on-tertiary-fixed-variant: '#852404'
  background: '#f9f9f9'
  on-background: '#1b1b1b'
  surface-variant: '#e2e2e2'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '300'
    lineHeight: '1.1'
    letterSpacing: 0.08em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
spacing:
  base: 8px
  section-gap: 128px
  container-max: 1440px
  gutter: 32px
  margin-page: 64px
---

## Brand & Style

The design system is anchored in the concept of architectural precision and high-end craftsmanship. It utilizes a **Minimalist Corporate** aesthetic that prioritizes clarity, structural integrity, and premium quality. The visual language is inspired by technical blueprints and modern gallery layouts, creating an institutional atmosphere that feels both established and innovative.

The system focuses on "Forma Reta" (straight form), leaning heavily into geometric stability, generous whitespace, and a monochromatic foundation punctuated by warm, earth-toned metallic accents. This approach evokes an emotional response of trust, sophistication, and meticulous attention to detail, tailored specifically for the luxury construction and renovation sector.

## Colors

The palette is rooted in an institutional "Gallery White" foundation. It uses high-contrast charcoal and blacks for technical readability, while the chromatic strategy relies on muted ochre and gold tones to signal heritage and quality.

*   **Primary (#8B7355):** A muted, deep ochre used for brand signifiers, key interactive elements, and structural accents.
*   **Secondary (#AA8D6C):** A lighter metallic tone for hover states and subtle differentiations.
*   **Tertiary (#C3512F):** A terracotta accent used sparingly for functional highlights or specific technical callouts.
*   **Neutral (#000000):** Pure black is reserved for high-level headings and heavy structural borders to maintain a "blueprint" feel.
*   **Backgrounds:** Primarily pure white (#FFFFFF) with ultra-light gray (#F8F8F8) used for section staggering.

## Typography

This design system utilizes **Inter** for its utilitarian precision and neutral character, allowing architectural photography to remain the focal point. 

The typographic hierarchy is defined by high-contrast scale and generous letter spacing (tracking) in headings to create an "institutional" feel. Large headlines are set in light weights and uppercase to mimic architectural signage. Body text is optimized for technical readability with slightly increased line heights to ensure a spacious, premium reading experience.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy, centering content within a 1440px container to maintain an editorial, controlled appearance on larger displays. 

A 12-column system is used with wide 32px gutters to prevent visual clutter. Vertical spacing is intentional and dramatic; "Section Gaps" are intentionally large (128px+) to force the user to focus on one architectural project or service at a time. Elements should be aligned to a strict 8px baseline grid to reinforce the "Forma Reta" (straight form) concept.

## Elevation & Depth

To maintain a technical and flat aesthetic, depth is primarily conveyed through **low-contrast outlines** and **tonal layering** rather than traditional shadows.

*   **Ghost Borders:** Use 1px solid lines in light gray (#E0E0E0) or the primary ochre to define containers.
*   **Layering:** High-quality imagery should appear to sit on the same plane as the background. 
*   **Shadows:** When necessary for functional clarity (e.g., dropdowns), use "Ambient Shadows"—extremely diffused, low-opacity (4-6%) black shadows with 0 offset to simulate a subtle lift without breaking the flat architectural style.

## Shapes

The shape language is strictly **Sharp (0px)**. This design system rejects rounded corners to align with the name "Forma Reta" and the rigid precision of construction engineering. Every button, image container, and input field must feature crisp 90-degree angles. This creates a structural, uncompromising visual rhythm that mirrors architectural beams and blocks.

## Components

### Buttons
Buttons are geometric and high-contrast. The Primary button is a solid black or primary ochre rectangle with white uppercase text. The Secondary button is a "Ghost" style: a 1px border with no fill, transitioning to a solid fill on hover.

### Input Fields
Inputs follow a technical aesthetic. Use a simple bottom border (1px) or a full thin-lined box. Labels are always small, uppercase, and placed above the field with high letter spacing.

### Cards
Cards do not use shadows. They are defined by thin 1px borders or simple background color shifts. Imagery within cards must be full-bleed to the top and sides, maintaining the sharp-edge philosophy.

### Imagery
Architectural imagery is a core component. Photos should be framed with generous white margins or span the full width of the viewport to act as structural breaks. 

### Hover States
Interactions should be "elegant and quiet." Instead of dramatic shifts, use subtle color transitions or 1px shifts in border weight. For image-based cards, a slight zoom-in effect (scale 1.05) within the sharp container is preferred.