const mongoose = require("mongoose")
const postschema = mongoose.Schema({
    rollnumber : Number,
    name : String
})
module.exports = mongoose.model("info",postschema)