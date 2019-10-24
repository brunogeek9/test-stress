const mongo = require('mongoose');
const qtdArray = 100000;
const qtdInserts = 10;
mongo.connect(
    'mongodb://localhost:27017/numbers',
    { useNewUrlParser: true }

);
function random(low, high) {
    return Math.floor(Math.random() * (high - low) + low)
}

var schema = new mongo.Schema({ val1: 'number', val2: 'number' });
var Rand = mongo.model('randomicos', schema);

function generateLot(qtd) {
    var rands = [];
    for (let index = 0; index < qtd; index++) {
        rands.push({ val1: random(0, 100), val2: random(0, 100) });
    }
    return rands;
}



// console.time('inserindo');
// for (let index = 0; index < qtdInserts; index++) {
//     Rand.insertMany(generateLot(100000));
// }
// console.timeEnd('inserindo');



// console.time('buscando');
Rand.find({},function (err, apis) {

    if (err) return console.error(err);

    console.log(apis[0]);
});
// console.timeEnd('buscando')
