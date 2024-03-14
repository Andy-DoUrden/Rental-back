const express = require("express");
const ctrlGoods = require("../../controllers/goods");
const wrapper = require("../../helpers/controllerWrapper");
const router = express.Router();

router.get("/getOne/:goodId", wrapper(ctrlGoods.getOne));

router.get("/catalog", wrapper(ctrlGoods.listGoods));

router.post("/addNew", wrapper(ctrlGoods.addNew));

module.exports = router;
