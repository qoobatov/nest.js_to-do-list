import { Module } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskController } from './task.controller';
import { TaskModel, TaskSchema } from './model/task.model';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: TaskModel.name, schema: TaskSchema }]),
  ],
  providers: [TaskService],
  controllers: [TaskController],
})
export class TaskModule {}
