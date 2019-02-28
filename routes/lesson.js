const express = require("express");
const router = express.Router();
const lessonController = require("../controllers/lesson");

router.get("/new", lessonController.new);
router.post("/", lessonController.create);
router.get("/:id", lessonController.show);
router.get("/:id/edit", lessonController.edit);
router.put("/:id", lessonController.update);
router.delete("/:id", lessonController.delete);

module.exports = router;
