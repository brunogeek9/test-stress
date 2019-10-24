const mongo = require('mongoose');
mongo.connect(
    'mongodb://localhost:27017/numbers',
    { useNewUrlParser: true }

);
function random(low,high) {
    return Math.floor(Math.random() * (high - low) + low)
}

var schema = new mongo.Schema({ val1: 'number', val2: 'number' });
var Rand = mongo.model('randomicos', schema);
var model = mongo.model('randomicos');
for (let index = 0; index < 1000; index++) {
    model.create({ val1: random(0,10), val2: random(0,10) });
}

// var teste = new Test({val1: 1, val2:2});
// teste.save();