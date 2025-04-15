import { Router } from "express";
import { addOrder, getOrderById, getOrderHistory } from "../controllers/orderController.js";
import authMiddleware from "../middlewares/auth.js";
import validateMiddleware from "../middlewares/validate.js"
import { orderSchema, orderIdSchema } from "../middlewares/validation.js"

const router = Router();

//Skapa order
router.post("/order", authMiddleware, validateMiddleware(orderSchema),addOrder);

//Hämta orderhistorik
router.get("/history", authMiddleware, getOrderHistory);

//Hämta aktiv order
router.get("/:orderNr", authMiddleware, validateMiddleware(orderIdSchema), getOrderById);

export default router;
