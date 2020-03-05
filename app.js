const CoreController = require('./controller/core-controller');

let slotResult = CoreController.getSpinResult();
let results = CoreController.spin();

console.log(`slot matrix = [${slotResult.matrix}]`);
displaySlots(slotResult.matrix);

console.log(results.win? 'Winning spin!' : 'Try again :(');

console.log('Quests info:');
for(let quest of results.questResults){
    console.log(`${quest.questType}:  ${quest.userQuestValue}/${quest.questValue}
${quest.isCompleted? `Completed on ${new Date(quest.dateCompleted)}`:''}`);
}

function displaySlots(matrix) {
    const rows = 3;
    let strings = [];
    for(let i = 0; i< rows; i++){
        strings[i] = [];
    }
    for(let i = 0; i< matrix.length; i++){
        strings[i%rows].push(matrix[i]);
    }
    console.log('SLOTS');
    console.log('-------------');
    for(let i = 0; i< rows; i++){
        console.log(strings[i].join(' '));
    }
    console.log('-------------');
}





