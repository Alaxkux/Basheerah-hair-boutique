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

---

## 🎀 CEO Welcome Ceremony Page

A special ribbon-cutting ceremony page (`public/ceremony.html`) built for CEO Basheerah's grand opening moment.

### How it works
1. Opens with a dramatic ribbon-cutting scene
2. CEO clicks the ribbon with the ✂️ cursor to cut it
3. A heartfelt welcome note popup appears
4. After closing the note, a loading screen plays
5. Redirects to the main app (`index.html`)

### How to use it as the first page
Set `ceremony.html` as your homepage on your hosting platform, OR share the direct link to `ceremony.html` with Basheerah to open first.

### How to disable / comment it out when done
Once the ceremony moment is over, you can disable it in **3 steps**:

**Step 1** — Stop linking to it  
Simply don't share or link to `ceremony.html` anymore. The main app (`index.html`) is completely unaffected.

**Step 2** — Optionally hide the note popup (keep the ribbon but skip the message)  
Open `public/ceremony.html`, find this line in the `<script>`:
```js
setTimeout(() => modalOverlay.classList.add('show'), 900);
```
Comment it out and uncomment the line below it:
```js
// setTimeout(startLoader, 900);
```

**Step 3** — Optionally remove the file entirely  
Delete `public/ceremony.html` from your project. Nothing else in the app depends on it.

---

## 💖 PWA Install Prompt

A branded install prompt appears automatically after the user visits **2 or more pages**. It asks them to add the app to their home screen.

### How it works
- Triggers once per session after 2+ unique page visits
- Shows a beautiful branded bottom-sheet popup
- On supported browsers (Chrome/Edge on Android, Safari on iOS), tapping "Yes, add it!" installs the app to the home screen
- On unsupported browsers, shows a helpful toast message

### How to disable it
In `src/components/PWAInstallPrompt.jsx`, find:
```js
if (pages.length >= 2 && !shownRef.current) {
```
Change `2` to a very high number like `999` to effectively disable it, or delete the `<PWAInstallPrompt />` lines from `src/App.jsx`.

---

## 🖤 Dark Mode Theme

A full dark mode is available as a theme option in the Profile page. It replaces "Peach Glow" in the theme selector.

### How to activate
Go to **Profile → App Theme** → tap the 🖤 black dot → confirm.

### What changes
Everything: background, cards, nav bars, text, hero section — the entire app flips to a deep purple-black dark theme.

### How it's stored
The theme preference is saved to `localStorage` and restored on every app load automatically.
