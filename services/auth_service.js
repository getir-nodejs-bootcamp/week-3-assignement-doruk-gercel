const validToken = require('../definitions/token').Token
// authentication service
module.exports = {
    isAuthToken : (token) => {
        return validToken === token;
    }
}