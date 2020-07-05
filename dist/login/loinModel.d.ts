import * as mongoose from 'mongoose';
export declare const LoginSchema: any;
export interface Login extends mongoose.Document {
    id: string;
    userName: string;
    passward: string;
}
