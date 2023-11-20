require("dotenv").config({ path: "./config/.env" });
const app = require("./app");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
app.listen(process.env.PORT || 8000, () => {
  console.log("listening on port", process.env.PORT);
  connectDB();
});
