import { FindManyOptions } from "typeorm";
import { AppDataSource } from "../data-source";
import { TasksEntity } from "../database/entities/tasks.entity";
import { CreateTasksDTO } from "./type/dtos/create-task.dto";

const taskRespository = AppDataSource.getRepository(TasksEntity);

const perPage = 10;

export const createTask = async (request: CreateTasksDTO) => {
  const { description } = request;

  const taskEntity = new TasksEntity();
  taskEntity.description = description;

  const savedTask = await taskRespository.save(taskEntity);

  return savedTask;
};

export const getTasks = async () => {
  let page = 1;

  const queryOptions: FindManyOptions<TasksEntity> = {
    skip: page,
    take: perPage,
    order: {
      createdAt: "DESC",
    },
  };

  const tasks = await taskRespository.findAndCount({
    order: {
      createdAt: "DESC",
    },
  });
  const result = { tasks: tasks[0], total: tasks[1] };

  return result;
};

export const deleteTask = async (id: number) => {
  const deleted = await taskRespository.delete({ id });

  return deleted;
};
