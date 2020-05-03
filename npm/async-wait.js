var fs = require('fs');
var axios = require('axios');
var Promise = require('promise');

function readFile(link) {
    return new Promise(function (resolve, reject) {
        fs.readFile(
            link,
            { encoding: 'utf8' },
            function (err, data) {
                //console.log('Data loaded from disk', data);
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            }
        );
    });
}

function downloadData(link){
    return axios.get(link);
}

async function loadData(){
    var disData = await readFile('./data.json');
    var skyData = await downloadData('https://jsonplaceholder.typicode.com/todos/1');
    return [disData,skyData];
}

loadData().then(function(data){
    console.log(data);
  });