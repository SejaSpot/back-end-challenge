const express = require("express");
const controller = require('./controller');

const router = express.Router();

router.get("/categories/", controller.get);
router.get("/categories/:id", controller.getById);
router.post("/categories/", controller.post);
router.put("/categories/:id", controller.put);
router.delete("/categories/:id", controller.remove);

module.exports = router;