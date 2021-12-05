const express = require('express');
const {AboutController} = require('../controllers');
const router = express.Router();

// set up about page routes
router.get('/', AboutController.getPage);

module.exports = router;
