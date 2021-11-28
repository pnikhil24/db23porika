var express = require('express');
const milk_controlers= require('../controllers/milk');
var router = express.Router();
const secured = (req, res, next) => {
  if (req.user){
    return next();
  }
  req.session.returnTo = req.originalUrl;
  res.redirect("/login");
}
/* GET milk */
router.get('/', milk_controlers.milk_view_all_Page );
/* GET detail milk page */
router.get('/detail', milk_controlers.milk_view_one_Page);
/* GET create milk page */
router.get('/create', secured, milk_controlers.milk_create_Page);
router.get('/update', secured, milk_controlers.milk_update_Page);
/* GET create milk page */
router.get('/delete', secured, milk_controlers.milk_delete_Page);
module.exports = router;