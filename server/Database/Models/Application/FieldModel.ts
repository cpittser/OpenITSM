//Fields can reside on multiple forms but
//can have only one Application
import mongoose, { Model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  company: string;
  address: string;
  city: string;
  state: string;
  phone: string;
  email: string;
  password: string;
}
