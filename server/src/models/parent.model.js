const mongoose = require("mongoose");

const parentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  children: [
    {
      student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
      relationship: String,
    },
  ],
});

const Parent = mongoose.model("Parent", parentSchema);

module.exports = Parent;
