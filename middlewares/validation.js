import joi from "joi"




export const userSchema = joi.object({
    name: joi.string().min(1).required(),
    password: joi.string().min(4).required(),
    email: joi.string().email().required(),
    createdAt: joi.date().default(Date.now)
  });