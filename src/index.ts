import { config } from "dotenv";
import express, { Application } from "express";

config();

const app: Application = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
