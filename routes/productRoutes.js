import { Router } from "express";
import { addOrder, getMenu } from "../controllers/productController.js";

const router = Router();

//Hämta meny
router.get("/", getMenu)

export default router;
