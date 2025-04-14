import Datastore from "nedb-promises";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const orderDb = new Datastore({
  filename: path.join(__dirname, "..", "db", "orders.db"),
  autoload: true,
});



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
