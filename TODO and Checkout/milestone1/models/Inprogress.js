const mongoose = require('mongoose');

const TodoProgress = new mongoose.Schema(
    {
        task: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            default : "inprogress",
        }
    },
    { timestamps: true },
)

module.exports= mongoose.model('TodoProgress', TodoProgress);
