const mongoose = require('mongoose');

const Todo = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
            
        },
        status: {
            type: String,
            required: true,
            default: "incomplete"
           
        }

    },
    { timestamps: true }

)


module.exports= mongoose.model('Todo', Todo);