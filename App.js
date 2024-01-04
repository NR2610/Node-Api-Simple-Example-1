require("dotenv").config();

const express = require("express");

const app = express();

const connectDB = require("./db/connect.js");

const PORT = process.env.PORT || 5001;

const product_route = require("./routes/product.js");

app.get("/", (req, res) => {
  res.send("Hii Naaresh is listen");
});

//middleware betwen'en controller and route folder working
app.use("/api/product", product_route);

const Start = async () => {
  try {
    await connectDB(process.env.MONGOOSE_URI);
    app.listen(PORT, () => {
      console.log(`${PORT} port is Working`);
    });
  } catch (error) {
    console.log(error);
  }
};

Start();
