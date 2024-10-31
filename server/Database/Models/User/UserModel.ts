import mongoose, { Model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  company: string;
  address: string;
  phone: string;
  email: string;
  password: string;
  roles: string;
}
