const mongo = require('mongoose');
const qtdData = 1000000;
mongo.connect(
    'mongodb://localhost:27017/numbers',
    { useNewUrlParser: true }

);
function random(low,high) {
    return Math.floor(Math.random() * (high - low) + low)
}

var schema = new mongo.Schema({ val1: 'number', val2: 'number' });
var Rand = mongo.model('randomicos', schema);

console.time('inserindo');
for (let index = 0; index < qtdData; index++) {
    Rand.create({ val1: random(0,100), val2: random(0,100) });
}
console.timeEnd('inserindo');
