// Controllers are responsible for handling incoming requests and returning responses to the client.
import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() // class with decorators
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
