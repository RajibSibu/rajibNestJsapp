import * as mongoose from 'mongoose';

export const LoginSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  passward: { type: String, required: true },
});

export interface Login extends mongoose.Document {
  id: string;
  userName: string;
  passward: string;
}