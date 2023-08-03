import { ITask } from './task.interface';

export interface ITaskService {
  getAll(): Promise<ITask[]>;
  // getOne(id): Promise<ITask>;
  addTask(data): Promise<ITask>;
}
