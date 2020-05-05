/* Hãy viết một hàm để tìm một số có số lần lặp lại nhiều nhất trong một dãy các số nguyên.

Input: dãy số
Output: 1 dãy số bao gồm các số có số lần lặp lại nhiều nhất

ví dụ:
Input: [1,2,3,4,1,2,2,1]
Output: [1,2]*/
function findMostFrequent(arr) {
    var arr1 = arr.filter(function(value, index) {
      return arr.indexOf(value) === index;
    });
    arr.sort(function(a, b) {
      return a - b
    });
    var arr2 = [];
    for (var number of arr1) {
      var index = arr.indexOf(number);
      var lastIndex = arr.lastIndexOf(number);
      if (lastIndex > index) {
        arr2.push(lastIndex - index+1);
      } else {
        arr2.push(1);
      }
    }
    var max = 0;
    for(var number of arr2){
        if(number > max) max = number;
    }
    var arr3 = [];
    for(var i = 0;i < arr2.length;i++){
        if(max === arr2[i]){arr3.push(arr1[i]);}
    }
    console.log(arr3);
  }

  findMostFrequent([1,2,3,4,1,2,2,1]);