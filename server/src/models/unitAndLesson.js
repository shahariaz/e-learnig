const mongoose = require("mongoose");

// Unit Model
const unitSchema = new mongoose.Schema({
  title: { type: String, required: true },
  lessons: [{ type: mongoose.Schema.Types.ObjectId, ref: "Lesson" }],
});

const Unit = mongoose.model("Unit", unitSchema);

// Lesson Model
const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  // Add other relevant fields
});

const Lesson = mongoose.model("Lesson", lessonSchema);

module.exports = {
  Unit,
  Lesson,
};
