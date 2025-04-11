// funktioner för att hantera produktdata

/* import Joi from "joi"; */
import Datastore from "nedb-promise";
import fs from "fs/promises";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

/* const productSchema = Joi.object({
  id: Joi.integer().positive().required(),
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.integer().positive().required(),
}); */

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Datastore({
  filename: path.join(__dirname, "..", "db", "products.db"),
  autoload: true,
});

export const seedDatabase = async () => {
  try {
    const count = await db.count({});
    console.log("Antal produkter före seeding:", count);

    if (count === 0) {
      const seedFile = path.join(__dirname, "..", "db", "products.json");
      const data = await fs.readFile(seedFile, "utf8");
      const { coffeeMenu } = JSON.parse(data);

      const insertedDocs = await db.insert(coffeeMenu);

      console.log("seed-data importerad: ", insertedDocs);
    }
  } catch (error) {
    console.error("FEEEEEL", error);
  }
};

export const getMenu = async () => {
  try {
    const products = await db.find({});
    const sortedProducts = products.sort((a, b) => a.id - b.id);
    return sortedProducts;
  } catch (error) {
    throw new Error("Fel vid hämtning av produkter: " + error.message);
  }
};
