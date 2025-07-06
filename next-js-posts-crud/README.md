## A. Next.js Project - CRUD Posts App (with DaisyUI)

### Features:
- Built with Next.js App Router (app/ directory)
- Full CRUD interface:
  - List posts
  - Create post
  - Edit post
  - Show detail
  - Delete post
- UI components with TailwindCSS and DaisyUI
- Data fetch from Laravel backend (REST API)

### Installation:
```bash
cd next-js-posts-crud
npm install
npm run build
npm run start
cp example.env .env.local
```
Change ENV NEXT_PUBLIC_API_BASE_URL to be actual url's project laravel on [Laravel backend API](../post-api)

### Technologies:
- Next.js (App Router)
- DaisyUI + TailwindCSS
- REST API (Laravel Backend)