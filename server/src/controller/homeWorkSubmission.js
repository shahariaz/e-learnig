const HomeworkSubmission = require("../models/HomeworkSubmission");
const Unit = require("../models/Unit");
const Lesson = require("../models/Lesson");

// Controller to submit homework
const submitHomework = async (req, res) => {
  const { unitId, lessonId, image } = req.body;
  const studentId = req.user._id; // Assuming user object includes student ID

  try {
    const submission = await HomeworkSubmission.create({
      student: studentId,
      unit: unitId,
      lesson: lessonId,
      image,
    });

    res.json({ message: "Homework submitted successfully", submission });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  submitHomework,
};
