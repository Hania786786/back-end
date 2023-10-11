const Cart = require("../models/Cart");

// add to cart
const addToCart = async (req, res) => {
    // response 200 but not data is not saved into db
    try {
        const cart = new Cart(req.body);
        const doc = await cart.save();
        const result = await doc.populate("product");
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(`Error in adding to cart: ${error}`);
    }   
};

// fetch cart items of user
const getItemsByUserId = async (req, res) => {
    try {
        const {user} = req.query;
        const cartItems = await Cart.find({user}).populate("product");
        res.status(200).json(cartItems);
    } catch (error) {
        res.status(400).json(`Error in getting cart: ${error}`);
    }
};

// Update cart
const updateCart = async (req, res) => {
    const {id} = req.params;
    try {
        const cart = await Cart.findByIdAndUpdate(id, req.body, {new: true});
        const result = await doc.populate("product");
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(`Error in updating cart: ${error}`);
    }
};

// Delete an item from cart
const deleteItemFromCart = async (req, res) => {
    const {id} = req.params;
    try {
        const cart = await Cart.findByIdAndDelete(id);
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json(`Error in deleting an item from cart: ${error}`);
    }
};

// Reset cart after order success
const resetCart = async (req, res) => {
    try {
        const cart = await Cart.deleteMany({user: req.params.id});
        res.status(200).json(cart);
    } catch (error) {
        res.status(400).json(`Error in reseting cart: ${error}`);
    }
};

module.exports = addToCart;
module.exports = getItemsByUserId;
module.exports = updateCart;
module.exports = deleteItemFromCart;