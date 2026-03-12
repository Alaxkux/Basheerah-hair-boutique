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
    name: "Soft Girl Starter Pack",
    description: "Pastel scrunchies + claw clips for your dreamy, cloud-like aesthetic. Perfect for school, brunch, and soft life vibes.",
    price: "₦4,500", oldPrice: "₦6,000", emoji: "🌸", tag: "Bestseller",
    theme: {
      primary:"#f472b6", secondary:"#c084fc",
      bg:"linear-gradient(135deg,#fdf2f8 0%,#f3e8ff 100%)",
      cardBg:"linear-gradient(135deg,#fce7f3 0%,#ede9fe 100%)",
      accent:"#e879f9", text:"#6b21a8", tagBg:"#fce7f3", tagColor:"#be185d",
    },
    items:["3 Pastel Scrunchies","1 Claw Clip","2 Pearl Hair Pins","1 Mini Brush"],
    colors:["#f9a8d4","#93c5fd","#a5f3fc","#c4b5fd"],
    images:[
      // SLOT 1 — Main product photo (shown on card & first in gallery)
      "/images/b.jpeg",
      // SLOT 2 — Second gallery photo
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
      // SLOT 3 — Third gallery photo
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  BUNDLE 2 — Baddie Hair Kit
  // ─────────────────────────────────────────────────────────
  {
    id: 2,
    name: "Baddie Hair Kit",
    description: "Sleek satin scrunchies + bold accessories for girls who own every room they walk into.",
    price: "₦5,200", oldPrice: "₦7,000", emoji: "🖤", tag: "Hot 🔥",
    theme: {
      primary:"#f43f5e", secondary:"#fb923c",
      bg:"linear-gradient(135deg,#fff1f2 0%,#fff7ed 100%)",
      cardBg:"linear-gradient(135deg,#ffe4e6 0%,#ffedd5 100%)",
      accent:"#e11d48", text:"#881337", tagBg:"#ffe4e6", tagColor:"#be123c",
    },
    items:["4 Satin Scrunchies","1 Gold Chain Clip","2 Bobby Pins","1 Edge Brush"],
    colors:["#1f2937","#dc2626","#d97706","#111827"],
    images:[
      "images/c.jpeg",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
      "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&q=80",
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  BUNDLE 3 — Bestie Bundle
  // ─────────────────────────────────────────────────────────
  {
    id: 3,
    name: "Bestie Bundle",
    description: "The ultimate gift for your ride-or-die. Comes in a beautiful gift box, ready to give and ready to love.",
    price: "₦8,000", oldPrice: "₦11,000", emoji: "💜", tag: "Gift Ready",
    theme: {
      primary:"#a855f7", secondary:"#818cf8",
      bg:"linear-gradient(135deg,#faf5ff 0%,#eef2ff 100%)",
      cardBg:"linear-gradient(135deg,#f3e8ff 0%,#e0e7ff 100%)",
      accent:"#7c3aed", text:"#5b21b6", tagBg:"#f3e8ff", tagColor:"#7c3aed",
    },
    items:["6 Mixed Scrunchies","2 Claw Clips","1 Satin Headband","Gift Box Included"],
    colors:["#c4b5fd","#f0abfc","#f9a8d4","#818cf8"],
    images:[
      "images/d.jpeg",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80",
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  BUNDLE 4 — Weekend Slay Combo
  // ─────────────────────────────────────────────────────────
  {
    id: 4,
    name: "Weekend Slay Combo",
    description: "Luxe satin pieces for your lazy glam days. Effortlessly chic from morning to midnight.",
    price: "₦6,500", oldPrice: "₦8,500", emoji: "✨", tag: "New",
    theme: {
      primary:"#f59e0b", secondary:"#84cc16",
      bg:"linear-gradient(135deg,#fffbeb 0%,#f7fee7 100%)",
      cardBg:"linear-gradient(135deg,#fef3c7 0%,#ecfccb 100%)",
      accent:"#d97706", text:"#78350f", tagBg:"#fef3c7", tagColor:"#b45309",
    },
    items:["2 Jumbo Satin Scrunchies","1 Silk Headband","1 Claw Clip","1 Hair Serum"],
    colors:["#92400e","#1f2937","#d97706","#78350f"],
    images:[
      "images/e.jpeg",
      "https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=600&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  BUNDLE 5 — Mini Gift Box
  // ─────────────────────────────────────────────────────────
  {
    id: 5,
    name: "Mini Gift Box",
    description: "Cute lil box, big hair love. The sweetest surprise for anyone who deserves a treat.",
    price: "₦3,500", oldPrice: "₦5,000", emoji: "🎁", tag: "Gifting",
    theme: {
      primary:"#fb7185", secondary:"#f472b6",
      bg:"linear-gradient(135deg,#fff1f2 0%,#fdf2f8 100%)",
      cardBg:"linear-gradient(135deg,#ffe4e6 0%,#fce7f3 100%)",
      accent:"#e11d48", text:"#be123c", tagBg:"#fce7f3", tagColor:"#be185d",
    },
    items:["2 Scrunchies","1 Mini Claw Clip","Heart Sticker Pack","Gift Ribbon"],
    colors:["#f9a8d4","#fda4af","#fecdd3","#fbcfe8"],
    images:[
      "images/f.jpeg",
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80",
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  BUNDLE 6 — Luxury Satin Set
  // ─────────────────────────────────────────────────────────
  {
    id: 6,
    name: "Luxury Satin Set",
    description: "Premium satin collection for silky, damage-free styling. Because your hair deserves 5-star treatment every day.",
    price: "₦9,500", oldPrice: "₦13,000", emoji: "👑", tag: "Premium",
    theme: {
      primary:"#d97706", secondary:"#a16207",
      bg:"linear-gradient(135deg,#fffbeb 0%,#fefce8 100%)",
      cardBg:"linear-gradient(135deg,#fef3c7 0%,#fef9c3 100%)",
      accent:"#b45309", text:"#78350f", tagBg:"#fef3c7", tagColor:"#92400e",
    },
    items:["5 Luxury Satin Scrunchies","1 Silk Pillowcase","1 Satin Bonnet","1 Hair Oil"],
    colors:["#92400e","#b45309","#d97706","#78350f"],
    images:[
      "images/g.jpeg",
      "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    ],
  },

  // ─────────────────────────────────────────────────────────
  //  BUNDLE 7 — Color Pop Pack
  // ─────────────────────────────────────────────────────────
  {
    id: 7,
    name: "Color Pop Pack",
    description: "Bold, vibrant scrunchies for girls who aren't afraid to stand out. Life's too short for boring hair.",
    price: "₦5,800", oldPrice: "₦7,500", emoji: "🌈", tag: "Fan Fave",
    theme: {
      primary:"#06b6d4", secondary:"#3b82f6",
      bg:"linear-gradient(135deg,#ecfeff 0%,#eff6ff 100%)",
      cardBg:"linear-gradient(135deg,#cffafe 0%,#dbeafe 100%)",
      accent:"#0891b2", text:"#164e63", tagBg:"#cffafe", tagColor:"#0e7490",
    },
    items:["5 Colourful Scrunchies","1 Rainbow Claw Clip","1 Beaded Hair Tie","1 Colour Guide"],
    colors:["#f87171","#fb923c","#facc15","#4ade80","#60a5fa","#c084fc"],
    images:[
      "images/b.jpeg",
      "https://images.unsplash.com/photo-1560707303-4e980ce876ad?w=600&q=80",
      "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=600&q=80",
    ],
  },
   
  {
  id: 8,
  name: "Pastel Dream Pack",
  description: "Soft pastel hair accessories for a calm, dreamy aesthetic. Perfect for cute everyday styles.",
  price: "₦5,400", oldPrice: "₦7,000", emoji: "🌸", tag: "Cute Pick",
  theme: {
    primary:"#f472b6", secondary:"#a78bfa",
    bg:"linear-gradient(135deg,#fdf2f8 0%,#f5f3ff 100%)",
    cardBg:"linear-gradient(135deg,#fbcfe8 0%,#e9d5ff 100%)",
    accent:"#db2777", text:"#701a75", tagBg:"#fce7f3", tagColor:"#be185d",
  },
  items:["5 Pastel Scrunchies","1 Butterfly Clip","1 Pearl Hair Tie","1 Style Guide"],
  colors:["#f9a8d4","#fbcfe8","#c4b5fd","#ddd6fe","#a5b4fc","#bfdbfe"],
  images:[
    "images/c.jpeg",
    "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80",
    "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=600&q=80",
  ],
  },

  {
  id: 9,
  name: "Glow Girl Pack",
  description: "Shiny clips and glam scrunchies that sparkle under the lights. Built for girls who love a little shine.",
  price: "₦6,200", oldPrice: "₦8,000", emoji: "✨", tag: "Trending",
  theme: {
    primary:"#f59e0b", secondary:"#f43f5e",
    bg:"linear-gradient(135deg,#fff7ed 0%,#ffe4e6 100%)",
    cardBg:"linear-gradient(135deg,#fde68a 0%,#fecdd3 100%)",
    accent:"#d97706", text:"#7c2d12", tagBg:"#fef3c7", tagColor:"#b45309",
  },
  items:["4 Glitter Scrunchies","2 Metallic Hair Clips","1 Crystal Hair Tie","1 Mini Mirror"],
  colors:["#fbbf24","#f472b6","#fb7185","#facc15","#fcd34d","#fde68a"],
  images:[
    "images/d.jpeg",
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
  ],
  },

  {
  id: 10,
  name: "Minimal Chic Pack",
  description: "Clean, elegant hair accessories for a simple but classy look. Quiet beauty that speaks loud style.",
  price: "₦5,000", oldPrice: "₦6,800", emoji: "🖤", tag: "Classy",
  theme: {
    primary:"#6b7280", secondary:"#111827",
    bg:"linear-gradient(135deg,#f9fafb 0%,#f3f4f6 100%)",
    cardBg:"linear-gradient(135deg,#e5e7eb 0%,#d1d5db 100%)",
    accent:"#374151", text:"#111827", tagBg:"#e5e7eb", tagColor:"#1f2937",
  },
  items:["3 Neutral Scrunchies","2 Matte Claw Clips","1 Silk Hair Tie","1 Care Card"],
  colors:["#111827","#374151","#6b7280","#9ca3af","#d1d5db","#f3f4f6"],
  images:[
    "images/b.jpeg",
    "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?w=600&q=80",
    "https://images.unsplash.com/photo-1593032465175-481ac7f401f0?w=600&q=80",
  ],
  },


  // ─────────────────────────────────────────────────────────
  //  ➕ TO ADD A NEW BUNDLE: copy the block above,
  //     change id to 8, fill in your details, done!
  // ─────────────────────────────────────────────────────────
];
