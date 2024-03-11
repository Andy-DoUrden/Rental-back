const { Schema, model } = require("mongoose");

const orderSchema = new Schema(
  {
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    number: String,
    adress: String,
    goods: [{ type: Schema.Types.ObjectId, ref: "goods" }],
    status: String,
    rentStartDate: Date,
    rentEndDate: Date,
  },
  { versionKey: false }
);

const Order = model("order", orderSchema);

module.exports = Order;
