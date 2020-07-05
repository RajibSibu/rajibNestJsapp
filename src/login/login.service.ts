import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'
import { Login } from './loinModel';
@Injectable()
export class LoginService {
    constructor(
        @InjectModel('loginDB') private readonly loginModel: Model<Login>,
      ) {}
    
      async insertUser(data) {
        const newUser = new this.loginModel(data);
        const result = await newUser.save();
        return result.id as string;
      }
    
      async validateUser(data) {
        const users = await this.loginModel.find().exec();
        if ( users ) {
            let result;
            users.forEach(user => {
                result = user.userName === data.userName  && user.passward === data.passward? true : false
            });
            return result;

        }
        return users;
        // return products.map(prod => ({
        //   id: prod.id,
        //   title: prod.title,
        //   description: prod.description,
        //   price: prod.price,
        // }));
      }
}
