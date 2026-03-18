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
    price: "₦7,000", oldPrice: "₦4,500", emoji: "🌹", tag: "Hot Pick",
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
    price: "₦9,000", oldPrice: "₦8,000", emoji: "🎒", tag: "Student Fave",
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
    price: "₦6,000", oldPrice: "₦9,500", emoji: "🎁", tag: "Best Value",
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
    price: "₦8,500", oldPrice: "₦5,200", emoji: "💕", tag: "Self Care",
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
      "public/images/WhatsApp Image 2026-03-18 at 7.54.42 PM (2).jpegg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.42 PM (1).jpeg",
      "public/images/WhatsApp Image 2026-03-18 at 7.54.39 PM (2).jpeg",
    ],
  },

  {
    id: 5,
    name: "Bestie Bundle",
    description: "Because besties twin without even planning it. Two sets of scrunchies, matching bracelets, and mini jotters for you and your girl.",
    price: "₦9,000", oldPrice: "₦6,500", emoji: "👯‍♀️", tag: "BFF Special",
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
    price: "₦7,500", oldPrice: "₦3,500", emoji: "💎", tag: "Premium",
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


  // ─────────────────────────────────────────────────────────
  //  ➕ TO ADD A NEW BUNDLE: copy the block above,
  //     change id to 8, fill in your details, done!
  // ─────────────────────────────────────────────────────────
];
