// src/pages/HomePage.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
  const [todos, setTodos] = useState([]);
  // State for the new to-do title input
  const [newTodoTitle, setNewTodoTitle] = useState("");
  // State to manage which to-do is being edited
  const [editingTodo, setEditingTodo] = useState(null); // Now holds just { _id, title }
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API_URL = "http://localhost:3000/api/todo";

  // --- Fetch all to-dos on component mount ---
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        setLoading(true);
        setError("");
        const response = await axios.get(API_URL);
        setTodos(response.data);
      } catch (err) {
        setError("Failed to fetch to-dos. Please login.");
      } finally {
        setLoading(false);
      }
    };
    fetchTodos();
  }, []);

  // --- Handler to Add a new to-do ---
  const handleAddTodo = async (e) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;

    try {
      // Send only the title
      const response = await axios.post(API_URL, { title: newTodoTitle });
      setTodos([...todos, response.data]);
      setNewTodoTitle(""); // Clear the input field
    } catch (err) {
      setError("Failed to add to-do.");
    }
  };

  // --- Handler to Delete a to-do ---
  const handleDeleteTodo = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setTodos(todos.filter((todo) => todo._id !== id));
    } catch (err) {
      setError("Failed to delete to-do.");
    }
  };

  // --- Handler to Toggle Completion Status ---
  const handleToggleComplete = async (todo) => {
    try {
      const updatedTodo = { ...todo, isCompleted: !todo.isCompleted };
      const response = await axios.put(`${API_URL}/${todo._id}`, updatedTodo);
      setTodos(todos.map((t) => (t._id === todo._id ? response.data : t)));
    } catch (err) {
      setError("Failed to update to-do status.");
    }
  };

  // --- Handler to Start Editing a to-do ---
  const handleStartEdit = (todo) => {
    setEditingTodo({ _id: todo._id, title: todo.title });
  };

  // --- Handler to Save an Edited to-do ---
  const handleSaveEdit = async (id) => {
    if (!editingTodo.title.trim()) return;
    try {
      // Send only the updated title
      const response = await axios.put(`${API_URL}/${id}`, {
        title: editingTodo.title,
      });
      setTodos(todos.map((t) => (t._id === id ? response.data : t)));
      setEditingTodo(null); // Exit editing mode
    } catch (err) {
      setError("Failed to save edit.");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
          My To-Do List 📝
        </h1>

        {/* --- Add To-Do Form --- */}
        <form onSubmit={handleAddTodo} className="flex gap-2 mb-6">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Add
          </button>
        </form>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && (
          <p className="text-center text-red-500 bg-red-100 p-2 rounded-md">
            {error}
          </p>
        )}

        {/* --- To-Do List --- */}
        <ul className="space-y-3">
          {todos.map((todo) => (
            <li
              key={todo._id}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-3 flex-grow">
                <input
                  type="checkbox"
                  checked={todo.isCompleted}
                  onChange={() => handleToggleComplete(todo)}
                  className="w-5 h-5 text-green-600 border-gray-300 rounded focus:ring-green-500"
                />
                {editingTodo?._id === todo._id ? (
                  // --- Edit Mode ---
                  <input
                    type="text"
                    value={editingTodo.title}
                    onChange={(e) =>
                      setEditingTodo({ ...editingTodo, title: e.target.value })
                    }
                    className="flex-grow px-2 py-1 border border-blue-300 rounded-md"
                    onBlur={() => handleSaveEdit(todo._id)}
                    onKeyDown={(e) =>
                      e.key === "Enter" && handleSaveEdit(todo._id)
                    }
                    autoFocus
                  />
                ) : (
                  // --- View Mode ---
                  <span
                    className={`flex-grow ${
                      todo.isCompleted
                        ? "line-through text-gray-400"
                        : "text-gray-800"
                    }`}
                  >
                    {todo.title}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-2">
                {editingTodo?._id === todo._id ? (
                  <button
                    onClick={() => handleSaveEdit(todo._id)}
                    className="px-3 py-1 text-sm font-medium text-white bg-green-500 rounded-md hover:bg-green-600"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => handleStartEdit(todo)}
                    className="px-3 py-1 text-sm font-medium text-gray-700 bg-yellow-400 rounded-md hover:bg-yellow-500"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => handleDeleteTodo(todo._id)}
                  className="px-3 py-1 text-sm font-medium text-white bg-red-500 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
