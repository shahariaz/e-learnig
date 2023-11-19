const Parent = require("../models/Parent");
const Student = require("../models/Student");

// Controller to get a parent's children and their performance
const getParentChildren = async (req, res) => {
  const parentId = req.user._id; // Assuming user object includes parent ID

  try {
    const parent = await Parent.findById(parentId).populate("children.student");
    if (parent) {
      res.json({ children: parent.children });
    } else {
      res.status(404).json({ message: "Parent not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

// Controller to get performance of a specific child
const getChildPerformance = async (req, res) => {
  const parentId = req.user._id; // Assuming user object includes parent ID
  const childId = req.params.childId;

  try {
    const student = await Student.findOne({
      _id: childId,
      parent: parentId,
    }).populate("performance.course");
    if (student) {
      res.json({ performance: student.performance });
    } else {
      res
        .status(404)
        .json({ message: "Child not found or not associated with the parent" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  getParentChildren,
  getChildPerformance,
};
