const mongoose = require('mongoose');
const cat = require('./Category.js');
const brand = require('./Brand.js');

const schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    category: {
        type:mongoose.ObjectId,
        ref:'category'
    },
    quantity:{
        type:String,
        required: true
    },
    description:{
        type:String,
        required: true
    },
    price:{
        type:String,
        required: true
    }
       
});

const model = mongoose.model('Product', schema);
module.exports = model;