const express = require('express');
const {ContactController} = require('../controllers');
const router = express.Router();

// set up contact page routes
router.get('/', ContactController.getPage);

module.exports = router;
