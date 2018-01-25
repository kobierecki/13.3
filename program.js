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
           default:
           process.stderr.write('Wrong command!' + "\n");
           break;
        }
    }   
});