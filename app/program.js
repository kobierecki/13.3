var OSinfo = require('../modules/OSinfo');
var Time = require('../modules/Time');
var EventEmitter = require("events").EventEmitter;

var emitter = new EventEmitter();
emitter.on("beforeCommand", function (instruction){
    console.log('You wrote: ' + instruction + ', trying to run command');
});
emitter.on("afterCommand", function(){
    console.log('Finished command');
});

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null){
        var instruction = input.toString().trim();
        emitter.emit('beforeCommand', instruction);
        switch (instruction){
           case 'exit':
            process.stdout.write('Quitting app');
            process.exit();
           break;
           case 'lang':
            process.stdout.write('System language: ' + process.env.LANG + "\n");
           break;
           case 'version':
            process.stdout.write('Your node.js version: ' + process.version + "\n");
           break;
           case 'getOSinfo':        
            OSinfo.print();
           break;
           case 'time':
            var readline = require('readline');
            var numberOfSeconds = readline.createInterface(process.stdin, process.stdout);
            numberOfSeconds.question('Enter seconds value\n', function(answer){
                Time.print(answer);
                numberOfSeconds.close();
            });
            
           break;
           default:
            process.stderr.write('Wrong command!' + "\n");
           break;
        };
        emitter.emit('afterCommand');
    }   
});


