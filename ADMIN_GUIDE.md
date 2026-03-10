# 🔐 Admin Dashboard Guide — Basheerah Hair Boutique

## Do You Need an Admin Dashboard?

**Yes — if you want to:**
- Add/remove bundles without touching code
- View orders placed via WhatsApp in a table
- Change prices, photos, descriptions from a visual UI
- See customer analytics (visits, popular items)

**You can skip it for now if:**
- You're okay editing `src/data/bundles.js` directly to update bundles
- WhatsApp handles all your orders manually
- You have fewer than 20 bundles

---

## How to Add an Admin Dashboard (Simple Version)

### Option A — Separate password-protected page (recommended for you)

1. Create `src/pages/AdminPage.jsx`
2. Add a login screen that checks username + password stored in a constant:

```jsx
// src/pages/AdminPage.jsx
const ADMIN_USER = "basheerah";   // ← change this
const ADMIN_PASS = "hairqueen2024"; // ← change this (keep it secret!)

export default function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const login = () => {
    if (user === ADMIN_USER && pass === ADMIN_PASS) {
      setLoggedIn(true);
    } else {
      setError("Wrong username or password 🚫");
    }
  };

  if (!loggedIn) return <LoginScreen ... />;
  return <AdminDashboard />;
}
```

3. The dashboard can show:
   - Welcome message: "Welcome back, CEO! 👑"
   - Total orders count
   - Bundle list with edit buttons
   - Quick WhatsApp link to check orders

4. Access it by going to your site URL + `/admin`
   (add a route in App.jsx for `activePage === "admin"`)

### What the Admin Dashboard Would Look Like

```
┌─────────────────────────────────────────────────────────┐
│  🔐 Admin Login                                          │
│                                                          │
│  Username: [____________]                                │
│  Password: [____________]                                │
│                                                          │
│       [ Login as CEO → ]                                 │
└─────────────────────────────────────────────────────────┘

After login:

┌─────────────────────────────────────────────────────────┐
│  👑 Welcome back, CEO! — Basheerah Hair Boutique         │
│  Today: March 10, 2026  |  Total Orders: 24              │
│                                                          │
│  📦 Bundles (7)          💬 Open WhatsApp Orders         │
│  ─────────────────────────────────────────────────────  │
│  🌸 Soft Girl Pack   ₦4,500  [Edit] [Hide]              │
│  🖤 Baddie Hair Kit  ₦5,200  [Edit] [Hide]              │
│  ...                                                     │
└─────────────────────────────────────────────────────────┘
```

---

## ⚠️ Security Note

- The simple version above stores credentials in your code.
  **This is fine for personal use** but don't share the code publicly on GitHub.
- For a fully secure admin panel, you'd need a real backend
  (Firebase, Supabase, etc.) — ask me to set that up if needed.

---

## HOW TO ADD A BUNDLE (No admin dashboard needed!)

1. Open `src/data/bundles.js`
2. Copy the last bundle object
3. Change the `id` to the next number
4. Update: `name`, `description`, `price`, `oldPrice`, `emoji`, `tag`
5. Update `items` array
6. Replace the 3 `images` URLs with your photos
7. Save — bundle appears on the site instantly!

Example:
```js
{
  id: 8,
  name: "My New Bundle",
  description: "Description of the bundle",
  price: "₦5,000", oldPrice: "₦7,000",
  emoji: "💫", tag: "New",
  theme: { /* copy from another bundle */ },
  items: ["Item 1", "Item 2", "Item 3"],
  colors: ["#f9a8d4", "#c4b5fd"],
  images: [
    "/images/mybundle-1.jpg",  // put file in basheerah/public/images/
    "/images/mybundle-2.jpg",
    "/images/mybundle-3.jpg",
  ],
},
```

---

## HOW TO INSERT YOUR OWN PHOTOS

### Method 1 — Local files (best for speed)
1. Put your photo files in: `basheerah/public/images/`
2. In bundles.js, use: `"/images/yourphoto.jpg"`
3. Recommended size: **600×600px**, JPG or WebP, under 150KB

### Method 2 — Web URLs
1. Upload photo to Google Drive, Cloudinary, or your own hosting
2. Get the public link
3. Paste directly as the image URL in bundles.js

### Photo slots by location:
| Location | File to edit | What to change |
|---|---|---|
| Bundle card & gallery | `src/data/bundles.js` | `images[0]`, `images[1]`, `images[2]` |
| Desktop hero main | `src/components/DesktopHero.jsx` | Line ~54 img src |
| Desktop hero small 1 | `src/components/DesktopHero.jsx` | Line ~60 img src |
| Desktop hero small 2 | `src/components/DesktopHero.jsx` | Line ~65 img src |
| Mobile hero | `src/pages/HomePage.jsx` | Line ~45 img src |

