var num = 1;
const mongo = require('mongoose');
const readline = require('readline');
const utils = require('./utils');
const qtdArray = 100000;
const qtdInserts = 10;
const PORT = 27017;
const DB_NAME = 'fake_rands';
let labels = new Map();
labels.set('insert', 'inserindo');
labels.set('b1', 'buscando todos os campos');
labels.set('b2', 'buscando apenas val1');
labels.set('remove', 'removendo tudo da collection')
mongo.connect(
    `mongodb://localhost:${PORT}/${DB_NAME}`,
    { useNewUrlParser: true }

);

var schema = new mongo.Schema({ val1: 'number', val2: 'number' });
var Rand = mongo.model('randomicos', schema);


console.table(
    [
        "",
        'inserir dados',//1
        "buscar dados",//2
        "buscar dados com projeção",//3
        "dropar collection",//4
        "contar quantidade de dados da collection"//4
    ]
);

switch (num) {

    case 1:

        for (let index = 0; index < qtdInserts; index++) {
            console.time(`inserindo ${index}`);
            Rand.insertMany(utils.generateLot(qtdArray), function (error, docs) {
                console.timeEnd(`inserindo ${index}`);
            });


        }
        break;
    case 2:
        console.time(labels.get('b1'));
        Rand.find({ val1: { $gte: 0 }, val1: { $lte: 10 } }, function (err, d) {

            if (err) return console.error(err);
            console.timeEnd(labels.get('b1'));
            // utils.consoleAsync(d);
        });

        break;
    case 3:
        console.time(labels.get('b2'));
        Rand.find({ val1: { $gte: 0 }, val1: { $lte: 10 } }, { '_id': 0, '__v': 0, 'val2': 0 }, function (err, d) {

            if (err) return console.error(err);
            console.timeEnd(labels.get('b2'))
            utils.consoleAsync(d);
        });

        break;
    case 4:
        mongo.connection.collection('randomicos').deleteMany({});
        console.log(labels.get('remove'));
        break;
    default:

        break;
}
