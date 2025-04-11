import dotenv from "dotenv";
import express from "express";
import userRoutes from "./routes/userRoutes.js"; // 👈 DENNA MÅSTE FINNAS

/* import { v4 as uuidv4 } from "uuid"; */

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3030;

/* app.use("/products", productsRoute); */
/* app.use("/orders", ordersRoute); */
app.use("/users", userRoutes); 

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
