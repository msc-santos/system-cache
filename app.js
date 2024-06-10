import express from "express";
import cors from "cors";
import router from "./routes.js";
import "dotenv/config";

const app = express();
app.use(cors());
app.use("/", router);

export default app;
