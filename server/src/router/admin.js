const express = require("express");
const adminController = require("../controller/adminController");

const router = express.Router();

// Define routes for creating accounts
router.post("/create-parent-account", adminController.createParentAccount);
router.post("/create-student-account", adminController.createStudentAccount);
router.post("/create-teacher-account", adminController.createTeacherAccount);
router.get("/test", adminController.test);

module.exports = router;
