import mongoose, { Model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  name: string;
  company: string;
  address: string;
  phone: number;
  email: string;
  password: string;
  roles: string;
  isVerified: boolean;
  comparePassword: (password: string) => Promise<boolean>;
  SignAccessToken: () => string;
  SignRefreshToken: () => string;
}

const UserSchema = new Schema<IUser>({
  name: {
    type: String,
    maxlength: 50,
    required: true,
  },
  company: {
    type: String,
    maxlength: 50,
    required: true,
  },
  address: {
    type: String,
    maxlength: 50,
    required: true,
  },
  phone: {
    type: Number,
    maxlength: 50,
    required: true,
  },
  email: {
    type: String,
    maxlength: 50,
    required: true,
  },
  password: {
    type: String,
    maxlength: 50,
    required: true,
  },
  roles: {
    type: String,
    maxlength: 50,
    required: true,
  },
});

const UserModel: Model<IUser> = mongoose.model("User", UserSchema);

export default UserModel;
