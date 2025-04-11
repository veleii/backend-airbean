import { Router } from "express";
import fs from "fs";
import path from "path";

const router = Router();

const productsPath = path.resolve("db", "products.json");

const products = JSON.parse(fs.readFileSync(productsPath, "utf8"));

router.get("/", (req, res) => {
  res.json(products);
});

export default router;
