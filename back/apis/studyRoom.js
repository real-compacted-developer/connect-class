const express = require("express");
const { body, param, validationResult } = require("express-validator");
const crypto = require("crypto");

const RoomModel = require("../models/index").StudyGroup;

const router = express.Router();

const studyCreateValidator = [
  body("title").isString(),
  body("category").isString(),
  body("password").isNumeric(),
  body("limitCount").isNumeric(),
  body("isPremium").isBoolean(),
];
router.post("/", studyCreateValidator, async function (req, res) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ error: errors.array() });
    return;
  }

  const { title, category, password, limitCount, isPremium } = req.body;

  const room = await RoomModel.findOne({
    where: {
      title,
    },
  });

  if (room) {
    res.status(409).json({ error: "이미 스터디 방이 존재합니다." });
    return;
  }

  const salt = crypto.randomBytes(64);
  const encodePassword = crypto.pbkdf2Sync(
    password,
    salt.toString("base64"),
    100000,
    64,
    "sha512"
  );

  await RoomModel.create({
    title,
    category,
    limitCount: parseInt(limitCount, 10),
    isPremium: isPremium === "true",
    people: 0,
    salt: salt.toString("base64"),
    password: encodePassword.toString("base64"),
  });

  console.log(`새로운 스터디룸이 추가되었습니다. title: ${title}`);

  res.sendStatus(201);
});

const studyDeleteValidator = [param("id").isString()];
router.delete("/:id", studyDeleteValidator, async function (req, res) {
  const { id } = req.params;

  const room = await RoomModel.findOne({
    where: {
      title: id,
    },
  });

  if (!room) {
    res.status(404).json({ error: "스터디 방이 존재하지 않습니다." });
    return;
  }

  await RoomModel.destroy({
    where: {
      title: id,
    },
  });

  console.log(`스터디룸이 삭제되었습니다. title: ${id}`);

  res.sendStatus(200);
});

module.exports = router;
