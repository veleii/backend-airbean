import express from "express";
import dotenv from "dotenv";


dotenv.config();
const app = express();
app.use(express.json());

const port = process.env.PORT || 3030;

app.listen(port, () => {
  console.log(`Servern körs på ${port}`);
});
