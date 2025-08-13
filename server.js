const express = require("express");
const app = express();
app.use(express.json());

let todos = [];

// GET all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// ADD a todo
app.post("/todos", (req, res) => {
  const todo = { id: todos.length + 1, task: req.body.task };
  todos.push(todo);
  res.status(201).json(todo);
});

// DELETE a todo
app.delete("/todos/:id", (req, res) => {
  todos = todos.filter(t => t.id !== parseInt(req.params.id));
  res.status(204).send();
});

app.listen(3000, () => console.log("API running on http://localhost:3000"));
