'use strict';

const queryRouter = require ('./query');
const errorRouter = require ('./error');

const express = require('express');
const router = express.Router();

router.use ('/query', queryRouter);
router.use (errorRouter);

module.exports = router;
