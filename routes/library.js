const express = require('express');
const {LibraryController} = require('../controllers');
const router = express.Router();

// Set up routes for library
router.get('/', LibraryController.getPage);
router.post('/', LibraryController.postBook);
router.put('/', LibraryController.putBook);
router.delete('/', LibraryController.deleteBook);
router.patch('/', LibraryController.patchBook);

module.exports = router;
