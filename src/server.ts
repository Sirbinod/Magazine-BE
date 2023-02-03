import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import { connect } from "mongoose";

import Server from "./index";

const app: Application = express();

new Server(app);
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// create mongoose connection
async () => {
  const mongoose = await connect(
    "mongodb+srv://Sarbin:sarbin@cluster0.iztcq.mongodb.net/?retryWrites=true&w=majority"
  );
  await mongoose.connection;
};

app
  .listen(port, () =>
    console.log(`🚀 Server ready and listening at ==> http://localhost:${port}`)
  )
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("server startup error: address already in use");
    } else {
      console.log(err);
    }
  });
