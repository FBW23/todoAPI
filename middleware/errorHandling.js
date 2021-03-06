var createError = require('http-errors');

exports.handleErrorPaths = (req, res, next) => {
  const error = createError(
    404,
    `There is not a route called '${req.url}'`
  );

  next(error);
};

exports.errorHandling = (err, req, res, next) => {
  const errCode = err.status || 500;

  res.status(errCode).send({
    error: {
      message: err.message,
    },
  });
};
