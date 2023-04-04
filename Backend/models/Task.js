const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    data: {
        type: String,
        require: true
    },
    done: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

const task = mongoose.model('task', TaskSchema);




module.exports = task;