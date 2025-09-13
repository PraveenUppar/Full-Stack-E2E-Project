import express from "express";
import {
  getTodo,
  createTodo,
  editTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

router.get("/get-todo", getTodo);
router.post("/create-todo", createTodo);
router.delete("/delete-todo", deleteTodo);
router.put("/edit-todo", editTodo);

export default router;
