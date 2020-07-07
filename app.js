const mongoose = require('mongoose');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const todosRouter = require('./routes/users');

const {
  handleErrorPaths,
  errorHandling,
} = require('./middleware/errorHandling');

/**GET IT STARTED */
const app = express();

/** CONNECT TO DATABASE */
mongoose
  .connect('mongodb://localhost/todoAPIfbw23', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => 'Connecton established')
  .catch(console.error);

/**MIDDLEWARE */
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

/** ROUTING */
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/todos', todosRouter);

/**WHAT IF WE MAKE A REQUEST IN /randomURL */
app.use(handleErrorPaths);

/**ERROR MIDDLEWARE */
// If anyone anywhere in the app calls
// next(error) then we end up here
app.use(errorHandling);

module.exports = app;
