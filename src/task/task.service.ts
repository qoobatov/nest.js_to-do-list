import { Injectable } from '@nestjs/common';
import { ITask, ITaskService } from './interface';
import { InjectModel } from '@nestjs/mongoose';
import { TaskModel } from './model/task.model';
import { Model } from 'mongoose';

@Injectable()
export class TaskService implements ITaskService {
  constructor(
    @InjectModel(TaskModel.name) private readonly taskModel: Model<TaskModel>,
  ) {}

  async getAll(): Promise<ITask[]> {
    return await this.taskModel.find();
  }

  async getOne(id: string): Promise<ITask> {
    return this.taskModel.findOne({
      id: id,
    });
  }

  async addTask(data): Promise<ITask> {
    const newTask = new this.taskModel({
      ...data,
    });
    return newTask.save();
  }

  async updateTask(id: string, title: string): Promise<ITask> {
    const taskToUpdate = await this.taskModel.findOne({ _id: id });
    taskToUpdate.title = title;
    return taskToUpdate.save();
  }

  async complete(id: string): Promise<ITask> {
    const taskToUpdate = await this.taskModel.findOne({ _id: id });
    taskToUpdate.completed = !taskToUpdate.completed;
    return taskToUpdate.save();
  }

  async deleteTaskById(id: string): Promise<ITask> {
    return await this.taskModel.findByIdAndRemove(id);
  }
}
