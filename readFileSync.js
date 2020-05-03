var fs = require('fs');
var content = fs.readFileSync('./text.txt','utf-8');
console.log(content);
fs.writeFileSync('./newText.txt','monday')