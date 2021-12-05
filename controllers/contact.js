// set up all contact page actions
const ContactController = {
    async getPage(req, res) {
      res.render('main', { name: require('../definitions/page_names').Contact});
    }
}

module.exports = ContactController;