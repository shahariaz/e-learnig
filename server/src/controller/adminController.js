// controllers/adminController.js

const Admin = require("../models/Admin");
const Parent = require("../models/parent.model");
const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const Course = require("../models/course.model"); // Assuming you have a Course model
const catchAsync = require("../utils/catchAsync");

// Controller to create a parent account
const createParentAccount = catchAsync(async (req, res) => {
  // Validate admin credentials and authorization before proceeding
  // ...

  // Create a new parent account
  const parent = await Parent.create(req.body);
  res.json({ message: "Parent account created successfully", parent });
});

// Controller to create a student account
const createStudentAccount = catchAsync(async (req, res) => {
  // Validate admin credentials and authorization before proceeding
  // ...

  // Create a new student account
  const student = await Student.create(req.body);
  res.json({ message: "Student account created successfully", student });
});

// Controller to create a teacher account
const createTeacherAccount = catchAsync(async (req, res) => {
  // Validate admin credentials and authorization before proceeding
  // ...

  // Create a new teacher account
  const teacher = await Teacher.create(req.body);
  res.json({ message: "Teacher account created successfully", teacher });
});

// Controller to create a course
const createCourse = catchAsync(async (req, res) => {
  // Validate admin credentials and authorization before proceeding
  // ...

  // Create a new course
  const course = await Course.create(req.body);
  res.json({ message: "Course created successfully", course });
});

const test = catchAsync(async (req, res) => {
  // Validate admin credentials and authorization before proceeding
  // ...

  res.json({ message: "Test successful" });
});

module.exports = {
  createParentAccount,
  createStudentAccount,
  createTeacherAccount,
  createCourse,
  test,
};
