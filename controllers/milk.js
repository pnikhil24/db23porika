var Milk = require('../models/milk');
// List of all Milk
exports.milk_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk list');
};
// for a specific Milk.
exports.milk_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Milk.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Milk update form on PUT.
exports.milk_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await Milk.findById( req.params.id)
// Do updates of properties
if(req.body.costume_type)
toUpdate.milk_type = req.body.milk_type;
if(req.body.quantity) toUpdate.cost = req.body.quantity;
if(req.body.cost) toUpdate.cost = req.body.cost;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
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