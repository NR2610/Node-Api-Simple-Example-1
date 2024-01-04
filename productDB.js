require("dotenv").config();
const connectDB = require("./db/connect.js");
const Product = require("./model/product.js");
const productjson = require("./product.json");
const start = async () => {
  try {
    await connectDB(process.env.MONGOOSE_URI);
    await Product.deleteMany();
    await Product.create(productjson);
    console.log("success Naresh");
  } catch (error) {
    console.log(error);
  }
};
start();
