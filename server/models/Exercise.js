const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
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
        type: {
            type: String,
            required: true,
            trim: true
        },
        // Pass exercise id as it is in the API
        exercise_id: {
            type: String,
            required: true,
            trim: true
        }
    }
)

const Exercise = model('exercise', exerciseSchema);
  
module.exports = Exercise;