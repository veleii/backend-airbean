export const validate = (schema, property = "body") => {
  return (res, req, next) => {
    const { error } = schema.validate(req[property]);
    if (error) {
      const errors = error.details.map((detail) => detail.message);
      return res.status(400).json({ errors });
    }
    next();
  };
};
