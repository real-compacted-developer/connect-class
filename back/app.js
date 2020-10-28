const createError = require("http-errors");
const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const api = require("./apis");

const CanvasStore = require("./stores/CanvasStore");
const SlideStore = require("./stores/SlideStore");

const CanvasInstance = new CanvasStore();
const SlideInstance = new SlideStore();

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api", api);

app.use(function (req, res, next) {
  next(createError(404));
});

app.use(function (err, req, res) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.render("error");
});

exports.CanvasInstance = CanvasInstance;
exports.SlideInstance = SlideInstance;
exports.app = app;
