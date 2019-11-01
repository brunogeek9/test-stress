const mongo = require('mongoose');
const readline = require('readline');
const utils = require('./utils');
const qtdArray = 100;
const qtdInserts = 100;
const PORT = 27017;
const DB_NAME = 'fake_rands';
var num = 3;
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
        console.time('inserindo');
        for (let index = 0; index < qtdInserts; index++) {
            Rand.insertMany(utils.generateLot(qtdArray));
        }
        console.timeEnd('inserindo');
        break;
    case 2:
        console.time('buscando');
        Rand.find({ val1: { $gte: 0 }, val1: { $lte: 10 } }, function (err, d) {

            if (err) return console.error(err);
            console.timeEnd('buscando')
            utils.consoleAsync(d);
        });
        
        break;
    case 3:
        console.time('buscando_apenas_val1');
        Rand.find({ val1: { $gte: 0 }, val1: { $lte: 10 } }, { '_id': 0, '__v': 0, 'val2': 0 }, function (err, d) {

            if (err) return console.error(err);
            console.timeEnd('buscando_apenas_val1')
            utils.consoleAsync(d);
        });
        
        break;
    case 4:
        mongo.connection.collection('randomicos').remove({});
        break;
    default:

        break;
}





