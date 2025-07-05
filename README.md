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
npm install
npm run build
npm run start
```

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
composer install
cp .env.example .env
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

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
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
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
