const mongoose = require("mongoose");
const { Schema } = mongoose;
const categorySchema = new mongoose.Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

// Turning _id to id
const virtual = categorySchema.virtual("id");
virtual.get(()=>{
  return this._id;
});
categorySchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {delete ret._id}
});

const Category = mongoose.model("Category", categorySchema);
module.exports = Category;
