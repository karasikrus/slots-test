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

let questChecks = new Map([
    ['do_spin', spinsQuest],
    ['spent_money', moneyQuest],
    ['combo_row', comboRowQuest],
    ['get_symbol', symbolQuest]
]);

module.exports = questChecks;
