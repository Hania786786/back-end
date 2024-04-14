const express = require("express");
const router = express.Router();


// category controller imports
const categoryController = require("../controllers/Category");
const fetchCategories = require("../controllers/Category");


/* ==================
             Products category routes
             ======================*/
router.post("/categories", createCategory);
router.get("/categories", fetchCategories);
