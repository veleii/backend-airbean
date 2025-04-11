import { userSchema } from "../middlewares/validation.js";
import { v4 as uuidv4 } from "uuid";
import { createUser, getUserByEmail } from "../models/userModel.js";

export async function addUser(req, res) {
  const { error, value } = userSchema.validate(req.body);
  if (error) {
    const errors = error.details.map((err) => err.message);
    return res.status(400).json({ errors });
  }

  try {
    const existingUser = await getUserByEmail(value.email);
    if (existingUser) {
      return res.status(409).json({ error: "Denna e-postadress finns redan registrerad" });
    }

    const user = {
      id: uuidv4(),
      ...value,
      createdAt: new Date().toISOString(),
    };

    const savedUser = await createUser(user);
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: "Kunde inte spara användare" });
  }
}
