// ============================================================
//  BASHEERAH HAIR BOUTIQUE — Bundle Data
//  ============================================================
//
//  HOW TO ADD A NEW BUNDLE:
//  1. Copy one of the bundle objects below
//  2. Change the `id` to the next number (e.g. 7)
//  3. Fill in name, description, price, oldPrice, emoji, tag
//  4. Pick a `theme` (copy one and change the hex colours)
//  5. Update `items` array with what's inside the bundle
//  6. Update `colors` with the available colour swatches
//  7. Replace the 3 `images` URLs with your own photo URLs
//     (see "HOW TO INSERT YOUR OWN IMAGES" below)
//  8. Save the file — the bundle appears automatically on site
//
//  HOW TO INSERT YOUR OWN IMAGES:
//  - Each bundle has an `images` array with 3 slots
//  - Replace any URL with:
//      a) A web URL:  "https://yoursite.com/photo.jpg"
//      b) A local file in /public folder: "/images/mybundle1.jpg"
//         (put the file in basheerah/public/images/ first)
//  - Minimum recommended size: 600×600px, under 200KB for speed
//  - You can use 1, 2 or 3 images per bundle (minimum 1)
//
//  HOW TO CHANGE WHATSAPP NUMBER:
//  - Edit WHATSAPP_NUMBER below (country code + number, no +)
// ============================================================

export const WHATSAPP_NUMBER = "2349019836350";

export const BRAND = {
  name:    "Basheerah Hair Boutique",
  tagline: "Cute Hair Accessories & Bundles",
  sub:     "Cute hair accessories made with love 💖",
  emoji:   "🎀",
  phone:   "09019836350",
  instagram: "basheerahhairboutique", // your IG handle (no @)
};

export const bundles = [
  // ─────────────────────────────────────────────────────────
  //  BUNDLE 1 — Soft Girl Starter Pack
  //  IMAGE SLOTS: replace the 3 unsplash URLs with your photos
  // ─────────────────────────────────────────────────────────
  {
    id: 1,
    name: "Soft Glam Set",
    description: "Scrunchies meet lip care in this dreamy glam bundle. Gift small, love big — the perfect treat for yourself or someone special.",
    price: "₦7,000", oldPrice: "₦9,500", emoji: "🌹", tag: "Hot Pick",
    theme: {
      primary: "#f43f5e", secondary: "#fb7185",
      bg: "linear-gradient(135deg,#fff1f2 0%,#ffe4e6 100%)",
      cardBg: "linear-gradient(135deg,#ffe4e6 0%,#fecdd3 100%)",
      accent: "#e11d48", text: "#881337", tagBg: "#ffe4e6", tagColor: "#be123c",
    },
    items: ["3 Scrunchies", "1 Lip Scrub", "1 Lip Oil", "1 Lip Gloss"],
    colors: ["#f9a8d4", "#fda4af", "#fb7185", "#e11d48"],
    images: [
      "/images/WhatsApp Image 2026-03-18 at 7.11.24 PM.jpeg",
      "/images/WhatsApp Image 2026-03-18 at 7.52.58 PM.jpeg",
      "/images/WhatsApp Image 2026-03-18 at 7.54.39 PM (1).jpeg",
      "/images/WhatsApp Image 2026-03-18 at 7.54.41 PM.jpeg",
      "/images/WhatsApp Image 2026-03-18 at 7.54.34 PM (1).jpeg",
    ],
  },

  {
    id: 2,
    name: "Campus Cutie Combo",
    description: "Your go-to school pack — scrunchies, a mini tote, and a keychain to keep you classy in class every single day.",
    price: "₦9,000", oldPrice: "₦12,500", emoji: "🎒", tag: "Student Fave",
    theme: {
      primary: "#eab308", secondary: "#facc15",
      bg: "linear-gradient(135deg,#fefce8 0%,#fef9c3 100%)",
      cardBg: "linear-gradient(135deg,#fef9c3 0%,#fef08a 100%)",
      accent: "#ca8a04", text: "#713f12", tagBg: "#fef9c3", tagColor: "#a16207",
    },
    items: ["3 Scrunchies", "1 Mini Tote Bag", "1 Keychain"],
    colors: ["#fde047", "#facc15", "#eab308", "#ca8a04"],
    images: [
      "/images/WhatsApp Image 2026-03-18 at 7.12.44 PM.jpeg",
      "/images/WhatsApp Image 2026-03-18 at 7.52.58 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.39 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.33 PM (1).jpeg",
    ],
  },

  {
    id: 3,
    name: "Mini Gift Box",
    description: "Cute things really do come in small packages. A sweet little bundle of joy for gifting or self-treating.",
    price: "₦6,000", oldPrice: "₦8,500", emoji: "🎁", tag: "Best Value",
    theme: {
      primary: "#a855f7", secondary: "#c084fc",
      bg: "linear-gradient(135deg,#faf5ff 0%,#f3e8ff 100%)",
      cardBg: "linear-gradient(135deg,#f3e8ff 0%,#e9d5ff 100%)",
      accent: "#9333ea", text: "#581c87", tagBg: "#f3e8ff", tagColor: "#7e22ce",
    },
    items: ["2 Scrunchies", "1 Lip Gloss", "1 Small Keychain", "1 Toothbrush Case"],
    colors: ["#d8b4fe", "#c084fc", "#a855f7", "#9333ea"],
    images: [
      "public/images/WhatsApp Image 2026-03-18 at 7.13.32 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.58 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.33 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.34 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.38 PM.jpeg",
    ],
  },

  {
    id: 4,
    name: "Little Self Care Gift Pack",
    description: "Your beauty routine just got an upgrade. Satin scrunchies, a headband, lip gloss and more — because you deserve it.",
    price: "₦8,500", oldPrice: "₦11,000", emoji: "💕", tag: "Self Care",
    theme: {
      primary: "#ec4899", secondary: "#f472b6",
      bg: "linear-gradient(135deg,#fdf2f8 0%,#fce7f3 100%)",
      cardBg: "linear-gradient(135deg,#fce7f3 0%,#fbcfe8 100%)",
      accent: "#db2777", text: "#831843", tagBg: "#fce7f3", tagColor: "#be185d",
    },
    items: ["2 Satin Scrunchies", "1 Beauty Routine Set", "1 Headband", "1 Lip Gloss"],
    colors: ["#f9a8d4", "#f472b6", "#ec4899", "#db2777"],
    images: [
      "public/images/WhatsApp Image 2026-03-18 at 7.14.15 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.58 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.42 PM (2).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.42 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.39 PM (2).jpeg",
    ],
  },

  {
    id: 5,
    name: "Bestie Bundle",
    description: "Because besties twin without even planning it. Two sets of scrunchies, matching bracelets, and mini jotters for you and your girl.",
    price: "₦9,000", oldPrice: "₦12,000", emoji: "👯‍♀️", tag: "BFF Special",
    theme: {
      primary: "#06b6d4", secondary: "#22d3ee",
      bg: "linear-gradient(135deg,#ecfeff 0%,#cffafe 100%)",
      cardBg: "linear-gradient(135deg,#cffafe 0%,#a5f3fc 100%)",
      accent: "#0891b2", text: "#164e63", tagBg: "#cffafe", tagColor: "#0e7490",
    },
    items: ["4 Scrunchies (2 for you, 2 for your bestie)", "2 Cute Bracelets", "2 Mini Jotters"],
    colors: ["#a5f3fc", "#67e8f9", "#22d3ee", "#06b6d4"],
    images: [
      "public/images/WhatsApp Image 2026-03-18 at 7.14.47 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.58 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.37 PM (2).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.37 PM (1).jpeg",
    ],
  },

  {
    id: 6,
    name: "Luxury Set",
    description: "Affordable, adorable, unforgettable. High-quality satin scrunchies plus all the extras — because you deserve nothing less.",
    price: "₦7,500", oldPrice: "₦10,500", emoji: "💎", tag: "Premium",
    theme: {
      primary: "#8b5cf6", secondary: "#a78bfa",
      bg: "linear-gradient(135deg,#f5f3ff 0%,#ede9fe 100%)",
      cardBg: "linear-gradient(135deg,#ede9fe 0%,#ddd6fe 100%)",
      accent: "#7c3aed", text: "#4c1d95", tagBg: "#ede9fe", tagColor: "#6d28d9",
    },
    items: ["5 High-Quality Satin Scrunchies", "1 Hair Comb", "1 Pocket Perfume", "1 Cute Pen", "1 Pretty Clip"],
    colors: ["#c4b5fd", "#a78bfa", "#8b5cf6", "#7c3aed"],
    images: [
      "public/images/WhatsApp Image 2026-03-18 at 7.15.28 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.59 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.36 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.33 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.36 PM (3).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.34 PM.jpeg",
    ],
  },

  {
    id: 7,
    name: "Soft Girl Starter Pack",
    description: "Soft life begins with soft accessories. Pastel scrunchies, a matching clip and a cute bracelet for your dreamy everyday look.",
    price: "₦5,500", oldPrice: "₦8,000", emoji: "🎀", tag: "Soft Life",
    theme: {
      primary: "#f472b6", secondary: "#c084fc",
      bg: "linear-gradient(135deg,#fdf2f8 0%,#f3e8ff 100%)",
      cardBg: "linear-gradient(135deg,#fce7f3 0%,#ede9fe 100%)",
      accent: "#e879f9", text: "#6b21a8", tagBg: "#fce7f3", tagColor: "#be185d",
    },
    items: ["3 Pastel Scrunchies", "1 Matching Hair Clip", "1 Cute Bracelet"],
    colors: ["#f9a8d4", "#c084fc", "#a5f3fc", "#c4b5fd"],
    images: [
      "public/images/WhatsApp Image 2026-03-02 at 12.15.24 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.58 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-02 at 12.15.35 AM.jpeg",
      "public/images/WhatsApp Image 2026-03-02 at 12.15.37 AM.jpeg",
    ],
  },

  {
    id: 8,
    name: "Baddie Hair Kit",
    description: "Hair laid, vibe secured. Satin scrunchies, a pocket mirror and a gold bracelet — because baddies come prepared.",
    price: "₦6,000", oldPrice: "₦8,500", emoji: "💖", tag: "Baddie Approved",
    theme: {
      primary: "#292524", secondary: "#44403c",
      bg: "linear-gradient(135deg,#1c1917 0%,#292524 100%)",
      cardBg: "linear-gradient(135deg,#292524 0%,#3d3530 100%)",
      accent: "#d97706", text: "#fef3c7", tagBg: "#3d3530", tagColor: "#fbbf24",
    },
    items: ["2 Satin Scrunchies", "1 Pocket Mirror", "1 Gold Bracelet"],
    colors: ["#d97706", "#fbbf24", "#78716c", "#292524"],
    images: [
      "public/images/WhatsApp Image 2026-03-02 at 12.33.05 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.58 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.37 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.36 PM (1).jpeg",
    ],
  },

  {
    id: 9,
    name: "Weekend Slay Combo",
    description: "One combo, three outfits. Scrunchies, a headband and cute earrings to keep you serving looks all weekend long.",
    price: "₦5,000", oldPrice: "₦7,500", emoji: "🌞", tag: "Weekend Vibe",
    theme: {
      primary: "#f97316", secondary: "#fb923c",
      bg: "linear-gradient(135deg,#fff7ed 0%,#ffedd5 100%)",
      cardBg: "linear-gradient(135deg,#ffedd5 0%,#fed7aa 100%)",
      accent: "#ea580c", text: "#7c2d12", tagBg: "#ffedd5", tagColor: "#c2410c",
    },
    items: ["3 Scrunchies", "1 Headband", "1 Pair of Cute Earrings"],
    colors: ["#fed7aa", "#fb923c", "#f97316", "#ea580c"],
    images: [
      "public/images/WhatsApp Image 2026-03-02 at 1.07.02 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.58 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.38 PM (1).jpeg",
      
    ],
  },

  {
    id: 10,
    name: "Clean Girl Essentials",
    description: "Small gift, love big. Everything a clean girl needs — satin scrunchies, face masks, and the little extras that make your routine feel luxe.",
    price: "₦5,500", oldPrice: "₦8,000", emoji: "🏵️", tag: "Clean Girl",
    theme: {
      primary: "#14b8a6", secondary: "#2dd4bf",
      bg: "linear-gradient(135deg,#f0fdfa 0%,#ccfbf1 100%)",
      cardBg: "linear-gradient(135deg,#ccfbf1 0%,#99f6e4 100%)",
      accent: "#0d9488", text: "#134e4a", tagBg: "#ccfbf1", tagColor: "#0f766e",
    },
    items: ["2 Satin Scrunchies", "2 Face Masks", "1 Toothbrush Case", "1 Tongue Scraper"],
    colors: ["#99f6e4", "#2dd4bf", "#14b8a6", "#0d9488"],
    images: [
      "public/images/WhatsApp Image 2026-03-06 at 10.33.50 AM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.59 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.40 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.38 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.41 PM (3).jpeg",
    ],
  },

  {
    id: 11,
    name: "Pretty Girl Essentials",
    description: "A little bundle of cuteness just for you. Satin scrunchies, a jewelry box and a cute bow bottle — because pretty girls deserve pretty things.",
    price: "₦8,000", oldPrice: "₦10,500", emoji: "💗", tag: "Pretty & Cute",
    theme: {
      primary: "#f43f5e", secondary: "#fb7185",
      bg: "linear-gradient(135deg,#fff1f2 0%,#fce7f3 100%)",
      cardBg: "linear-gradient(135deg,#fce7f3 0%,#ffe4e6 100%)",
      accent: "#e11d48", text: "#881337", tagBg: "#fce7f3", tagColor: "#be123c",
    },
    items: ["2 Satin Scrunchies", "1 Jewelry Box", "1 Cute Bow Bottle"],
    colors: ["#fda4af", "#fb7185", "#f43f5e", "#e11d48"],
    images: [
      "public/images/WhatsApp Image 2026-03-10 at 6.34.21 AM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.59 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.43 PM (2).jpeg",
    ],
  },

  {
    id: 12,
    name: "Glow & Groom Kit",
    description: "Mini gift, maximum smile. Everything you need to glow up — satin scrunchies, hairbands, a pedicure set and a hair comb all in one.",
    price: "₦7,500", oldPrice: "₦9,500", emoji: "✨", tag: "Glow Up",
    theme: {
      primary: "#10b981", secondary: "#34d399",
      bg: "linear-gradient(135deg,#ecfdf5 0%,#d1fae5 100%)",
      cardBg: "linear-gradient(135deg,#d1fae5 0%,#a7f3d0 100%)",
      accent: "#059669", text: "#064e3b", tagBg: "#d1fae5", tagColor: "#047857",
    },
    items: ["2 Satin Scrunchies", "Cute Hairbands", "1 Pedicure Set", "1 Hair Comb"],
    colors: ["#6ee7b7", "#34d399", "#10b981", "#059669"],
    images: [
      "public/images/WhatsApp Image 2026-03-11 at 5.44.18 AM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.58 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.44 PM (3).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.41 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.36 PM.jpeg",
    ],
  },

  {
    id: 13,
    name: "Daily Glow Kit",
    description: "Every girl deserves a little glow. Scrunchies, a mini mirror, pocket perfume and lip gloss — your everyday essentials sorted.",
    price: "₦6,500", oldPrice: "₦8,500", emoji: "💫", tag: "Daily Fave",
    theme: {
      primary: "#f59e0b", secondary: "#fbbf24",
      bg: "linear-gradient(135deg,#fffbeb 0%,#fef3c7 100%)",
      cardBg: "linear-gradient(135deg,#fef3c7 0%,#fde68a 100%)",
      accent: "#d97706", text: "#78350f", tagBg: "#fef3c7", tagColor: "#b45309",
    },
    items: ["3 Scrunchies", "1 Mini Mirror", "1 Pocket Perfume", "1 Cute Lip Gloss"],
    colors: ["#fde68a", "#fbbf24", "#f59e0b", "#d97706"],
    images: [
      "public/images/WhatsApp Image 2026-03-12 at 6.20.23 AM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.52.59 PM.jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.36 PM (3).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.34 PM (1).jpeg",
    ],
  },


  // ─────────────────────────────────────────────────────────
  //  ➕ TO ADD A NEW BUNDLE: copy the block above,
  //     change id to 8, fill in your details, done!
  // ─────────────────────────────────────────────────────────
];
