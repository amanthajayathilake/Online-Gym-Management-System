const mongoose = require('mongoose');

const workoutProgramSchema = new mongoose.Schema({
    photoURL: {
        type: String, required: true
    },
    name: {
        type: String, required: true
    }, 
    description: {
        type: String, required: true
    },
    conducted_by: {
        type: String, required: true
    },
    fee: {
        type: String, required: true
    },
    day: {
        type: String, required: true
    },
    time: {
        type: String, required: true
    }
});
 
module.exports = mongoose.model('workout_programs', workoutProgramSchema);