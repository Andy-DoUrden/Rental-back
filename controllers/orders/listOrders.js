const Order = require("../../models/orders");

const listOrders = async (req, res) => {
  const { query = "", date, status, page = 1, limit = 10 } = req.query;

  const skip = (page - 1) * limit;

  const queryObject = {
    $and: [{ lastName: { $regex: query, $options: "i" } }],
  };

  if (date) {
    queryObject.$and.push({ date: { $lte: date } });
  }

  if (status) {
    queryObject.$and.push({ status: status });
  }

  const totalCount = await Order.countDocuments(queryObject);

  const orders = await Order.find(queryObject).skip(skip).limit(limit);

  res.json({ orders, totalCount });
};

module.exports = listOrders;
