import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hämta alla orders");
});

router.get("/user", (req, res) => {
  res.send("Hämta alla orders för en specifik användare");
});

router.get("/:id", (req, res) => {
  res.send("Hämta en specifik orders");
});

router.post("/", (req, res) => {
  res.send("Skapa en ny order");
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Ta bort order med id: ${id}`);
});

export default router;
