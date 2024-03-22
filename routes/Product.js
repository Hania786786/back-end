const express = require("express");
const router = express.Router();

// importing controllers
const productController = require("../controllers/Product");
const createProduct = require("../controllers/Product");
const fetchAllProducts = require("../controllers/Product");
const fetchProductById = require("../controllers/Product");
const updateProduct = require("../controllers/Product");



            // Products routes
router.post("/products", createProduct);
router.get("/products", fetchAllProducts);
router.get("/products/:id", fetchProductById);
router.patch("/products/:id", updateProduct);
