/* EJ KLAR KOD */
/* EJ KLAR KOD */

/* EJ KLAR KOD */
/* EJ KLAR KOD */

/* EJ KLAR KOD */
/* EJ KLAR KOD */

/* import Datastore from "nedb-promise";
import { getMenu } from "../models/productModel.js";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = new Datastore({
  filename: path.join(__dirname, "..", "db", "orders.db"),
  autoload: true,
});

export const createOrder = async (req, res) => {
  try {
    const { id, items } = req.body;

    if (!id || !Array.isArray(items)) {
      return res.status(400).json({ error: "Id och items krävs" });
    }

    const menu = await getMenu();

    const orderItems = items.map(({ productId, quantity }) => {
      const product = menu.find((p) => p.id === productId);
      if (!product) {
        throw new Error(`Produkt med id ${productId} hittades inte`);
      }
      return {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity,
        total: product.price * quantity,
      };
    });

    const orderTotal = orderItems.reduce((sum, item) => sum + item.total, 0);

    const newOrder = {
      orderId: uuidv4(),
      id,
      items: orderItems,
      total: orderTotal,
      createdAt: new Date().toISOString(),
    };

    await db.insert(newOrder);
    res.status(201).json(newOrder);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
 */
