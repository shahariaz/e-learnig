const express = require("express");
const { test } = require("../controller/test");
const router = express.Router();

router.route("/").get(test);
module.exports = router;
