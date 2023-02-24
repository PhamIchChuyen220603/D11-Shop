import { Controller, Get,Body, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { User } from './models/user.model';

@Controller('user')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('s')
  getHello() {
    return this.appService.getHello();
  }

  @Get()
  GetUser(){
    return this.appService.GetUser();
  }

  @Get('byid/:id')
  GetUserById(@Param('id') id:string){
    return this.appService.GetUserbyID(id);
  }

  @Post()
  addUser(@Body() user: User){
    this.appService.addUser(user);
  }
}
