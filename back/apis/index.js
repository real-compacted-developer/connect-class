const express = require("express");
const router = express.Router();

router.use("/user", require("./users"));
router.use("/studyGroup", require("./studyGroups"));

module.exports = router;
