const express = require("express");
const controller = require('./controller');

const router = express.Router();

router.get("/posts/", controller.get);
router.get("/posts/:id", controller.getById);
router.post("/posts/", controller.post);
router.put("/posts/:id", controller.put);
router.delete("/posts/:id", controller.remove);

module.exports = router;