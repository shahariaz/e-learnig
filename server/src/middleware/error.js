const ErrorHandler = require("../utils/ErrorHander");
module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";
  //wrong mongodb id
  if (err.name === "CastError") {
    const message = ` Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
  }
  //Duplicate key error
  if (err.code === 11000) {
    const message = ` Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }
  //wrong jwt error
  //jwt expired token

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
