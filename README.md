# 💗 Basheerah Hair Hugs

A fully functional mobile shop app for Basheerah Hair Hugs — hair accessories store.

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node)

### Install & Run

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# → http://localhost:3000
```

### Build for Production

```bash
npm run build
# Output goes to /dist — deploy this folder to any static host
```

---

## 📁 Project Structure

```
basheerah-hair-hugs/
├── index.html                  # App entry point
├── vite.config.js              # Vite build config
├── package.json
└── src/
    ├── main.jsx                # React root render
    ├── App.jsx                 # Root component — state & routing
    │
    ├── data/
    │   └── bundles.js          # All bundle data + WhatsApp number
    │
    ├── components/
    │   ├── TopNav.jsx          # Top navigation bar
    │   ├── BottomNav.jsx       # Bottom tab navigation
    │   ├── Drawer.jsx          # Side menu drawer
    │   ├── BundleGrid.jsx      # Reusable 3-column bundle grid
    │   └── Toast.jsx           # Toast notification
    │
    ├── pages/
    │   ├── HomePage.jsx        # Home with hero + bundles + trust bar
    │   ├── BundlesPage.jsx     # All bundles + search
    │   ├── DetailPage.jsx      # Single bundle detail view
    │   ├── CartPage.jsx        # Cart with qty controls + WhatsApp checkout
    │   ├── OrdersPage.jsx      # Order history
    │   └── ProfilePage.jsx     # Profile + quick actions
    │
    └── styles/
        ├── global.css          # CSS variables, resets, animations
        ├── components.css      # Buttons, nav, cards, cart, profile
        ├── hero.css            # Hero section styles
        └── detail.css          # Bundle detail page styles
```

---

## ✏️ Customisation

### Change WhatsApp number
Edit `src/data/bundles.js`:
```js
export const WHATSAPP_NUMBER = "234XXXXXXXXXX"; // country code + number, no +
```

### Add a new bundle
In `src/data/bundles.js`, add a new object to the `bundles` array:
```js
{
  id: 7,
  name: "My New Bundle",
  description: "A short catchy description",
  price: "₦5,000",
  oldPrice: "₦7,000",
  emoji: "🌟",
  accent: "#ec4899",       // card tag + price colour
  tag: "New Arrival",
  items: ["Item 1", "Item 2", "Item 3"],
  colors: ["#f9a8d4", "#93c5fd"],
  img: "https://your-image-url.com/photo.jpg",
}
```

### Change brand colours
Edit the CSS variables at the top of `src/styles/global.css`.

---

## 🌐 Deployment

The built `/dist` folder is a static site — host it on:
- [Netlify](https://netlify.com) — drag & drop `/dist`
- [Vercel](https://vercel.com) — connect repo
- Any static file hosting / CDN
# Basheerah-hair-boutique
