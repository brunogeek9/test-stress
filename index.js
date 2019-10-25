const mongo = require('mongoose');
const utils = require('./utils');
const qtdArray = 100000;
const qtdInserts = 10;
mongo.connect(
    'mongodb://localhost:27017/fake_rands',
    { useNewUrlParser: true }

);

var schema = new mongo.Schema({ val1: 'number', val2: 'number' });
var Rand = mongo.model('randomicos', schema);

var num = 3;



console.table(
    ["", 'inserir dados', "buscar dados", "buscar dados com projeção","dropar collection", "contar quantidade de dados da collection"]
);

switch (num) {
    case 1:
        
        console.time('inserindo');
        for (let index = 0; index < qtdInserts; index++) {
            Rand.insertMany(utils.generateLot(100000));
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
    case 3:
            console.time('buscando_apenas_val1');
            Rand.find({ val1: { $gte: 0 }, val1: { $lte: 10 } }, function (err, d) {
    
                if (err) return console.error(err);
                utils.consoleAsync(d);
            }).projection([{id:0}]);
            console.timeEnd('buscando_apenas_val1')
        break;
    case 4:
        mongo.connection.collection('randomicos').drop()
        break;
    default:

        break;
}





