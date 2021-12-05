const validToken = require('../definitions/token').Token

module.exports = {
    isAuthToken : (token) => {
        return validToken === token;
    }
}