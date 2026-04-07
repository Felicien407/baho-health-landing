# Design System: Medical-Futurism for Baho Health Intelligence

## 1. Overview & Creative North Star

### Creative North Star: "The Clinical Oracle"
This design system is built to bridge the gap between human empathy and computational precision. It moves beyond the cluttered "dashboard" tropes of the health-tech industry, adopting a **Medical-Futurism** aesthetic that feels like a precision surgical tool wrapped in a high-end editorial magazine. 

The experience is defined by **The Clinical Oracle**—an interface that provides answers with absolute clarity, using expansive negative space and a "z-axis" depth model. We break the "template" look by eschewing standard grids in favor of intentional asymmetry and floating, glass-like modules that suggest a digital environment existing in three dimensions.

---

## 2. Colors

The palette is a high-contrast dialogue between clinical purity and deep-tech sophistication.

*   **Primary (#00e475):** "Growth Green." Used exclusively for high-intent actions and health-positive data visualizations.
*   **Surface Hierarchy (#001429 to #243a55):** A range of deep tech-blues that provide the foundation for dark mode, replacing flat blacks with a dimensional, atmospheric void.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders to section content. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a `surface-container-low` section should sit directly on a `surface` background to define its area.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Instead of a flat grid, use the nested tiers:
*   **Base:** `surface` (#001429)
*   **Layer 1:** `surface-container-low` (#021c36)
*   **Layer 2 (The Interactive Card):** `surface-container` (#06213a)
*   **Layer 3 (The Focus State):** `surface-container-high` (#132b45)

### The "Glass & Gradient" Rule
To achieve a premium feel, floating navigation and global headers must utilize **Glassmorphism**. Apply a semi-transparent `surface-variant` with a `backdrop-blur` (20px-40px). 
*   **Signature Textures:** Main CTAs should not be flat. Use a subtle linear gradient transitioning from `primary` (#00e475) to `on-primary-container` (#00b35a) at a 135-degree angle to add "visual soul."

---

## 3. Typography

The typography uses **Inter** for its neutral, architectural quality. To achieve the "editorial" feel, we lean heavily into extreme scale and generous letter-spacing.

*   **Display (Lg/Md/Sm):** Used for primary data points and "Oracle" statements. These should be tight in leading but wide in tracking (-0.02em) to feel authoritative.
*   **Headlines:** Reserved for section starts. High negative space must precede every headline to let the content "breathe."
*   **Body (Md/Lg):** Maximum readability. Body text should never be pure white; use `on-surface-variant` (#c3c6d1) to reduce eye strain against the deep blue backgrounds.
*   **Labels:** All caps with +0.05em tracking for a "technical readout" aesthetic.

---

## 4. Elevation & Depth

Hierarchy is achieved through **Tonal Layering** and the "Z-Axis" feel mentioned in the North Star.

*   **The Layering Principle:** Stacking tiers creates natural lift. Place a `surface-container-lowest` card on a `surface-container-low` section to create a soft, recessed feel without a single drop shadow.
*   **Ambient Shadows:** For floating elements (Modals/Popovers), use "Deep-Sea Shadows." These are extra-diffused: `box-shadow: 0 20px 50px rgba(0, 20, 41, 0.6)`. The shadow is a darker tint of the background, not grey.
*   **The "Ghost Border" Fallback:** If containment is functionally required for accessibility, use the `outline-variant` token at **15% opacity**. 100% opaque borders are strictly forbidden.
*   **Z-Axis Displacement:** When a user interacts with an element, it should not just "glow"—it should scale (e.g., 1.02x) and increase its `backdrop-blur`, simulating a physical move toward the user.

---

## 5. Components

### Buttons
*   **Primary:** Gradient fill (`primary` to `on-primary-container`), `xl` roundedness (1.5rem), no border.
*   **Secondary:** Glassmorphism style. `surface-bright` at 20% opacity with a heavy backdrop blur.
*   **Tertiary:** No container. `primary` text color with a `label-md` uppercase style.

### Input Fields
*   **Style:** Minimalist under-lines or subtle `surface-container-highest` background shifts.
*   **States:** On focus, the background shift should "glow" subtly with a 2px `primary` bottom border only.

### Cards & Lists
*   **Constraint:** No divider lines. Separate list items using the spacing scale (e.g., `spacing-4` / 1.4rem gap).
*   **Cards:** Use `lg` (1rem) corner radius. Content should have high internal padding (`spacing-6`) to maintain the "Editorial" feel.

### Specialized Component: The "Vitality Pulse"
A data-visualization component unique to this system. A background "wave" using a subtle gradient of `tertiary` (#44d8f1) that sits behind key health metrics, moving with a slow, organic breath animation.

---

## 6. Do's and Don'ts

### Do
*   **Do** use extreme whitespace (`spacing-16` and `spacing-20`) to separate major conceptual sections.
*   **Do** overlap elements. Let a glass container partially cover a background image or a data visualization to reinforce the Z-axis.
*   **Do** use `growth-green` sparingly. It is a "signal" color; if everything is green, nothing is important.

### Don't
*   **Don't** use 90-degree corners. Everything must feel organic and safe (Medical-Futurism); stick to `md` through `xl` roundedness.
*   **Don't** use standard "Material Design" blue. Stick to the tech-blue tokens provided to maintain the premium dark-mode depth.
*   **Don't** use dividers. If you feel the need for a line, increase your whitespace instead.