const express = require("express");
const router = express.Router();

// importing controllers



const updateProduct = require("../controllers/Product");
const brandController = require("../controllers/Brand");
const createBrand = require("../controllers/Brand");
const categoryController = require("../controllers/Category");
const fetchCategories = require("../controllers/Category");
const userController = require("../controllers/User");
const cartController = require("../controllers/Cart");
const getItemsByUserId = require("../controllers/Cart");
const updateCart = require("../controllers/Cart");
const deleteItemFromCart = require("../controllers/Cart");
const resetCart = require("../controllers/Cart");
const orderController = require("../controllers/Order");
const getOrdersByUserId = require("../controllers/Order");
const updateOrder = require("../controllers/Order");
const deleteOrder = require("../controllers/Order");
const fetchAllOrders = require("../controllers/Order");

/* ==================
            Products routes
            ======================*/
router.post("/products", createProduct);
router.get("/products", fetchAllProducts);
router.get("/products/:id", fetchProductById);
router.patch("/products/:id", updateProduct);

/* ==================
             Products brands routes
             ======================*/
router.post("/brands", createBrand);
router.get("/brands", fetchBrands);

/* ==================
             Products category routes
             ======================*/
router.post("/categories", createCategory);
router.get("/categories", fetchCategories);

/* ==================
             User routes
             ======================*/
router.get("/users/:id", fetchUserById);
router.patch("/users/:id", updateUserById);

/* ==================
             User  auth routes
             ======================*/

router.post("/users/signup", createUser);
router.post("/users/login", loginUser);

/* ==================
             cart routes
             ======================*/
router.post("/cart", addToCart);
router.get("/cart", getItemsByUserId);
router.patch("/cart/:id", updateCart);
router.delete("/cart/:id", deleteItemFromCart);

/* ==================
             order routes
             ======================*/
router.post("/orders", createOrder);
router.get("/orders", getOrdersByUserId);
router.get("/orders/:id", deleteOrder);
router.patch("/orders/:id", updateOrder);

/* ==================
             admin order routes
             ======================*/
router.get("/orders", fetchAllOrders);

module.exports = router;
