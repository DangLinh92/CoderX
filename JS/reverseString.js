// Viết hàm đảo ngược chuỗi
// Example
// reverse('abc') // 'cba'
function reverse(str) {
    var arr = str.split('');
    arr.reverse();
   console.log(arr.join(''));
  }

  reverse('abc');