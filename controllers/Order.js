const Order = require("../models/Order");

// create order
const createOrder = async (req, res) => {
    // response 200 but null response
    try {
        const cart = new Cart(req.body);
        const order = await cart.save();
        res.status(201).json(order);
    } catch (error) {
        res.status(400).json(`Error in adding order: ${error}`);
    }   
};

// fetch orders of user
const getOrdersByUserId = async (req, res) => {
    try {
        const {user} = req.query;
        const order = await Order.find({user});
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json(`Error in fetching orders: ${error}`);
    }
};

// update order
const updateOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const order = await Order.findByIdAndUpdate(id, req.body, {new: true});
        res.status(200).json(order);
    }catch (error) {
        res.status(400).json(`Error in updating order: ${error}`);
    }
}

// delete order
const deleteOrder = async (req, res) => {
    const {id} = req.params;
    try {
        const order = await Order.findByIdAndDelete(id);
        res.status(200).json(order);
    } catch (error) {
        res.status(400).json(`Error in deleting order: ${error}`);
    }
}

module.exports = createOrder;
module.exports = getOrdersByUserId;
module.exports = updateOrder;
module.exports = deleteOrder;