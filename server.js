import dotenv from "dotenv";
import express from "express";
import dotenv from "dotenv";
import productRoute from './routes/productRoutes.js'
import orderRoute from "./routes/orderRoutes.js";
import userRoute from './routes/userRoutes.js'
import { seedDatabase } from "./models/productModel.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3030;

app.use("/products", productRoute);
app.use("/orders", orderRoute);
app.use("/users", userRoute);

const startServer = async () => {
  try {
    await seedDatabase();
    console.log('Databasen är seedad, startar servern...');
    
    app.listen(port, () => {
      console.log(`Servern körs på ${port}`);
    });
  } catch (error) {
    console.error('Fel vid seeding av databasen:', error);
  }
};

startServer();


