import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hämta orders");
});

router.post("/", (req, res) => {
  res.send("Skapa en ny order");
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Ta bort order ${id}`);
});

export default router;
