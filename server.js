import dotenv from "dotenv";
import express from "express";
import productRoute from './routes/productRoutes.js'
import orderRoute from "./routes/orderRoutes.js";
import userRoute from './routes/userRoutes.js'
import infoRoute from './routes/infoRoutes.js'
import { seedDatabase } from "./models/productModel.js";
import { seedCompanyInfo } from "./models/infoModel.js";

dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3030;

app.use("/products", productRoute);
app.use("/orders", orderRoute);
app.use("/user", userRoute);
app.use("/info", infoRoute)

const startServer = async () => {
  try {
    await seedDatabase();
    await seedCompanyInfo()
    console.log('Databaserna är seedade, startar servern...');
    
    app.listen(port, () => {
      console.log(`Servern körs på ${port}`);
    });
  } catch (error) {
    console.error('Fel vid seeding av databasen:', error);
  }
};

startServer();


