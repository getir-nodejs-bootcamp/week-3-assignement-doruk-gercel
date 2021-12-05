const express = require('express');
const {AboutController} = require('../controllers');
const router = express.Router();

router.get('/', AboutController.getPage);

module.exports = router;
