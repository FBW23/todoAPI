const express = require('express');
const router = express.Router();
const {
  todoValidationRules,
  dataValidation,
} = require('../middleware/validator');

const {
  getTodos,
  addTodo,
  getTodo,
  updateTodo,
  deleteTodo,
  deleteMultipleTodos,
} = require('../controllers/todosController');

router
  .route('/')
  .get(getTodos)
  .post(todoValidationRules(), dataValidation, addTodo);

router.route('/multiple').delete(deleteMultipleTodos);

router
  .route('/:id')
  .get(getTodo)
  .put(updateTodo)
  .delete(deleteTodo);

module.exports = router;
