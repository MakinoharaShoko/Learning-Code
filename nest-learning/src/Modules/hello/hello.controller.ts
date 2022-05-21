import { Controller, Get } from '@nestjs/common';
import { HelloService } from './hello.service';

@Controller()
export class HelloController {
  constructor(private readonly helloService: HelloService) {}

  @Get('/api/hello')
  apiTest(): string {
    return this.helloService.getHelloText();
  }
}
