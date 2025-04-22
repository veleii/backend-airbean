import { Router } from "express";
import { addUser, loginUser } from "../controllers/userController.js";
import validateMiddleware from "../middlewares/validate.js"
import { userSchema  } from "../middlewares/validation.js"


const router = Router();

//Skapa användare
router.post("/signup", validateMiddleware(userSchema), addUser);

//Logga in användare
router.post("/signin", validateMiddleware(userSchema), loginUser);

export default router;
