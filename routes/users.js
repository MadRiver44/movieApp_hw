var express = require('express');
var router = express.Router();
const authHelpers = require('../auth/auth-helpers');

router.get('/', authHelpers.loginRequired, (req, res, next) => {
    res.render('user/index', {
        user: req.user.dataValues
    });

module.exports = router;