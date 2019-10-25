const mongo = require('mongoose');
const utils = require('./utils');
const qtdArray = 100000;
const qtdInserts = 10;
mongo.connect(
    'mongodb://localhost:27017/numbers',
    { useNewUrlParser: true }

);

var schema = new mongo.Schema({ val1: 'number', val2: 'number' });
var Rand = mongo.model('randomicos', schema);

var num = 2;
switch (num) {
    case 1:
        console.time('inserindo');
        for (let index = 0; index < qtdInserts; index++) {
            Rand.insertMany(utils.generateLot(1000));
        }
        console.timeEnd('inserindo');
        break;
    case 2:
        console.time('buscando');
        Rand.find({ val1: { $gte: 0 }, val1: { $lte: 10 } }, function (err, d) {

            if (err) return console.error(err);
            utils.consoleAsync(d);
        });
        console.timeEnd('buscando')
        break;
    default:
        break;
}





