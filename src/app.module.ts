import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { MongooseModule } from '@nestjs/mongoose';

// здесь в аппмодуль собираются все модули чтобы потом  запустить в main.ts, на подобие App.js в реакте который потом запускается в index.js
@Module({
  imports: [
    TaskModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin123@to-do-list.3l8nuwi.mongodb.net/?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// Коды для создания проекта и в последующем для создания модуля, сервисов и контроллера

// nest new project name - create a new project

// nest generate module/service/controller name - create a new module/service/controller in the project

// nest g module name
// nest g service name
// nest g controller name
