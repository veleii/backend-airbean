import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hämta alla orders");
});



router.get("/:id", (req, res) => {
  res.send("Hämta en specifik orders");
});

router.post("/", (req, res) => {
  res.send("Skapa en ny order");
});


export default router;
