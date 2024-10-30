import mongoose from "mongoose";
require("dotenv").config();

const dbUrl: string = process.env.DB_URL || "";
const operDB: string = process.env.Operational_DB || "";

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      dbName: operDB,
    });
    console.log("Connected to MongoDB..");
  } catch (error: any) {
    console.log(error.message);
    setTimeout(connectDB, 5000);
  }
};

export default connectDB;
