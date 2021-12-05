const paths = require("../definitions/paths");

module.exports = function(app) {
    // Initalizae all the routes
    app.use(require('./pre'));
    app.use(paths.Root, require('./main'));
    app.use(paths.Main, require('./main'));
    app.use(paths.About, require('./about'));
    app.use(paths.Contact, require('./contact'));
    app.use(paths.Library, require('./library'));
};