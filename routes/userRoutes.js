import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hämta användare");
});

router.post("/", (req, res) => {
  res.send("Skapa en ny användare");
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Ta bort användare ${id}`);
});

export default router;
