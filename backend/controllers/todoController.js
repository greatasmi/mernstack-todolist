// controllers/todoController.js
const Todo = require("../models/Todo");

// CREATE
exports.createTodo = async (req, res) => {
  const todo = await Todo.create(req.body);
  res.status(201).json(todo);
};

// READ
exports.getTodos = async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
};

// UPDATE
exports.updateTodo = async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(todo);
};

// DELETE
exports.deleteTodo = async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
};
