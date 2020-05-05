/**
 * Viết hàm diff trả về số ngày chênh lệch giữa 2 ngày bất kì
 */
 
var fromDate = new Date('2019/10/17');
var toDate = new Date('2019/10/21');
 
function diff(fromDate, toDate) {
  // Write code here...
  var Difference_In_Time = toDate.getTime() - fromDate.getTime();
  var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24); 
return Difference_In_Days;
}