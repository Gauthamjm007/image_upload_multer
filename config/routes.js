const express = require("express");
const router = express.Router();
const multer = require("multer");
const imageController = require("../app/controllers/imageController");




var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

var upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 },
  fileFilter: fileFilter,
});

router.post("/img", upload.single("img"), imageController.create);
router.get("/img", imageController.list);
router.delete("/img/:id", imageController.destroy);

module.exports = router;
