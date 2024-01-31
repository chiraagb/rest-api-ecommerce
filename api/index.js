import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import productRouter from "./routes/product.route.js";
import variantRouter from "./routes/variant.route.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Welcome to Express");
});

app.use("/api/routes", productRouter);
app.use("/api/routes", variantRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB connected...");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000..!!");
});

export default app;
