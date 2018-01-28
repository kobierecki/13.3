
function getConvertedTime(answer){
    if(answer !== null){
        var date = new Date(null);
        date.setSeconds(answer);
        var result = date.toISOString().substr(11,2) + ' hours ' + date.toISOString().substr(14,2) + ' minutes ' +  date.toISOString().substr(17,2) + ' seconds ';
        console.log(result);
    }
}

exports.print = getConvertedTime;

