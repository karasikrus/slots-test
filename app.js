const CoreController = require('./controller/core-controller');
const questMap = require('./slotChecks/quests');
const checkWin = require('./slotChecks/win');

let slotResult = CoreController.getSpinResult();
let slotMaps = countNumbers(slotResult.matrix);

console.log(slotResult.matrix);
displaySlots(slotResult.matrix);
console.log(slotMaps);
console.log('win = ', checkWin(slotMaps));
// console.log('spins = ', spinsQuest(0));
// console.log('money spent = ', moneyQuest(slotResult.spentMoney, 0));
// console.log('combos got = ', comboRowQuest(slotMaps, 0));
// console.log('symbol got = ', symbolQuest(slotMaps));

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

