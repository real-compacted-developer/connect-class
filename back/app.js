const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const usersRouter = require("./apis/users");
const studyRoomRouter = require("./apis/studyRoom");

const RoomStore = require("./stores/RoomStore");
const CanvasStore = require("./stores/CanvasStore");

const { sequelize } = require("./models");

const RoomInstance = new RoomStore();
const CanvasInstance = new CanvasStore();

const app = express();

sequelize.sync();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", usersRouter);
app.use("/study", studyRoomRouter);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

exports.RoomInstance = RoomInstance;
exports.CanvasInstance = CanvasInstance;
exports.app = app;
