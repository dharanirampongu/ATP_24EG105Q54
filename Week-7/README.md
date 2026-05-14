# Week 7: Capstone Project - Full-stack Blog Application

## Overview
Week 7 is focused on the development and deployment of a production-ready, full-stack Blog Application.

## Project Plan: Blog Application
A platform where users can register, log in, and manage blog posts with image support and toast notifications.

### Tech Stack
- **Frontend**: React 19, Tailwind CSS 4, Vite 8.
- **State Management**: Zustand.
- **Routing**: React Router 7.
- **Form Handling**: React Hook Form.
- **UI/UX**: React Hot Toast (for notifications).
- **API Client**: Axios.
- **Backend**: Node.js/Express 5.
- **Database**: MongoDB/Mongoose 9.
- **Authentication**: JWT, Bcryptjs, Cookie-parser (for persistent sessions).
- **File Storage**: Cloudinary (for image hosting) via Multer.

### Features
- User Registration and Login.
- Create, Read, Update, and Delete (CRUD) blog posts.
- Upload images for blog posts using Cloudinary.
- Secure session management with httpOnly cookies.
- Real-time feedback with Toast notifications.
- Fully responsive design.

### Backend Structure
- `server.js`: Main entry point.
- `models/`: Mongoose schemas for Users and Posts.
- `routes/`: API endpoints.
- `middlewares/`: Authentication and file upload handling.

### Frontend Structure
- `src/components/`: Reusable UI elements.
- `src/pages/`: Main application views.
- `src/store/`: Zustand state management.
