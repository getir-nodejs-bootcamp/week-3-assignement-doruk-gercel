const express = require('express');
const {MainController} = require('../controllers');
const router = express.Router();

// set up main page routes
router.get('/', MainController.getPage);

module.exports = router;
