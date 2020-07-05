import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LoginSchema } from './loinModel';

@Module({
  controllers: [LoginController],
  imports: [
    MongooseModule.forFeature([{ name: 'loginDB', schema: LoginSchema }]),
  ],
  providers: [LoginService]
})
export class LoginModule {}
