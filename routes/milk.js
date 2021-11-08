var express = require('express');
const milk_controlers= require('../controllers/milk');
var router = express.Router();
/* GET costumes */
router.get('/', milk_controlers.milk_view_all_Page );
module.exports = router;