import { Router } from "express";
import { addOrder, getOrderById } from "../controllers/orderController.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

router.post("/order", authMiddleware, addOrder);

router.get("/:id", authMiddleware, getOrderById);

export default router;
