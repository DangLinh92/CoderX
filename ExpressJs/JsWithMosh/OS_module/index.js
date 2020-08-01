const os = require('os');
var totalMemory = os.totalmem();
var freeMemory = os.freemem();

console.log('Total memory:', totalMemory);

// using template string
console.log(`Free memory: ${freeMemory}`);