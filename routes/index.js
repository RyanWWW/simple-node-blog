var express = require('express');
var router = express.Router();
var PostModel = require('../models/posts');

router.get('/', function (req, res, next) {
    PostModel
        .getPosts()
        .exec(function (err, results) {
            if (err) {
                throw err.message;
            }
            var formattedDate;
            var monthToAbbrev = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
            res.render('indexPage', {
                items: results, monthConvert: monthToAbbrev
            })
        })
});

module.exports = router;