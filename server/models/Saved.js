const mongoose = require('mongoose')
const { Schema, model } = require('mongoose');

const savedSchema = new Schema ({
    savedDate: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: Schema.Types.ObjectId,
            ref: 'exercise'
        }
    ]
})

const Save = mongoose.model('Save', savedSchema);

module.exports = Save