import { Router } from "express";
import { createOrder } from "../models/orderModel";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hämta orders");
});

router.post("/order", createOrder);

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.send(`Ta bort order med id: ${id}`);
});

export default router;
