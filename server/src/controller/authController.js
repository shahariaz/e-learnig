const authenticateUser = require("../utils/authUtils");

const login = async (req, res) => {
  const { userType, email, password } = req.body;

  try {
    const user = await authenticateUser(userType, email, password);

    if (user) {
      // Successfully authenticated
      return res.json({ message: "Login successful", user });
    } else {
      return res.status(401).json({ message: "Authentication failed" });
    }
  } catch (error) {
    console.error("Authentication error:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = {
  login,
};
