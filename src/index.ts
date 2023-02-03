import { Application, json, urlencoded } from "express";
import * as fs from "fs";
import { WriteStream } from "fs";
import path from "path";
import morgan from "morgan";
import helmet from "helmet";
import Routes from "./routes";

export default class Server {
  constructor(app: Application) {
    this.config(app);
    new Routes(app);
  }

  public async config(app: Application): Promise<void> {
    const accessLogStream: WriteStream = fs.createWriteStream(
      path.join(__dirname, "./logs/access.txt")
    );

    app.use(morgan("compined", { stream: accessLogStream }));
    app.use(urlencoded({ extended: true }));
    app.use(json());
    app.use(helmet());
  }
}

process.on("beforeExit", function (err) {
  console.error(err);
});
