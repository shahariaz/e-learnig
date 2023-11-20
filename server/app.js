const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
// const AppError = require("./utils/appError");
const sutdentsRouter = require("./src/router/students");
const teachersRouter = require("./src/router/teachers");
const parentsRouter = require("./src/router/parents");
const adminRoutes = require("./src/router/admin");
// const globalErrorHandler = require("./controllers/errorController");
const app = express();
app.use(morgan("dev"));
app.use(express.json());

//user routes
app.use("/api/v1/students", sutdentsRouter);
app.use("/api/v1/teachers", teachersRouter);
app.use("/api/v1/parents", parentsRouter);
app.use("/api/v1/admins", adminRoutes);
// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!!!`, 404));
// });
// app.use(globalErrorHandler);
module.exports = app;
