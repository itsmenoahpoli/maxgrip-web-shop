# 🏗️ MaxGrip E-Commerce Website Prompt (Ochaka-inspired layout)

You are to build a **modern, elegant, fully responsive e-commerce site** for **MaxGrip**, following **the UI and layout patterns of the Ochaka multipurpose template** (as seen in its live preview on ThemeForest).  
Overlay MaxGrip’s **brand identity** (logo, colors, and product domain) onto that structure.

---

## 🧩 Key Layout / UI Patterns from Ochaka

Adopt these design elements inspired by the Ochaka HTML template:

- Large **hero section / slider** with full-width background images and overlay text  
- Multi-level **mega menu** for navigation  
- **Featured product carousels** and sliders  
- Full-width **banner / promo** sections  
- **Grid or masonry** style product listing  
- **Sidebar filters** for the shop pages  
- **Product quick view** modal  
- **User account pages** with dashboard panels  
- **Footer** with multiple columns and newsletter form  

---

## 🎨 Brand Color & Typography (MaxGrip)

Use the official **MaxGrip color palette**:

| Role | Hex | Description |
|------|-----|--------------|
| **Primary Red** | `#B12025` | Main CTA and accent color |
| **Black / Text Dark** | `#111111` | Main text, dark overlays, navigation text |
| **Dark Gray** | `#2C2C2C` | Card background, darker panels |
| **Light Gray** | `#E5E5E5` | Page background |
| **White** | `#FFFFFF` | Text on dark backgrounds, icons, space |

### Typography
- Font: `Poppins` or `Montserrat`
- Bold weights for headings and CTAs
- Elegant spacing and consistent hierarchy

### UI Details
- Rounded corners (`0.5rem`)
- Hover states with subtle red glow or scaling
- Consistent padding and grid spacing

---

## 🌐 Page Structure (Adapted from Ochaka)

### 1. Home / Landing Page
- Hero banner with dark tint, tagline, and CTA (“Shop Now”)
- Navigation with dropdowns or mega menu
- Feature banners (e.g., “Custom Points”, “New Arrivals”)
- Featured product carousel
- Category highlights: “Dart Sets”, “Accessories”, “Custom Points”
- Brand logos / trust section
- Blog or tips section (optional)
- Multi-column footer with social links and newsletter form

---

### 2. Shop Page
- Sidebar filters (category, price, brand, rating)
- Product grid with consistent card layout
- Product hover → quick view modal
- Sorting dropdown (price, newest, popular)
- Pagination or infinite scroll

---

### 3. Product Detail Page
- Image gallery or carousel
- Product info: title, price, variants, stock
- Add to Cart + quantity selector
- Tabs / accordion for Description, Specs, Reviews
- Related products section

---

### 4. Cart / Checkout
- List of cart items with image, name, quantity, price
- Order summary, tax, and total
- Checkout and “Continue Shopping” buttons
- Responsive mobile layout

---

### 5. User Account / Dashboard
- Dashboard with sidebar or tab navigation
- Sections: Profile, Orders, Address, Transactions, Change Password
- Order list with status tags (Delivered, Pending, Canceled)
- Editable profile fields

---

### 6. About / Contact / Static Pages
- Hero or breadcrumb header
- Section blocks for story, mission, and contact info
- Contact form and embedded map

---

## 🧱 Technical Stack

- **Framework**: Next.js (App Router)
- **Styling**: TailwindCSS with design tokens
- **UI Library**: Radix UI + Aceternity UI (for consistent primitives)
- **Animation**: Framer Motion for page transitions and hover effects

### Tailwind Theme Example
```ts
extend: {
  colors: {
    primary: "#B12025",
    "text-dark": "#111111",
    surface: "#2C2C2C",
    background: "#E5E5E5",
    white: "#FFFFFF",
  },
  borderRadius: {
    lg: "0.5rem",
  },
  boxShadow: {
    glow: "0 0 8px rgba(177,32,37, 0.6)",
  },
}
