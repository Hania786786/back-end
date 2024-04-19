const express = require("express");
const router = express.Router();

/* ==================
             User routes // ShahbazKhalidDev 
             ======================*/
router.get("/users/:id", fetchUserById);
router.patch("/users/:id", updateUserById);
