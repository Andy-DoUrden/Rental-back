const express = require("express");
const ctrlInfo = require("../../controllers/info");
const wrapper = require("../../helpers/controllerWrapper");
const router = express.Router();

router.get("/orders", wrapper(ctrlInfo.addRent));

module.exports = router;
