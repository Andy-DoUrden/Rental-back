const Order = require("../../models/orders");

const updateOrder = async (req, res) => {
  const { orderId } = req.params;

  const updatedOrder = await Order.findByIdAndUpdate(orderId, req.body, {
    new: true,
  });

  res.json({ updatedOrder });
};

module.exports = updateOrder;
