//Model for Application Definitions
import mongoose, { Model, Schema, Document } from "mongoose";

export interface IApplication extends Document {
  instance: string;
  name: string;
  createDate: Date;
  modifiedDate: Date;
  createdBy: string;
  modifiedBy: string;
}
