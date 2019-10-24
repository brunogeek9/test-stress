const mongo = require('mongoose');
const numbers = mongo.model('Numbers');
module.exports = {
    async store(data) {
        try {
            await numbers.create(data);
            console.log("salvou");
        } catch (error) {
            console.warn("deu errado");
        }
    },
    async show(){
        return await numbers.findOne();
        
    }
}