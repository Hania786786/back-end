const mongoose = require("mongoose");
const { Schema } = mongoose;


const cartSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be greater than 0"],
    max: [100000, "Price must be less than 100000"],
  },
  discountPercentage: {
    type: Number,
    required: true,
    min: [0, "Discount must be greater than or equal to 0%"],
    max: [100, "Discount must be less than or equal to 100%"],
  },

  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: {
    type: String,
    required: true,
    max: [1, "Thumbnail must be less than or equal to 1"],
  },
  quantity: { type: Number, required:true},
  userId: { type: Schema.Types.ObjectId, ref: "User", required:true},
  productId: { type: Schema.Types.ObjectId, ref: "Product", required:true},
  // This works like foreign key.
});

// Turning _id to id
const virtual = cartSchema.virtual("id");
virtual.get(()=>{
  return this._id;
});
cartSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {delete ret._id}
});

const Cart = mongoose.model("Cart", cartSchema);
module.exports = Cart;
