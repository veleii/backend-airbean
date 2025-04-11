import joi from "joi"




export const userSchema = joi.object({
    name: joi.string().min(1).required(),
    password: joi.string().min(1).required(),
    email: joi.string().email().required(),
    createdAt: joi.date().default(Date.now)
  });

  export const productSchema = joi.object({
    id: joi.integer().positive().required(),
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.integer().positive().required(),
  }); 