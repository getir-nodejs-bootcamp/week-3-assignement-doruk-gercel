const fs = require("fs")
// file system service
module.exports = {
    log : (req, reqTime) => {
        const data = `T:${reqTime} M:${req.method} P:${req.url} C:${req.socket.remoteAddress}\n`;
        fs.appendFile("log.txt", data, () => console.log("Request logged"));
    }
}