const mongoose = require("mongoose")

function connectToDB(){
    mongoose.connect("mongodb+srv://as3199432:6GL0X31N8WTVNtGR@cluster0.zyg98x9.mongodb.net/sazzz")
    .then(()=>{
        console.log("mongoose is start")
    })
}

module.exports = connectToDB