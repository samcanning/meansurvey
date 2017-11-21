const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
    asker: {type: String, required: true, minlength: 2},
    question: {type: String, required: true, minlength: 8},
    option1: {
        option: {type: String, required: true, minlength: 3},
        votes: {type: Number, required: true, default: 0},
    },
    option2: {
        option: {type: String, required: true, minlength: 3},
        votes: {type: Number, required: true, default: 0},
    },
    option3: {
        option: {type: String, required: true, minlength: 3},
        votes: {type: Number, required: true, default: 0},
    },
    option4: {
        option: {type: String, required: true, minlength: 3},
        votes: {type: Number, required: true, default: 0},
    },
}, {timestamps: true})

const Poll = mongoose.model("Poll", pollSchema);