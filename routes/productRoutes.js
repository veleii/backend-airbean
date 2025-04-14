import { Router } from "express";
import { addOrder, getMenu } from "../controllers/productController.js";

const router = Router();

router.get("/", getMenu)





export default router;
