module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  // console.log('Error: ', err);
  if (err.name === "SequelizeUniqueConstraintError") {
    const errorMessage = `${err.errors[0].type}: ${err.errors[0].message}`;
    return res.status(err.statusCode).json({
      success: false,
      message: errorMessage,
    });
  }

  // console.log('error: ', err);

  return res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
