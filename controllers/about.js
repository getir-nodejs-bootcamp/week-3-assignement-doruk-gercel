// set up all about page actions
const AboutController = {
    async getPage(req, res) {
      console.log("hakkimizda")
      res.render('main', { name: require('../definitions/page_names').About});
    }
}

module.exports = AboutController;