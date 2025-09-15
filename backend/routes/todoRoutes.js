import express from "express";
import {
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/", getTodo);
router.post("/", createTodo);
router.delete("/:id", deleteTodo);
router.put("/:id", editTodo);

export default router;
