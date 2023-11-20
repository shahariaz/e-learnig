const Course = require("../models/Course");

// Controller to get course details with teacher names
const getCourseDetails = async (req, res) => {
  const courseId = req.params.courseId;

  try {
    const course = await Course.findById(courseId).populate("teachers");

    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json({ course });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  getCourseDetails,
};
