var Promise = require('promise');
function countFrom(a,b){
    return new Promise(function(resolve,reject){
       var interValId = setInterval(() => {
            if(a <= b){
                console.log(a++);
            }
            else{
                resolve();
                clearInterval(interValId);
            }        
        }, 1000);
    });
}

countFrom(5,10).then(function(){
    console.log('DONE');
})