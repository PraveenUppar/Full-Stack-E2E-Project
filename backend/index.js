import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

import todoRoutes from "./routes/todoRoutes.js";
app.use("/api/todo", todoRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
