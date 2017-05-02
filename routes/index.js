var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '微信小程序带参二维码批量生成工具' });
});
 
module.exports = router;
