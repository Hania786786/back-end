const  mongoose = require('mongoose');
const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    console.log(
      "Connected to Mongodb database");
  } catch (error) {
    console.log(`Error in Mongoose connection: ${error}`);
  }
};

module.exports = connectDB;
