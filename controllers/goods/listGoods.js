const Goods = require("../../models/goods");

const listGoods = async (req, res) => {
  const { query = "", type, page, limit } = req.query;
  const skip = (page - 1) * limit;
  const queryObject = {
    $and: [{ name: { $regex: query, $options: "i" } }],
  };

  if (type) {
    queryObject.$and.push({ type: type });
  }

  const totalCount = await Goods.countDocuments(queryObject);

  const goods = await Goods.find(queryObject).skip(skip).limit(limit);

  res.json({ goods, totalCount });
};

module.exports = listGoods;
