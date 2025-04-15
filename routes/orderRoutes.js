import { Router } from "express";
import { addOrder, getOrderById, getOrderHistory } from "../controllers/orderController.js";
import authMiddleware from "../middlewares/auth.js";

const router = Router();

//Skapa order
router.post("/order", authMiddleware, addOrder);

//Hämta aktiv order
router.get("/:orderNr", authMiddleware, getOrderById);

//Hämta orderhistorik
router.get("/history", authMiddleware, getOrderHistory);

export default router;
