import { Router } from "express";
import { addOrder, getOrderById, getOrderHistory } from "../controllers/orderController.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

//Skapa order
router.post("/order", authMiddleware, addOrder);

//Hämta aktiv order
router.get("/:id", authMiddleware, getOrderById);

//Hämta orderhistorik
router.get("/history", getOrderHistory);

export default router;
