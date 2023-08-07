let os=require('os');

console.log(os.platform());

console.log(os.homedir());

console.log(os.version());

console.log(os.uptime());

console.log(os.type());

let domain=require('domain');

console.log(domain.create(""));