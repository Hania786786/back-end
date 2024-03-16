const mongoose = require("mongoose")
const { Schema } = mongoose

const orderSchema = new mongoose.Schema({
  items: [{ type: [Schema.Mixed.Types], required: true }],
  items: {
    type: String,
    required: true,
  },
  totalAmount: { type: Number },
  totalItems: { type: Number },
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  PaymentMethod: {
    type: String,
    required: true,
  }, // we can add enum type
  status: { type: String, default: "pending" },
  selectedAddress: { type: Schema.Mixed.Types, required: true },
  selectedAddress: {
    type: String,
    required: true,
  },
});

// Turning _id to id
const virtual = orderSchema.virtual("id");
virtual.get(() => {
  return this._id;
});
orderSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

exports Order = mongoose.model("Order", orderSchema);
