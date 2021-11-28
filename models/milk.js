const mongoose = require("mongoose")
const milkSchema = mongoose.Schema({
    milk_type: String,
    quantity: {type:Number,min:1,max:100},
    cost: {type:Number,min:5,max:145}
})
module.exports = mongoose.model("Milk",
    milkSchema)