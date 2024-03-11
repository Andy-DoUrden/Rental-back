const Goods = require("../../models/goods");

const listGoods = async (req, res) => {
  const { brand, price, from, to, page, limit } = req.query;
  const skip = (page - 1) * limit;
  const queryObject = {
    $and: [],
  };

  if (brand) {
    queryObject.$and.push({ make: brand });
  }

  if (price) {
    queryObject.$and.push({
      rentalPrice: { $lte: price },
    });
  }

  if (from) {
    queryObject.$and.push({ mileage: { $gte: from } });
  }

  if (to) {
    queryObject.$and.push({ mileage: { $lte: to } });
  }

  const totalCount = await Goods.countDocuments(queryObject);

  const goods = await Goods.find(queryObject).skip(skip).limit(limit);

  res.json({ goods, totalCount });
};

module.exports = listGoods;
