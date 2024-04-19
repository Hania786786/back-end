const express = require("express");
const router = express.Router();

const fetchUserById = require("../controllers/User");
const updateUserById = require("../controllers/User");

/* ==================
             User routes // ShahbazKhalidDev 
             ======================*/
router.get("/users/:id", fetchUserById);
router.patch("/users/:id", updateUserById);
