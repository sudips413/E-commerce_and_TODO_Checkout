const mongoose = require('mongoose');


const TodoDone = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default : "done",
        }
    },
    { timestamps: true },
)

module.exports= mongoose.model('Done', TodoDone);