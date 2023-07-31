import {
  Controller,
  Get,
  Body,
  Post,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}
  @Get()
  async getAll() {
    return await this.taskService.getAll();
  }

  @Get('/:id')
  async getOne(@Param('id') id: string) {
    return await this.taskService.getOne(id);
  }

  @Post()
  async addTask(@Body() data: any) {
    return await this.taskService.addTask(data);
  }

  @Put('/updateTask/:id')
  async updateTask(@Param('id') id: string, @Body('title') title: string) {
    return await this.taskService.updateTask(id, title);
  }
  @Put('/complete')
  async complete(@Body() id: string) {
    return await this.taskService.complete(id);
  }

  @Delete('/deleteTask/:id')
  async deleteTask(@Param('id') id: string) {
    return await this.taskService.deleteTaskById(id);
  }
}
