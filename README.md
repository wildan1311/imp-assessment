# 📘 README - CRUD Projects IMP Assesment (Next.js, Laravel, Django)

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
cp example.env .env.local
npm run build
npm run start
```
Change ENV NEXT_PUBLIC_API_BASE_URL to be actual url's project [Laravel backend API](post-api) eg: http://localhost:8080/api

### Technologies:
- Next.js (App Router)
- DaisyUI + TailwindCSS
- REST API (Laravel Backend)

---

## B. Laravel Project - REST API for Posts

### Features:
- Posts table migration
- Seeder with dummy data
- RESTful endpoints for:
  - `GET /api/posts`
  - `GET /api/posts/{id}`
  - `POST /api/posts`
  - `PUT /api/posts/{id}`
  - `DELETE /api/posts/{id}`
- Pagination on post list

### Setup:
```bash
cd post-api
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve --port 8080
```

COPY url of laravel project to env from [Next JS Project](next-js-posts-crud)

### Technologies:
- Laravel 12
- Sqlite
- Laravel Resource API

---

## C. Django Project - Auth + User CRUD

### Features:
- Auth system:
  - Sign up
  - Sign in
  - Sign out
- User CRUD (only accessible if authenticated)
- Form validation using Django Forms
- Styled using DaisyUI via TailwindCDN

### Setup:
```bash
cd auth_crud_project
python3 -m pip install -r requirements.txt
python3 manage.py migrate
python3 manage.py runserver
```

### Technologies:
- Django 4+
- Built-in auth views
- Templates with Tailwind + DaisyUI

---

## Hosting & Delivery
- Each project placed in its own GitHub repository
- README present in each project
- Simple UI using DaisyUI
- Functional focus over design complexity

Let us know if you'd like live demo links or deployment setup.
