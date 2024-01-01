const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

const model = mongoose.model("Brand", schema);
module.exports = model;