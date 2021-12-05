const express = require('express');
const moment = require('moment');
const fsService = require('../services/fs_service');
const authService = require('../services/auth_service');
const errors = require('../definitions/errors');
const router = express.Router();

// performs pre actions for all requests
router.use((req, res, next) => {
    // save request time
    const reqTime = moment().format("YYYY-MM-DD-HH:mm:ss");
    // log request
    fsService.log(req, reqTime);
    // check if user is auth
    if(!authService.isAuthToken(req.token)) {
        res.status(401);
        res.send(errors[401]);
        return;
    }
    return next();
});

module.exports = router;