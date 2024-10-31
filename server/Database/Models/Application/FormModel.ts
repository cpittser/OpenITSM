//Forms should map directly to a specific Application
import mongoose, { Model, Schema, Document } from "mongoose";

export interface IForm extends Document {
  instance: string;
  name: string;
  applicationID: string;
  createDate: Date;
  modifiedDate: Date;
  createdBy: string;
  modifiedBy: string;
}
