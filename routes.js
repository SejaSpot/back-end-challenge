const express = require("express");
const authorController = require('./controllers/authorController');
const postController = require('./controllers/postController');
const categoryController = require('./controllers/categoryController');

const router = express.Router();

router.get("/authors/", authorController.get);
router.get("/authors/:id", authorController.getById);
router.post("/authors/", authorController.post);
router.put("/authors/:id", authorController.put);
router.delete("/authors/:id", authorController.remove);

router.get("/posts/", postController.get);
router.get("/posts/:id", postController.getById);
router.post("/posts/", postController.post);
router.put("/posts/:id", postController.put);
router.delete("/posts/:id", postController.remove);

router.get("/categories/", categoryController.get);
router.get("/categories/:id", categoryController.getById);
router.post("/categories/", categoryController.post);
router.put("/categories/:id", categoryController.put);
router.delete("/categories/:id", categoryController.remove);

module.exports = router;