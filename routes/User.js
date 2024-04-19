const express = require("express");
const router = express.Router();

/* ==================
             User routes // ShahbazKhalidDev 
             ======================*/
router.get("/users/:id", userController.fetchUserById);
router.patch("/users/:id", userController.updateUserById);
