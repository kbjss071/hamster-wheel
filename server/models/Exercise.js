const { Schema, model, default: mongoose } = require('mongoose');

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        type: {
            type: String,
            required: true,
            trim: true
        },
        muscle: {
            type: String,
            required: true,
            trim: true
        },
        equipment: {
            type: String,
            required: true,
            trim: true
        },
        difficulty: {
            type: String,
            required: true,
            trim: true
        },
        instructions: {
            type: String,
            required: true,
        }
    }
)

const Exercise = model('exercise', exerciseSchema);
  
module.exports = Exercise;