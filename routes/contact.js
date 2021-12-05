const express = require('express');
const {ContactController} = require('../controllers');
const router = express.Router();

router.get('/', ContactController.getPage);

module.exports = router;
