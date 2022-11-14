const mongoose = require('mongoose');
const uuid = require('uuid');
const ItemSchema = new mongoose.Schema({
    p_id:{
        type: String,
        required: true,
        default: uuid.v4()
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    size:{
        type: String,
        required: false
    },
    img:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    desc:{
        type: String,
        
    },
    category:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    stock:{
        type: String,
        required: true
    }


    
});

module.exports = mongoose.model('Item', ItemSchema);