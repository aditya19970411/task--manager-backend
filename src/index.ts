import express, { Express, Request, Response } from "express";
import logger from "./middlewares/logger";
import router from "./routes";
import { errorMiddleware } from "./middlewares/error";
import { AppDataSource } from "./data-source";

AppDataSource.initialize().then(() => {
  logger.info("Connection Established !!!");

  const app: Express = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  app.get("/", (_req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
  });

  // Routes
  app.use(router);

  // Error handler
  app.use(errorMiddleware);

  app.listen(port, () => {
    logger.info(`Server running on port: ${port}`);
  });
});
