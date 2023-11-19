const HomeworkSubmission = require("../models/HomeworkSubmission");
const Unit = require("../models/Unit");
const Lesson = require("../models/Lesson");
const Student = require("../models/Student");

// Controller to approve homework
const approveHomework = async (req, res) => {
  const { submissionId } = req.body;

  try {
    const submission = await HomeworkSubmission.findByIdAndUpdate(
      submissionId,
      { $set: { isApproved: true } },
      { new: true }
    );

    // Update the student's completed lessons and units
    await Student.findByIdAndUpdate(submission.student, {
      $addToSet: {
        completedLessons: submission.lesson,
        completedUnits: submission.unit,
      },
    });

    res.json({ message: "Homework approved successfully", submission });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  approveHomework,
};
