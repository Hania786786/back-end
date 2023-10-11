const Brand = require("../models/Brand");

// create brand  -- create -- post
const createBrand = async (req, res) => {
  try {
    const brand = new Brand(req.body); 
    const doc = await brand.save();
    res.status(201).send(doc);  
  } catch (e) {
    res.status(400).send(e);
  }
};

// fetch all brands -- get -- read
const fetchBrands = async (req, res) => {
    try {
        const brands = await Brand.find({}).exec();
        res.status(200).json(brands);
    } catch (e) {
        res.status(400).json(e);
    }
};



module.exports = fetchBrands;
module.exports = createBrand; 