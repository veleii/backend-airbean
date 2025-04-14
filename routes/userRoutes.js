import { Router } from "express";
import { addUser, loginUser, getCurrentOrder, getOrderHistory } from "../controllers/userController.js";
const router = Router();

//Skapa användare
router.post("/user/signup", addUser);

//Logga in användare
router.post("/user/signin", loginUser);

//Hämta aktiv order
router.get("/user/status", getCurrentOrder);

//Hämta orderhistorik
router.get("/user/history", getOrderHistory);


export default router;
