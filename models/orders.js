const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: String,
    number: String,
    adress: String,
    goods: [{ type: Schema.Types.Array, ref: "goods" }],
    status: String,
    rentStartDate: Date,
    rentEndDate: Date,
  },
  { versionKey: false }
);

const Order = model("order", orderSchema);

module.exports = Order;
