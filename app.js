const CoreController = require('./controller/core-controller');

let slotResult = CoreController.getSpinResult();
let questResults = CoreController.spin();

console.log(slotResult.matrix);
displaySlots(slotResult.matrix);

console.log(questResults);

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





