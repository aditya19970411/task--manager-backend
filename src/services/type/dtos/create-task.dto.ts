import { IsString } from "class-validator";

export class CreateTasksDTO {
  @IsString()
  description: string;
}
