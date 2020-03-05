function spinsQuest(numberMaps, previousValue){
    return previousValue+1;
}
function moneyQuest(numberMaps, previousValue, money){
    return previousValue+money;
}
function comboRowQuest(numberMaps, previousValue) {
    let count = 0;
    for (const row of numberMaps){
        for (const v of row.values()){
            if(v>2){
                count++;
            }
        }
    }
    return previousValue + count;
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

let questChecks = new Map([
    ['do_spin', spinsQuest],
    ['spent_money', moneyQuest],
    ['combo_row', comboRowQuest],
    ['get_symbol', symbolQuest]
]);

module.exports = questChecks;
