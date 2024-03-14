const Order = require("../../models/orders");

const { requestError } = require("../../helpers");

const addOrder = async (req, res) => {
  const { firstName, lastName, email, number, adress, goods, rentStartDate, rentEndDate } = req.body;

  if (!firstName || !lastName || !email || !number || !adress || !goods || !rentStartDate || !rentEndDate) {
    throw requestError(400, "Bad request");
  }

  if (
    typeof firstName !== "string" ||
    typeof lastName !== "string" ||
    typeof email !== "string" ||
    typeof number !== "string" ||
    typeof adress !== "string" ||
    typeof goods !== "object" ||
    typeof rentStartDate !== "string" ||
    typeof rentEndDate !== "string"
  ) {
    throw requestError(400, "Bad request");
  }

  const order = await Order.create({ ...req.body, status: "pending" });

  res.status(200).json({ order });
};

module.exports = addOrder;
