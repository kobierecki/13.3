
function getConvertedTime(){
    process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null){
        var date = new Date(null);
        date.setSeconds(input);
        var result = date.toISOString().substr(11,8);
        console.log(result);
        }
    });
}

exports.print = getConvertedTime;

