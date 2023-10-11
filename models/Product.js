const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
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
  rating: {
    type: Number,
    required: true,
    min: [0, "Rating must be greater than or equal to 0 stars"],
    max: [5, "Rating must be less than or equal to 5 stars"],
    unique: true,
    default: 0,
  },
  stock: {
    type: Number,
    required: true,
    min: [0, "Stock must be greater or equal to than 0"],
    default: 0,
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: {
    type: String,
    required: true,
    max: [1, "Thumbnail must be less than or equal to 1"],
  },
  images: {
    type: [String],
    required: true,
    min: [1, "Images must be greater than 0"],
    max: [4, "Images must be less than or equal to 4"],
  },
  deleted: { type: Boolean, default: false },
});

// Turning _id to id
const virtual = productSchema.virtual("id");
virtual.get(()=>{
  return this._id;
});
productSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {delete ret._id}
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
