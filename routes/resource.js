var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var milk_controller = require('../controllers/milk');
/// API ROUTE ///
// GET resources base.
router.get('/resource', api_controller.api);
/// milk ROUTES ///
// POST request for creating a milk.
router.post('/resource/milk', milk_controller.milk_create_post);
// DELETE request to delete milk.
router.delete('/resource/milk/:id', milk_controller.milk_delete);
// PUT request to update milk.
router.put('/resource/milk/:id', milk_controller.milk_update_put);
// GET request for one milk.
router.get('/resource/milk/:id', milk_controller.milk_detail);
// GET request for list of all milk items.
router.get('/resource/milk', milk_controller.milk_list);
module.exports = router;