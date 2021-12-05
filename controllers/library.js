const libraryService = require('../services/library_service');

// set up all library actions
const LibraryController = {
    async getPage(req, res) {
      // Return all books
      res.json(libraryService.getAll());
      // TODO: Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    async postBook(req, res) {
      // Add new book
      libraryService.addBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // TODO: Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    async putBook(req, res) {
      // Modify book
      libraryService.modifyBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // TODO: Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    async deleteBook(req, res) {
      // Delete book
      libraryService.deleteBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // TODO: Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    },
    async patchBook(req, res) {
      // Patch book
      libraryService.modifyBook(req.body);
      // Return all books
      res.json(libraryService.getAll());
      // TODO: Update to ejs
      //res.render('library', { name: require('../definitions/page_names').Library, books: libraryService.getAll()});
    }
}

module.exports = LibraryController;