

const fs = require('fs')
var file = fs.readFileSync(process.argv[2]);
var result = file.toString().split('\n');
console.log(result.length - 1)