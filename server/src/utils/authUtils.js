const Student = require("../models/student.model");
const Teacher = require("../models/teacher.model");
const Parent = require("../models/parent.model");

// Function to authenticate users
const authenticateUser = async (userType, email, password) => {
  let user;
  switch (userType) {
    case "student":
      user = await Student.findOne({ email, password });
      break;
    case "teacher":
      user = await Teacher.findOne({ email, password });
      break;
    case "parent":
      user = await Parent.findOne({ email, password });
      break;
    default:
      throw new Error("Invalid user type");
  }

  return user;
};

module.exports = authenticateUser;
