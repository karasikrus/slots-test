const CoreController = require('./controller/core-controller');

console.log(countNumbers(CoreController.getSpinResult().matrix));

function countNumbers(matrix) {
    const rows = 3;
    let maps = [];
    for (let i = 0; i<rows; i++){
        maps[i] = new Map();
    }
    for(let i = 0; i< matrix.length; i++){
        let row = i%rows;
        if(maps[row].has(matrix[i])){
            maps[row].set(matrix[i], maps[row].get(matrix[i]) + 1);
        } else {
            maps[row].set(matrix[i], 1);
        }
    }
    return maps;
}
