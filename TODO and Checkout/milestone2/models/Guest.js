const mongoose = require('mongoose');
const uuid = require('uuid');


let cart = new mongoose.Schema({
    p_id:{
        type: String,
        required: true,
        default: uuid.v4()
    },
    name:{
        type: String,
        required: true,
        unique : false

    },
    size:{
        type: String,
        required: false
    },
    quantity:{
        type: Number,
        required: true
    },

    price:{
        type: Number,
        required: true
    }
});

const Guest = new mongoose.Schema({
    // userid:{
    //     type: String,
    //     required: true,
    //     default: uuid.v4()
    // },
    name:{
        type: String,
        required: true
        
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    address:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    orders : [cart],
    total:{
        type: Number,
        default: 0
    }


});


module.exports = mongoose.model('Guest', Guest);