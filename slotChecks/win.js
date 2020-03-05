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
module.exports = checkWin;
