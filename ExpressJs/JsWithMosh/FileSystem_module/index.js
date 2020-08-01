const fs = require('fs');

// const files = fs.readdirSync('./');
// console.log(files);

fs.readdir('./', function(err, files) {
    if (err) {
        console.log(err);
    } else {
        console.log('result:', files);
    }
});

fs.readFile('data.txt', 'utf8', function(err, data) {
    if (err) {
        console.log('Read file error');
    } else {
        console.log(`Data file: ${data}`);
    }
});

console.log('END');