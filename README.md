# 🛒 E-Commerce MERN Stack Application

A full-stack e-commerce application built with MongoDB, Express.js, React, and Node.js (MERN Stack). This project features user authentication, product management, shopping cart functionality, and order processing.

## ✨ Features

### User Features
- 🔐 User authentication (Sign up, Login, Logout)
- 🛍️ Browse products
- 🔍 View product details
- 🛒 Add/remove items to/from cart
- 📦 Place orders
- 📋 View order history
- 👤 User profile management

### Admin Features
- ➕ Add new products
- ✏️ Edit existing products
- 🗑️ Delete products
- 📊 Manage orders
- 👥 View user data

## 🚀 Tech Stack

### Frontend
- **React** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Navigation
- **Axios** - HTTP client
- **Tailwind CSS** - Styling
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
ecommerce-mern/
├── ecommerce-backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── authController.js     # Authentication logic
│   │   ├── cartController.js     # Cart operations
│   │   ├── orderController.js    # Order management
│   │   └── productController.js  # Product CRUD
│   ├── middlewares/
│   │   └── authMiddleware.js     # JWT verification
│   ├── models/
│   │   ├── User.js               # User schema
│   │   ├── Product.js            # Product schema
│   │   ├── Cart.js               # Cart schema
│   │   └── Order.js              # Order schema
│   ├── routes/
│   │   ├── auth.js               # Auth routes
│   │   ├── cart.js               # Cart routes
│   │   ├── order.js              # Order routes
│   │   └── products.js           # Product routes
│   ├── server.js                 # Entry point
│   └── package.json
│
└── ecommerce-react/
    ├── public/                   # Static files
    ├── src/
    │   ├── assets/              # Images, icons, etc.
    │   ├── components/
    │   │   ├── AdminPage.jsx
    │   │   ├── CartCard.jsx
    │   │   ├── CartList.jsx
    │   │   ├── FeaturedProducts.jsx
    │   │   ├── Footer.jsx
    │   │   ├── Header.jsx
    │   │   ├── Hero.jsx
    │   │   ├── LoginForm.jsx
    │   │   ├── OrdersPage.jsx
    │   │   ├── OrderSummary.jsx
    │   │   ├── PrivateRoute.jsx
    │   │   ├── ProductCard.jsx
    │   │   ├── ProductList.jsx
    │   │   ├── ProtectedRoute.jsx
    │   │   └── SignupForm.jsx
    │   ├── layouts/
    │   │   └── HomeLayout.jsx
    │   ├── App.jsx              # Main app component
    │   ├── main.jsx             # Entry point
    │   └── index.css            # Global styles
    ├── index.html
    ├── vite.config.js
    ├── vercel.json
    └── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ecommerce-mern
   ```

2. **Set up the Backend**
   ```bash
   cd ecommerce-backend
   npm install
   ```

3. **Set up the Frontend**
   ```bash
   cd ../ecommerce-react
   npm install
   ```

### Running the Application

1. **Start MongoDB** (if running locally)
   ```bash
   mongod
   ```

2. **Start the Backend Server**
   ```bash
   cd ecommerce-backend
   npm start
   ```
   The backend server will run on `http://localhost:5000` (or your configured port)

3. **Start the Frontend Development Server**
   ```bash
   cd ecommerce-react
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

4. **Open your browser** and navigate to `http://localhost:5173`

## 🔐 Environment Variables

### Backend (.env)

Create a `.env` file in the `ecommerce-backend` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/ecommerce
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/ecommerce

# JWT Secret
JWT_SECRET=your_jwt_secret_key_here

# JWT Expiration
JWT_EXPIRE=7d

# CORS Origin
CORS_ORIGIN=http://localhost:5173
```

### Frontend (.env)

Create a `.env` file in the `ecommerce-react` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

## 📡 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Cart
- `GET /api/cart` - Get user cart (protected)
- `POST /api/cart` - Add item to cart (protected)
- `PUT /api/cart/:id` - Update cart item (protected)
- `DELETE /api/cart/:id` - Remove item from cart (protected)

### Orders
- `GET /api/orders` - Get user orders (protected)
- `GET /api/orders/:id` - Get single order (protected)
- `POST /api/orders` - Create order (protected)
- `GET /api/orders/admin/all` - Get all orders (admin only)


