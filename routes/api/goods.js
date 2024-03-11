const express = require("express");
const ctrlGoods = require("../../controllers/goods");
const wrapper = require("../../helpers/controllerWrapper");
const router = express.Router();

router.get("/getOne/:goodsId", wrapper(ctrlGoods.getOne));

router.get("/catalog", wrapper(ctrlGoods.listGoods));

module.exports = router;
