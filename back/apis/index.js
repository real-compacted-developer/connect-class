const express = require("express");
const router = express.Router();

router.use("/user", require("./users"));
router.use("/studyGroup", require("./studyGroups"));
router.use("/study", require("./studyRoom"));

module.exports = router;
