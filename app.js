const CoreController = require('./controller/core-controller');

let slotResult = CoreController.getSpinResult();
let slotMaps = countNumbers(slotResult.matrix);

console.log(slotResult.matrix);
displaySlots(slotResult.matrix);
console.log(slotMaps);
console.log('win = ', checkWin(slotMaps));
console.log('spins = ', spinsQuest(0));
console.log('money spent = ', moneyQuest(slotResult.spentMoney, 0));
console.log('combos got = ', comboRowQuest(slotMaps, 0));
console.log('symbol got = ', symbolQuest(slotMaps));

function displaySlots(matrix) {
    const rows = 3;
    let strings = [];
    for(let i = 0; i< rows; i++){
        strings[i] = [];
    }
    for(let i = 0; i< matrix.length; i++){
        strings[i%rows].push(matrix[i]);
    }
    for(let i = 0; i< rows; i++){
        console.log(strings[i].join(' '));
    }
}

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
function checkWin(numberMaps) {
    for (const row of numberMaps){
        for (const v of row.values()){
            if(v>1){
                return true;
            }
        }
    }
    return false;
}
function spinsQuest(previousValue){
    return previousValue+1;
}
function moneyQuest(money, totalSpent){
    return totalSpent+money;
}
function comboRowQuest(numberMaps, previousValue) {
    for (const row of numberMaps){
        for (const v of row.values()){
            if(v>2){
                return previousValue+1;
            }
        }
    }
    return previousValue;
}
function symbolQuest(numberMaps) {
    for (const row of numberMaps){
        for (const k of row.keys()){
            if(k===71){
                return 1;
            }
        }
    }
    return 0;
}
