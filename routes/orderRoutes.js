import { Router } from "express";
import { addOrder, getOrderById } from "../controllers/orderController.js"
const router = Router();

router.post("/order", addOrder)


router.get("/:id", getOrderById)


export default router;
