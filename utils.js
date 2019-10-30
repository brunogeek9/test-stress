
module.exports = {
    random(low, high) {
        return Math.floor(Math.random() * (high - low) + low)
    },
    generateLot(qtd) {
        var rands = [];
        for (let index = 0; index < qtd; index++) {
            rands.push({ val1: this.random(0, 100), val2: this.random(0, 100) });
        }
        return rands;
    },
    async consoleAsync(data) {
        await console.log(data);
    },



}