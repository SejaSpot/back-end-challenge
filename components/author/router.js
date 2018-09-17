const express = require("express");
const controller = require('./controller');

const router = express.Router();

router.get("/authors/", controller.get);
router.get("/authors/:id", controller.getById);
router.post("/authors/", controller.post);
router.put("/authors/:id", controller.put);
router.delete("/authors/:id", controller.remove);

module.exports = router;