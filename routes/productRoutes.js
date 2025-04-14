import { Router } from "express";
import { getMenu } from "../models/productModel.js";

const router = Router();

router.get("/menu", async (req, res) => {
  try {
    const products = await getMenu()
    res.json(products);
  } catch (error) {
    res.status(500).json({ error : 'Fel vid hämtning av menyn'})
  }
});

router.post("/menu/order")



export default router;
