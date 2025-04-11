import express from "express";
import dotenv from "dotenv";
/* import { v4 as uuidv4 } from "uuid"; */

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
