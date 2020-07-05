import { Model } from 'mongoose';
import { Login } from './loinModel';
export declare class LoginService {
    private readonly loginModel;
    constructor(loginModel: Model<Login>);
    insertUser(data: any): Promise<string>;
    validateUser(data: any): Promise<any>;
}
