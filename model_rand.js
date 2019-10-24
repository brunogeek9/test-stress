let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let numbersSchema = new Schema({
    val1: {type: Number},
    val2: {type: Number}
})

module.exports = mongoose.model('Numbers',numbersSchema);