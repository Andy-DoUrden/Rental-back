const express = require("express");
const ctrlInfo = require("../../controllers/orders");
const wrapper = require("../../helpers/controllerWrapper");
const router = express.Router();

router.get("/", wrapper(ctrlInfo.listOrders));

router.post("/addOrder", wrapper(ctrlInfo.addOrder));

router.patch("/updateOrder/:orderId", wrapper(ctrlInfo.updateOrder));

module.exports = router;
