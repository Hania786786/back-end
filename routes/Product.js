const express = require("express");
const router = express.Router();

// importing controllers
const productController = require("../controllers/Product");
const createProduct = require("../controllers/Product");
const fetchAllProducts = require("../controllers/Product");
const fetchProductById = require("../controllers/Product");
const updateProduct = require("../controllers/Product");



