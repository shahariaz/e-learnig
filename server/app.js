require("dotenv").config({ path: "./config/.env" });

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const ErrorHandler = require("./src/middleware/error");
const sutdentsRouter = require("./src/router/students");
const teachersRouter = require("./src/router/teachers");
const parentsRouter = require("./src/router/parents");
const adminRoutes = require("./src/router/admin");
const authRoutes = require("./src/router/login");
const app = express();
app.use(morgan("dev"));
app.use(express.json());
//body parser
app.use(express.json({ limit: "50mb" }));
//cookie parser
app.use(cookieParser());
//cors ==> corss origin resource sharing
app.use(
  cors({
    origin: process.env.ORIGIN,
  })
);
//user routes
app.use("/api/v1/students", sutdentsRouter);
app.use("/api/v1/teachers", teachersRouter);
app.use("/api/v1/parents", parentsRouter);
app.use("/api/v1/admins", adminRoutes);
app.use("/api/v1", authRoutes);
app.all("*", (req, res, next) => {
  const err = new Error(`Route ${req.originalUrl}not found`);
  //   next(new AppError(`Can't find ${req.originalUrl} on this server!!!`, 404));
  err.statusCode = 404;
  next(err);
});
app.use(ErrorHandler);
// app.use(globalErrorHandler);
module.exports = app;
