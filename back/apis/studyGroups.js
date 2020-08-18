const express = require("express");
const router = express.Router();
const pdf = require("pdf-poppler");
const fs = require("fs");
//  /* 아마존 S3에 올리기 */
// const uploadS3 = require("../config/multer");

/* multer로 서버에 올리기 */
const upload = require("../config/localMulter");

// pdf 파일 받아서 각 슬라이드 별 이미지화
router.post("/pdfToImage", upload.any(), async (req, res) => {
  const filename = req.files[0].filename;
  const filePath = req.files[0].filename.split(".pdf")[0];
  const file = "./uploads/" + filename;
  const opts = {
    format: "png",
    out_dir: __dirname + "/../" + filePath,
    out_prefix: filename,
    page: null,
    combinedImage: true
  }
  try {
    fs.mkdirSync(filePath);
  } catch (e) {
    if (e.code != "EEXIST") throw e;
  }
  await pdf.convert(file, opts)
    .then(async () => {
      console.log("Successfully converted");
    })
    .catch(error => {
      console.error(error);
    })
  res.json({
    file: req.files,
    body: req.body
  });
});
module.exports = router;
