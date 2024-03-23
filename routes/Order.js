const express = require("express");
const router = express.Router();

const orderController = require("../controllers/Order");
const getOrdersByUserId = require("../controllers/Order");
const updateOrder = require("../controllers/Order");
const deleteOrder = require("../controllers/Order");
const fetchAllOrders = require("../controllers/Order");



             order routes
             ======================*/
router.post("/orders", createOrder);
router.get("/orders", getOrdersByUserId);
router.get("/orders/:id", deleteOrder);
router.patch("/orders/:id", updateOrder);
