const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config();
const connectDB = async () => {
  try {
    // const connectionDB = await mongoose.connect("mongodb://127.0.0.1:27017/ecommerce");
    // ADD your Own MONGODB Connection     //Malik Arslan Asif
    const connectionDB = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // console.log("Connected to Mongodb database");
    console.log(
      `MongoDB Connected: ${connectionDB.connection.host}`.bgGreen.white
    );
  } catch (error) {
    console.log(`Error in Mongoose connection: ${error}`);
  }
};

module.exports = connectDB;
