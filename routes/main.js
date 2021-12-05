const express = require('express');
const {MainController} = require('../controllers');
const router = express.Router();

router.get('/', MainController.getPage);

module.exports = router;
