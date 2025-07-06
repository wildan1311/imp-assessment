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
php artisan serve --port 8080
```

COPY url of laravel project to env from [Next JS Project](../next-js-posts-crud)
eg: http://localhost:8080/api

### Technologies:
- Laravel 12
- Sqlite
- Laravel Resource API

---
