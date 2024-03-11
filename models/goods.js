const { Schema, model } = require("mongoose");

const goodsSchema = new Schema(
  {
    id: Number,
    name: String,
    type: String,
    characteristics: Object,
    img: String,
    price: Number,
  },
  { versionKey: false, timestamps: false }
);

const Goods = model("goods", goodsSchema);

module.exports = Goods;
