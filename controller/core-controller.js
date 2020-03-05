const questCheckMap = require('../slotChecks/quests');
const checkWin = require('../slotChecks/win');

class CoreController {
    static spin() {        
        const spinResult = this.getSpinResult();
        const numbersMap = this.countNumbers(spinResult.matrix);
        const win = checkWin(numbersMap);
        const quests = this.getQuests();
        const questResults = [];
        for(const quest of quests){
            if(!quest.isCompleted){
                let questValue = questCheckMap.get(quest.questType)(
                    numbersMap, quest.userQuestValue, spinResult.spentMoney
                );
                quest.userQuestValue = questValue;
                if(questValue>=quest.questValue){
                    quest.isCompleted = true;
                    quest.dateCompleted = Date.now();
                }
                questResults.push(quest);
            }
        }
        return {
            'win': win,
            'questResults': questResults
        };
    }
    static countNumbers(matrix) {
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

    static getQuests() {
        return [
            {
                id: 1,
                userId: 1,
                questType: 'do_spin',
                questValue: 12,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 2,
                userId: 1,
                questType: 'spent_money',
                questValue: 2000,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 3,
                userId: 1,
                questType: 'combo_row',
                questValue: 2,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            },
            {
                id: 4,
                userId: 1,
                questType: 'get_symbol',
                questValue: 1,
                userQuestValue: 0,
                isCompleted: false,
                dateCompleted: null
            }
        ]
    }

    static getSpinResult() {
        return {
            matrix: [1, 3, 7, 2, 3, 5, 6, 3, 4, 7, 2, 71, 9, 9, 4],
            spentMoney: 1000,
        }
    }
}

module.exports = CoreController;
