var express = require('express');
const milk_controlers= require('../controllers/milk');
var router = express.Router();
/* GET gas */
router.get('/', milk_controlers.milk_view_all_Page );
/* GET detail gas page */
router.get('/detail', milk_controlers.milk_view_one_Page);
/* GET create gas page */
router.get('/create', milk_controlers.milk_create_Page);
/* GET create update page */
router.get('/update', milk_controlers.milk_update_Page);
/* GET create gas page */
router.get('/delete', milk_controlers.milk_delete_Page);


module.exports = router;
