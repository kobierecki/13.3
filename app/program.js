var OSinfo = require('../modules/OSinfo');
var Time = require('../modules/Time');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function(){
    var input = process.stdin.read();
    if(input !== null){
        var instruction = input.toString().trim();
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
            process.stdout.write('Enter seconds value\n');
            Time.print();
           break;
           default:
            process.stderr.write('Wrong command!' + "\n");
           break;
        }
    }   
});


