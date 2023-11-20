const Parent = require("../models/Parent");

// Controller to get a parent's children
const getParentChildren = async (req, res) => {
  const parentId = req.user._id; // Assuming user object includes parent ID

  try {
    const parent = await Parent.findById(parentId).populate("children");
    if (parent) {
      res.json({ children: parent.children });
    } else {
      res.status(404).json({ message: "Parent not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = {
  getParentChildren,
};
