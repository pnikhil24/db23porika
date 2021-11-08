const mongoose = require("mongoose")
const milkSchema = mongoose.Schema({
    milk_type: String,
    quantity: Number,
    cost: Number
})
module.exports = mongoose.model("Milk",
    milkSchema)