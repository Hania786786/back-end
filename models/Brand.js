const mongoose = require("mongoose");
const { Schema } = mongoose;

const brandSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
    unique: true,
    // Arslan Test
  },
  value: {
    type: String,
    required: true,
    unique: true,
  },
});

// Turning _id to id
const virtual = brandSchema.virtual("id");
virtual.get(() => {
  return this._id;
});
brandSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: (doc, ret) => {
    delete ret._id;
  },
});

exports.Brand = mongoose.model("Brand", brandSchema)
