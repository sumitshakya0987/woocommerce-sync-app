# 🛒 WooCommerce Product Sync Platform

A full-stack web application built to **create, manage, and display products** in an intuitive interface. This platform mimics a simplified WooCommerce dashboard with user authentication, product creation, listing, and secure session management.

## 🚀 Project Objective

To build a responsive, attractive product management platform using:

- **React.js + Bootstrap** for the frontend
- **Node.js + Express.js + MongoDB** for the backend
- **JWT-based authentication**
- **PII-safe practices** for user and product data

---

## ✨ Features

- 🔐 User Registration and Login with secure JWT Auth
- 📦 Create new products
- 🧾 View all created products in a stylish grid/table
- 🚪 Logout and Auth-protected routes
- 📱 Fully responsive and mobile-friendly UI

---

## 🧰 Tech Stack

**Frontend:**
- React.js (Vite)
- Bootstrap 5
- React Router DOM
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Tokens)
- CORS

---

## 📁 Folder Structure
```bash
project-root/
│
├── client/ # React Frontend
│ ├── components/ # Reusable Components (Navbar)
│ ├── pages/ # Login, Regiter , Dashboard , ProductForm , ProductPage
│ ├── context/ # Auth Context
│ ├── services/ # API Service Layer (Axios)
│ ├── styles/ # Custom styles (optional)
│ └── main.jsx # App Entry
│
├── server/ # Node Backend
│ ├── controllers/ # Auth & Product Controllers
│ ├── routes/ # Express Routes
│ ├── models/ # Mongoose Schemas
│ ├── middlewares/ # Auth Middleware
│ ├── config/ # DB Config
│ └── index.js # Server Entry
│
└── README.md # Project Instructions
```
## 🧪 Setup Instructions

Clone the repository:

```bash
git clone https://github.com/your-username/woocommerce-product-sync-platform.git
cd woocommerce-product-sync-platform
```
```bash
cd server
npm install
```
```bash
PORT=5000
MONGODB_URI=mongodb://localhost:27017/woocommerce
JWT_SECRET=your_secret_key
```
```bash
npm run start
```
```bash
cd client
npm install
npm run dev
```
```bash
(http://localhost:5173)
```




