import express from "express";
import dotenv from "dotenv";
import productsRoute from "./routes/productRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3030;

app.use("/products", productsRoute);

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
