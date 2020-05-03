var arr = ['a','b','c'];
for(var i = 0;i < arr.length;i++){
    console.log(arr[i]);
    var x=1;
    setTimeout(function(){
        console.log(x);
    },100);
}