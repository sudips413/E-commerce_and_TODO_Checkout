const mongoose = require('mongoose');


const TodoComplete = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default : "completed",
        }
    },
    { timestamps: true },
)


module.exports= mongoose.model('Completed', TodoComplete);