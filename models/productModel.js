// funktioner för att hantera produktdata
import Datastore from "nedb-promise";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const productsDb = new Datastore({
  filename: path.join(__dirname, "..", "db", "products.db"),
  autoload: true,
});

//Seeda databas från json-filen
export const seedDatabase = async () => {
  try {
    const count = await productsDb.count({});
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

//Hämta meny
export const fetchMenu = async () => {
  try {
    const products = await productsDb.find({});
    const sortedProducts = products.sort((a, b) => a.id - b.id);
    return sortedProducts;
  } catch (error) {
    throw new Error("Fel vid hämtning av produkter: " + error.message);
  }
};
