const express = require("express");
const router = express.Router();

// importing controllers
const productController = require("../controllers/Product");
// const createProduct = require("../controllers/Product");
const fetchAllProducts = require("../controllers/Product");
const fetchProductById = require("../controllers/Product");
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
router.post("/products", productController.createProduct);
router.get("/products", productController.fetchAllProducts);
router.get("/products/:id", productController.fetchProductById);
router.patch("/products/:id", productController.updateProduct);

/* ==================
             Products brands routes
             ======================*/
router.post("/brands", brandController.createBrand);
router.get("/brands", brandController.fetchBrands);

/* ==================
             Products category routes
             ======================*/
router.post("/categories", categoryController.createCategory);
router.get("/categories", categoryController.fetchCategories);

/* ==================
             User routes
             ======================*/
router.get("/users/:id", userController.fetchUserById);
router.patch("/users/:id", userController.updateUserById);

/* ==================
             User  auth routes
             ======================*/

router.post("/users/signup", userController.createUser);
router.post("/users/login", userController.loginUser);

/* ==================
             cart routes
             ======================*/
router.post("/cart", cartController.addToCart);
router.get("/cart", cartController.getItemsByUserId);
router.patch("/cart/:id", cartController.updateCart);
router.delete("/cart/:id", cartController.deleteItemFromCart);

/* ==================
             order routes
             ======================*/
router.post("/orders", orderController.createOrder);
router.get("/orders", orderController.getOrdersByUserId);
router.get("/orders/:id", orderController.deleteOrder);
router.patch("/orders/:id", orderController.updateOrder);

/* ==================
             admin order routes
             ======================*/
router.get("/orders", fetchAllOrders);

module.exports = router;
