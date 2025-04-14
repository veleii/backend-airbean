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

const orderDb = new Datastore({
  filename: path.join(__dirname, "..", "db", "orders.db"),
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

export const fetchMenu = async () => {
  try {
    const products = await productsDb.find({});
    const sortedProducts = products.sort((a, b) => a.id - b.id);
    return sortedProducts;
  } catch (error) {
    throw new Error("Fel vid hämtning av produkter: " + error.message);
  }
};

export const createOrder = async (order) => {
  try {
    const newOrder = await orderDb.insert(order);
    return newOrder;
  } catch (error) {
    throw new Error("Kunde inte spara odern: " + error.message);
  }
};

export const fetchOrderById = async (orderNr) => {
  try {
    const order = await orderDb.findOne({ orderNr });
    return order;
  } catch (error) {
    throw new Error("Kunde inte hämta order: " + error.message);
  }
};
