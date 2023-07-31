import { Injectable } from '@nestjs/common';

// (для заметок, в сервисах пишут бизнес логику)

@Injectable()
export class AppService {
  async getHello(): Promise<string> {
    return 'Это результат работы функции gethello()';
  }

  async ping(): Promise<string> {
    return 'Это результат работы функции ping()';
  }
}
