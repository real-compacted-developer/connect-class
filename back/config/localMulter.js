const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    file.uploadedFile = {
      name: file.originalname,
      ext: file.mimetype.split("/")[1]
    };
    cb(null, file.uploadedFile.name);
  }
});
const upload = multer({
  dest: "uploads/",
  storage: storage
});

module.exports = upload;