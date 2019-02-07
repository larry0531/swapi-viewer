# laravel-react-demo-larry

A Star war people list app

## Prerequisites

* Node.js and NPM
* PHP >= 7.1.3

## Getting Started

```bash
composer install
```

```bash
npm install
```

```bash
npm run dev
```

Duplicate `.env.example` and rename it `.env`

Then run:

```bash
php artisan key:generate
```

And finally, start the application:

```bash
php artisan serve
```

and visit [http://localhost:8000](http://localhost:8000) to see the application in action.

## Testing

Test laravel people json api

```bash
./vendor/bin/phpunit ./tests/Feature/testPeopleApi.php
```

## Built With

* [Laravel](https://laravel.com) - The PHP Framework For Web Artisans
* [React](https://reactjs.org) - A JavaScript library for building user interfaces