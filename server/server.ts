import { app } from "./app";
import http from "http";
import connectDB from "./Utils/mongoose";

require("dotenv").config();

const server = http.createServer(app);

server.listen(process.env.PORT, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
  connectDB();
});
