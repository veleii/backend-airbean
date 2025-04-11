import { Router } from "express";
import { addUser } from "../controllers/userController.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hämta användare");
});

router.post("/", addUser);

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Ta bort användare med id: ${id}`);
});

export default router;
