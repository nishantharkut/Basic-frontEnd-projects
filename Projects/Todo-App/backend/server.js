// backend/server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory todo list
let todos = [];
let id = 1;

// Routes
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const { text } = req.body;
  if (!text) return res.status(400).json({ error: "Text required" });

  const newTodo = { id: id++, text, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const todo = todos.find((t) => t.id == id);

  if (!todo) return res.status(404).json({ error: "Todo not found" });

  todo.completed = !todo.completed;
  res.json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  todos = todos.filter((t) => t.id != id);
  res.status(204).end();
});

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
