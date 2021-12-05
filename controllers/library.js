const libraryService = require('../services/library_service');


const LibraryController = {
    getPage(req, res) {
      // Return all books
      res.json(libraryService.getAll());
      // Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    postBook(req, res) {
      // Add new book
      libraryService.addBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    putBook(req, res) {
      // Modify book
      libraryService.modifyBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    deleteBook(req, res) {
      // Delete book
      libraryService.deleteBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    patchBook(req, res) {
      // Patch book
      libraryService.modifyBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    }
}

module.exports = LibraryController;