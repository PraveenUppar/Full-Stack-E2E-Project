import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();

const app = express();
const port = process.env.PORT;
const client_URL = process.env.FRONTEND_URL;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", client_URL);
  next();
});

app.use(
  cors({
    origin: [client_URL],
    methods: "GET, POST, PATCH, DELETE, PUT",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Todo Server is running...");
});

import authRoutes from "./routes/authRoutes.js";
app.use("/api/auth", authRoutes);

import todoRoutes from "./routes/todoRoutes.js";
app.use("/api/todo", todoRoutes);

app.listen(port, () => {
  connectDB();
  console.log(`Todo Server running on port ${port}`);
});
