const express = require("express");
const router = express.Router();

// importing controllers
const cartController = require("../controllers/Cart");
const getItemsByUserId = require("../controllers/Cart");
const updateCart = require("../controllers/Cart");
const deleteItemFromCart = require("../controllers/Cart");
const resetCart = require("../controllers/Cart");

/* ==================
             cart routes
             ======================*/
router.post("/cart", addToCart);
router.get("/cart", getItemsByUserId);
router.patch("/cart/:id", updateCart);
router.delete("/cart/:id", deleteItemFromCart);
router.delete("/cart/:id", resetCart);
