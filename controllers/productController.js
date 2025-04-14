import { v4 as uuidv4 } from "uuid";
import { fetchMenu, createOrder, fetchOrderById } from "../models/productModel.js";

export const getMenu = async (req, res) => {
  try {
    const menu = await fetchMenu();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: "Kunde inte hämta menyn." });
  }
};

export const addOrder = async (req, res) => {
  const { totalOrder } = req.body;
  if (!totalorder?.lenght) return res.status(400).json({ message: "Ingen order skickades." });

  const menu = await fetchMenu()
  let totalPrice = 0

  const orderItems = totalOrder.map(item => {
    const product = menu.find(product => product.id === item.id)

  })

};

const order = {
  orderNr: uuidv4(),
  orderDate: now.toISOString(),
  ETA: eta.toISOString(),
  delivered: false,
  totalPrice,
  totalOrder: orderItems,
};

getOrderById;
