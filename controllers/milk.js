var Milk = require('../models/milk');
// List of all Milk
exports.milk_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk list');
};
// for a specific Milk.
exports.milk_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk detail: ' + req.params.id);
};
// Handle Milk create on POST.
exports.milk_create_post = async function (req, res) {
    console.log(req.body)
    let document = new Milk();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"milk_type":"regular", "quantity":13, "cost":43.56}
    document.milk_type = req.body.milk_type;
    document.quantity = req.body.quantity;
    document.cost = req.body.cost;
    try {
        let result = await document.save();
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle Milk delete form on DELETE.
exports.milk_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk delete DELETE ' + req.params.id);
};
// Handle Milk update form on PUT.
exports.milk_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk update PUT' + req.params.id);
};

// List of all Milk
exports.milk_list = async function (req, res) {
    try {
        theMilk = await Milk.find();
        res.send(theMilk);
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.milk_view_all_Page = async function (req, res) {
    try {
        theMilk = await Milk.find();
        res.render('milk', {
            title: 'Milk Search Results',
            results: theMilk
        });
    } catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};