const Todo = require('../models/Todo');
const createError = require('http-errors');

exports.getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (err) {
    next(err);
  }
};

exports.addTodo = async (req, res, next) => {
  try {
    const todoNew = await Todo.create(req.body);
    res.send(todoNew);
  } catch (err) {
    next(err);
  }
};

exports.getTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todo = await Todo.findById(id);
    if (!todo) {
      throw new createError.NotFound();
    }
    res.send(todo);
  } catch (err) {
    next(err);
  }
};

exports.updateTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todoUpdated = await Todo.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );
    if (!todoUpdated) {
      throw new createError.NotFound();
    }
    res.send(todoUpdated);
  } catch (err) {
    next(err);
  }
};

exports.deleteTodo = async (req, res, next) => {
  const { id } = req.params;
  try {
    const todoDeleted = await Todo.findByIdAndDelete(id);
    if (!todoDeleted) {
      throw new createError.NotFound();
    }
    res.send(todoDeleted);
  } catch (err) {
    next(err);
  }
};

exports.deleteMultipleTodos = async (req, res, next) => {
  const { ids } = req.body;
  try {
    const todosDeleted = await Todo.deleteMany({
      _id: {
        $in: ids,
      },
    });

    if (!todosDeleted) {
      throw new createError.NotFound();
    }

    res.send(todosDeleted);
  } catch (error) {
    next(err);
  }
};
