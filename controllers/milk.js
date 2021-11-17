var Milk = require('../models/milk');
// List of all Milk
exports.milk_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Milk list');
};
// for a specific Milk.
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
    // {"gas_type":"regular", "quantity":13, "cost":43.56}
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
// Handle Milk delete on DELETE.
exports.milk_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Milk.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };
// Handle Milk update form on PUT.
exports.milk_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await Milk.findById( req.params.id)
 // Do updates of properties
 if(req.body.milk_type)
 toUpdate.milk_type = req.body.milk_type;
 if(req.body.quantity) toUpdate.quantity = req.body.quantity;
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
// Handle a show one view with id specified by query
exports.milk_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Milk.findById( req.query.id)
    res.render('milkdetail',
   { title: 'Milk Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle building the view for creating a gas.
// No body, no in path parameter, no query.
// Does not need to be async
exports.milk_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('milkcreate', { title: 'Milk Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

// Handle building the view for updating a gas.
// query provides the id
exports.milk_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Milk.findById(req.query.id)
    res.render('milkupdate', { title: 'Milk Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };
// Handle a delete one view with id from query
exports.milk_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Milk.findById(req.query.id)
    res.render('milkdelete', { title: 'Milk Delete', toShow:
   result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };