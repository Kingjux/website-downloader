var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gifted Website Downloader - Get Source Code and All Files of Any Website.' });
});

module.exports = router;
