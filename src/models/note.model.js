const mongoose = require("mongoose")


const noteschema = new mongoose.Schema({
    title:String,
    content:String
})

const notemodel = mongoose.model("note", noteschema)

module.exports = notemodel