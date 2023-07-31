import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {} // AppService был импортирован в значении appService, который дальше используется в декораторе @Get или например в @Post и тд (CRUD) ввообщем

  @Get()
  async getHello(): Promise<string> {
    return await this.appService.getHello();
  }
  @Get('/ping')
  async ping(): Promise<string> {
    return await this.appService.ping();
  }
}
