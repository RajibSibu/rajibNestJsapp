import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginModule } from './login/login.module';
import { MongooseModule } from '@nestjs/mongoose';
import { UserCreationModule } from './user-creation/user-creation.module';

@Module({
  imports: [LoginModule,
  MongooseModule.forRoot(
    'mongodb+srv://rajib:sMyzDI97Hz0mGkUJ@learning-s0mpf.mongodb.net/loginModule?retryWrites=true&w=majority',
  ),
  UserCreationModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
