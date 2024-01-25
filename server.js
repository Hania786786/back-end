const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/conn");
const router = require("./routes/router");
const PORT = process.env.PORT || 9000;

// config db
connectDB();

// cors
app.use(
  cors({
    exposedHeaders: ["X-Total-Count"],
  })
);
// morgan check
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

// Middlewares
app.use(express.json()); // to parse req.body
app.use("/products", productRouter.router);
app.use("/category", categoryRouter.router);
app.use("/cart", cartRouter);
app.use(router);

app.get("/", (req, res) => {
  res.json({
    message: "Success",
    status: 200,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
