import express, { Router, Request, Response } from "express";
import logger from "../middlewares/logger";
import { createTask, deleteTask, getTasks } from "../services/tasks.service";

const taskRouter: Router = express.Router();

// GET: Get Tasks
taskRouter.get("/", async (_req: Request, res: Response) => {
  const tasks = await getTasks();

  return res.json(tasks);
});

// POST: Create Tasks
taskRouter.post("/", async (req: Request, res: Response) => {
  const { body } = req;
  logger.info(body);

  const createdTask = await createTask(body);

  return res.json(createdTask);
});

// DELETE: Delete Task with given Id
taskRouter.delete("/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const deleted = await deleteTask(Number(id));

  return res.json(deleted);
});

export default taskRouter;
