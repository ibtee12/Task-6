# DigiTools — Premium Digital Tools

A responsive single-page marketplace for premium digital tools, built with React.
Browse products, add them to a cart, and check out — with toast notifications
throughout.

> The full feature specification lives in [REQUIREMENTS.md](./REQUIREMENTS.md).
> Reference designs are in [`The screens/`](./The%20screens/) (`Home.pdf`, `Cart.pdf`).

## Tech Stack

- **React.js** (Vite)
- **Tailwind CSS v4** + **DaisyUI**
- **React-Toastify** — alerts for add to cart, remove, and checkout
- **JavaScript (ES6+)**
- **JSON** for product data

## Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Project Structure

```
src/
  assets/        design assets and product icons
  App.jsx        application root
  main.jsx       entry point
  index.css      Tailwind + DaisyUI setup
```

## Build Progress

This project is built in 6 incremental steps (one commit per step):

1. **Scaffold** — Vite + React, Tailwind, DaisyUI, React-Toastify, assets, base layout
2. **Navbar + Banner + Stats**
3. **Product JSON data + product cards grid**
4. **Cart toggle, add/remove, totals, checkout**
5. **Steps + Pricing + CTA + Footer**
6. **Toastify alerts, button feedback, responsive polish**
