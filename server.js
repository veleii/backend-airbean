import express from "express";
import dotenv from "dotenv";
import productsRoute from "./routes/productsRoute.js";
import ordersRoute from "./routes/ordersRoute.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3030;

app.use("/products", productsRoute);
app.use("/orders", ordersRoute);
app.use("/users", usersRoute);

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
