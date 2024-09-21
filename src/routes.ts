import express, { Router } from "express";
import taskRouter from "./controllers/tasks.controller";

const router: Router = express.Router();

router.use("/tasks", taskRouter);

export default router;
