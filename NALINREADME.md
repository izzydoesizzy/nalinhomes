# NALIN Homes Website Guide (Beginner-Friendly)

Welcome! This guide explains **where everything lives** in the project and **exactly where to edit** the landing page. No coding jargon needed.

---

## 1) Big Picture: How the Site Is Put Together

Think of the website like a stack of boxes:

- **The app starts in `src/main.tsx`** and loads the whole site.
- **`src/App.tsx` decides which page to show** (home page, seller page, or a “not found” page).
- **Each page is built from smaller sections** (like Hero, About, Testimonials), which live in `src/components`.

---

## 2) Where the Landing Page Lives (Home Page)

The **landing page** is the home page at `/` and is built in **this file**:

```
src/pages/Index.tsx
```

Inside that file, you’ll see a list of sections like:

- `Navigation`
- `Hero`
- `About`
- `StressTransformation`
- `ProcessPhilosophy`
- `Testimonials`
- `FAQ`
- `CTA`
- `Footer`

Each of those names is a **section you can edit**, and the actual content is in `src/components/`.

### Example: Want to update the Hero section?
Go to:

```
src/components/Hero.tsx
```

### Example: Want to update the FAQ section?
Go to:

```
src/components/FAQ.tsx
```

---

## 3) Where to Edit Each Landing Page Section

All landing page sections are inside **`src/components/`**:

| Section on the Page | File to Edit |
| --- | --- |
| Navigation (top menu) | `src/components/Navigation.tsx` |
| Hero (top headline area) | `src/components/Hero.tsx` |
| About | `src/components/About.tsx` |
| Stress Transformation | `src/components/StressTransformation.tsx` |
| Process & Philosophy | `src/components/ProcessPhilosophy.tsx` |
| Testimonials | `src/components/Testimonials.tsx` |
| FAQ | `src/components/FAQ.tsx` |
| Call To Action (CTA) | `src/components/CTA.tsx` |
| Footer | `src/components/Footer.tsx` |

> **Tip:** If you don’t see a section on the page, check `src/pages/Index.tsx` to see if it’s commented out.

---

## 4) Other Pages (Seller Page + 404)

There are other pages besides the landing page:

### Sellers Page (`/sellers`)
The page file:
```
src/pages/Sellers.tsx
```
The sections for this page are in:
```
src/components/seller/
```
Examples:
- `SellerHero.tsx`
- `SellingProcess.tsx`
- `SellerFAQ.tsx`

### 404 Page (Not Found)
```
src/pages/NotFound.tsx
```

---

## 5) Reusable UI Parts (Buttons, Cards, Forms, etc.)

You’ll see a lot of small, reusable building blocks here:

```
src/components/ui/
```

This folder contains buttons, forms, dialogs, tabs, etc. Use these when you want consistent styling.

---

## 6) Styling (Colors, Fonts, Global Styles)

There are a few styling files to know about:

- **Global styles:** `src/index.css`
- **App styles:** `src/App.css`
- **Tailwind settings:** `tailwind.config.ts`

If you want to adjust global colors or typography, start with **`src/index.css`** and **`tailwind.config.ts`**.

---

## 7) Images and Static Files

### Where images live
- **Project images:** `src/assets/`

### Public files (not imported into code)
- `public/`
  - `favicon.ico`
  - `robots.txt`
  - `placeholder.svg`

If you want a file to be available directly by URL, put it in **`public/`**.

---

## 8) Project Entry Points (How the App Starts)

These files are the “starting line” of the site:

- `src/main.tsx` → boots up the app
- `src/App.tsx` → decides which page to show
- `index.html` → the root HTML file

---

## 9) Quick “Where Do I Edit?” Cheat Sheet

- **Home page content:** `src/pages/Index.tsx` + `src/components/*`
- **Seller page content:** `src/pages/Sellers.tsx` + `src/components/seller/*`
- **Header menu:** `src/components/Navigation.tsx`
- **Footer:** `src/components/Footer.tsx`
- **Buttons/inputs/UI widgets:** `src/components/ui/*`
- **Global styling:** `src/index.css`
- **Images:** `src/assets/` or `public/`

---

## 10) Common Beginner Tasks

### ✅ Change the hero headline
Edit:
```
src/components/Hero.tsx
```

### ✅ Add or remove a landing page section
Edit the list in:
```
src/pages/Index.tsx
```

### ✅ Change the order of sections
In `src/pages/Index.tsx`, rearrange the components (e.g., move `<Testimonials />` above `<FAQ />`).

---

## 11) Run the Site Locally (Optional)

If you want to preview changes locally:

```bash
npm install
npm run dev
```

---

## Need Help Finding Something?

Start at **`src/pages/Index.tsx`** and follow the component names. The file names match the section names, so it’s easy to trace.

---

**You’ve got this!**
If you can click a file and read the headings inside, you’re already editing the site.
