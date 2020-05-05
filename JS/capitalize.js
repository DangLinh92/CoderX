// Viết hàm để viết hoa chữ cái đầu của từng từ trong câu
// Example
// capitalize("abc") // "Abc"
function capitalize(str) {
    // viết code ở đây
    var arr = str.split(' ');
    var result = '';
    for (var w of arr) {
      result += w.charAt(0).toUpperCase() + w.slice(1) + ' ';
    }
    return result.trim();
  }