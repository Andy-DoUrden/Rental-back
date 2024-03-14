const Goods = require("../../models/goods");

const { requestError } = require("../../helpers");

const getOne = async (req, res) => {
  const { goodId } = req.params;
  const good = await Goods.findById(goodId);

  if (!good) {
    throw requestError(404, "Good not found");
  }

  res.status(200).json({ good });
};

module.exports = getOne;
