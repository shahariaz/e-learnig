// routes/authRoutes.js

const express = require("express");
const authController = require("../controller/authController");
const router = express.Router();
// Define the login route
router.post("/login", authController.login);

module.exports = router;
