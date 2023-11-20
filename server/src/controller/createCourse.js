const Course = require("../models/course.model");
exports.createCourse = async (req, res) => {
  try {
    const course = await Course.create(req.body);
  } catch (error) {
    res.status(403).json({
      statusbar: "error",
      message: "Error creating",
    });
  }
};
