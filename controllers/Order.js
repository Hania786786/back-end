const Order = require("../models/Order");
// create order
const createOrder = async (req, res) => {
  // response 200 but null response
  try {
    console.log("test1");
    const cart = new Order(req.body);
    const order = await cart.save();
    res.status(201).json(order);
  } catch (error) {
    res.status(400).json(`Error in adding order: ${error}`);
  }
};

// fetch orders of user
const getOrdersByUserId = async (req, res) => {
  try {
    const { userId } = req.params;
    const order = await Order.find({ user: userId });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json(`Error in fetching orders: ${error}`);
  }
};

// update order
const updateOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json(`Error in updating order: ${error}`);
  }
};

// delete order
const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const order = await Order.findByIdAndDelete(id);
    res.status(200).json(order);
  } catch (error) {
    res.status(400).json(`Error in deleting order: ${error}`);
  }
};

// fetchAllOrders for admin
const fetchAllOrders = async (req, res) => {
  // TODO: Test this api
  let query = Order.find({ deleted: { $ne: true } });
  let totalOrdersQuery = Order.find({ deleted: { $ne: true } });

  //  // for sorting filter
  if (req.query._sort && req.query._order) {
    // TODO: Sorting through discounted price
    query = query.sort({ [req.query._sort]: req.query._order });
    totalOrdersQuery = totalOrdersQuery.sort({
      [req.query._sort]: req.query._order,
    });
  }

  // // pagination filter
  const totalDocs = await totalOrdersQuery.count().exec(); // no. of documents
  if (req.query._page && req.query._limit) {
    const pageSize = req.query._limit;
    const page = req.query._page;
    query = query.skip(pageSize * (page - 1)).limit(pageSize);
    totalProductsQuery = totalProductsQuery
      .skip(pageSize * (page - 1))
      .limit(pageSize);
  }

  try {
    const product = await query.exec();
    res.set("X-Total-Count", totalDocs);
    res.status(200).json(product);
  } catch (e) {
    res.status(400).json(e);
  }
};

module.exports = {
  createOrder,
  getOrdersByUserId,
  updateOrder,
  deleteOrder,
};
