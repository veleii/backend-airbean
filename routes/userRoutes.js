import { Router } from "express";
import { addUser, loginUser, getCurrentOrder, getOrderHistory } from "../controllers/userController.js";
const router = Router();

//Skapa användare
router.post("/signup", addUser);

//Logga in användare
router.post("/signin", loginUser);

//Hämta aktiv order
router.get("/status", getCurrentOrder);

//Hämta orderhistorik
router.get("/history", getOrderHistory);


export default router;
