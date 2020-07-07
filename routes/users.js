const express = require('express');
const router = express.Router();
const {
  userValidationRules,
  dataValidation,
} = require('../middleware/validator');

const {
  getUsers,
  addUser,
  getUser,
  updateUser,
  deleteUser,
} = require('../controllers/usersController');

router
  .route('/')
  .get(getUsers)
  .post(userValidationRules(), dataValidation, addUser);

router
  .route('/:id')
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
