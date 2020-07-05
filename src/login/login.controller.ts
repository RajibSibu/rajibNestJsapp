import { Controller, Body, Post, Get, HttpException, HttpStatus } from '@nestjs/common';
import { Login } from './loinModel';
import { LoginService } from './login.service';
import { BADRESP } from 'dns';

@Controller()
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post('add')
  async addUser(
    @Body() data:Login
  ) {
    const generatedId = await this.loginService.insertUser(data);
    return { id: generatedId };
  }

  @Post('validate')
  async getAllUser( @Body() data:Login) {
    const valid = await this.loginService.validateUser(data);
    return valid ?  {
        status: valid,
        message: 'Sucesss fully loged in '
    }: this.newMethod(valid);
  }


  private newMethod(valid: any) {
    throw new HttpException({
      status: valid,
      message: 'Login Failed '
    }, HttpStatus.BAD_REQUEST);
  }
}
