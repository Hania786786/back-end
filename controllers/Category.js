const Category = require("../models/Category");


// create category  -- create -- post
const createCategory = async (req, res) => {
  try {
    const category = new Category(req.body); 
    const doc = await category.save();
    res.status(201).send(doc);  
  } catch (e) {
    res.status(400).send(e);
  }
};

// fetch all categories -- get -- read
const fetchCategories = async (req, res) => {
    try {
        const categories = await Category.find({}).exec();
        res.status(200).json(categories);
    } catch (e) {
        res.status(400).json(e);
    }
};


module.exports = fetchCategories; 
module.exports = createCategory;