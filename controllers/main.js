const MainController = {
    async getPage(req, res) {
      res.render('main', { name: require('../definitions/page_names').Main});
    }
}

module.exports = MainController;