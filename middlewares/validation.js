import joi from "joi"


export const userSchema = joi.object({
    name: joi.string().min(2).required().messages({
      "string.min": "Namnet måste vara minst 2 tecken långt.",
      "any.required": "Namnet är obligatoriskt."
    }),
    password: joi.string().min(6).required().messages({
      "string.min": "Lösenordet måste vara minst 6 tecken långt.",
      "any.required": "Lösenordet är obligatoriskt."
    }),
    email: joi.string().email().required().messages({
      "string.email": "Ogiltigt e-postformat.",
      "any.required": "E-post är obligatoriskt."
    })
  });

  export const productSchema = joi.object({
    id: joi.number().integer().positive().required(),
    name: joi.string().required(),
    description: joi.string().required(),
    price: joi.number().integer().positive().required(),
  }); 