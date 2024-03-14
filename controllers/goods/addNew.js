const Goods = require("../../models/goods");

const { requestError } = require("../../helpers");

const addNew = async (req, res) => {
  const { name, type, characteristics, img, price } = req.body;

  if (!name || !type || !characteristics || !img || !price) {
    throw requestError(400, "Bad request");
  }

  if (
    typeof name !== "string" ||
    typeof type !== "string" ||
    typeof characteristics !== "object" ||
    typeof img !== "string" ||
    typeof price !== "number"
  ) {
    throw requestError(400, "Bad request");
  }

  if (price < 0) {
    throw requestError(400, "Bad request");
  }

  const good = await Goods.create(req.body);

  res.status(200).json({ good });
};

module.exports = addNew;
