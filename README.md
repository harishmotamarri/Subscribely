# Subscribely

A full-stack subscription management platform that enables users to discover, subscribe to, and manage subscription plans through a modern web interface.

![Project Screenshot](screenshots/home.png)

## Demo

Live Demo: https://subscribely-mjinvk1xy-harishs-projects-40940d50.vercel.app/

## Overview

Subscribely is designed to simplify subscription management by providing a centralized platform where users can browse available plans, enroll in subscriptions, and track their active subscriptions. Administrators can manage plans and monitor user enrollments through a dedicated dashboard.

## Features

### User Features

* User Registration and Login
* Secure Authentication
* Browse Subscription Plans
* Subscribe to Available Plans
* View Active Subscriptions
* User Dashboard
* Responsive Interface

### Admin Features

* Manage Subscription Plans
* View User Enrollments
* Update Plan Details
* Monitor Platform Activity

## Tech Stack

### Frontend

* React
* Vite
* TypeScript
* CSS

### Backend

* Django
* Django REST Framework

### Database

* SQLite

### Tools

* Git
* GitHub
* Postman

## Screenshots

### Home Page

![Home](screenshots/home.png)

### Subscription Plans

![Plans](screenshots/plans.png)

### User Dashboard

![Dashboard](screenshots/dashboard.png)

### Authentication

![Login](screenshots/login.png)

## Architecture

```text
React Frontend
       ↓
REST API
       ↓
Django Backend
       ↓
SQLite Database
```

## Project Structure

```text
subscribely/
│
├── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── assets/
│
├── backend/
│   ├── api/
│   ├── models/
│   ├── serializers/
│   ├── views/
│   └── urls/
│
├── screenshots/
│
├── README.md
├── .env.example
└── requirements.txt
```

## Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/subscribely.git
cd subscribely
```

### Backend Setup

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

### Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

## Environment Variables

Create a `.env` file and configure the required variables.

```env
SECRET_KEY=your_secret_key
DEBUG=True
DATABASE_URL=your_database_url
```

## API Documentation

### Register User

```http
POST /api/register/
```

### Login User

```http
POST /api/login/
```

### Get Subscription Plans

```http
GET /api/plans/
```

### Subscribe to Plan

```http
POST /api/subscribe/
```

### User Dashboard

```http
GET /api/dashboard/
```

## Challenges & Learnings

* Built a complete full-stack application using React and Django.
* Implemented authentication and protected routes.
* Designed and consumed REST APIs.
* Managed frontend-backend communication.
* Improved understanding of state management and API integration.

## Future Improvements

* Payment Gateway Integration
* Subscription Renewal Reminders
* Email Notifications
* Analytics Dashboard
* Role-Based Access Control
* Cloud Database Deployment

## Contributing

Contributions, suggestions, and improvements are welcome.


## Author

Harish Motamarri

GitHub: https://github.com/harishmotamarri
