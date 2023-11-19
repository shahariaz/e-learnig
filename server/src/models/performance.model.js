const mongoose = require("mongoose");

const performanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  course: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  grades: { type: Number, required: true },
  // Add other relevant fields
});

const Performance = mongoose.model("Performance", performanceSchema);

module.exports = Performance;
