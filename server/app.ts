require("dotenv").config();
import express, { NextFunction, Request, Response } from "express";
export const app = express();
import cors from "cors";
import cookieParser from "cookie-parser";
import swaggerSpec from "./Utils/swagger";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

app.use(express.json({ limit: "50mb" }));

// cookie parser
app.use(cookieParser());

// cors => cross origin resource sharing
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

//routes
app.get(
  "/api/v1/heartbeat",
  (req: Request, res: Response, next: NextFunction) => {
    res.status(200).json({
      success: true,
      message: "API is working",
    });
  }
);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get("docs.json", (req: Request, res: Response) => {
  res.setHeader("Content-Type", "application/json");
  res.send(swaggerSpec);
});
