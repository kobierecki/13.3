var os = require('os');

function getOSinfo(){
    var type = os.type();
    var release = os.release();
    if(type === 'Darwin'){
        type = 'OSX';
    }else if(type === 'Windows_NT'){
        type = 'Windows';
    }
    var cpu = os.cpus()[0].model;
    var uptime = os.uptime();
    var userInfo = os.userInfo();

    console.log(('System: ' + type).gray);
    console.log(('Release: ' + release).red);
    console.log(('CPU model: ' + cpu).blue);
    console.log(('Uptime: ' + (uptime/60).toFixed(0) + 'min'));
    console.log(('User name: ' + userInfo.username).green);
    console.log(('Home dir: ' + userInfo.homedir).yellow);
}

exports.print = getOSinfo;