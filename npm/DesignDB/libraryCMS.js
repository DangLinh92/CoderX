/**
 * Thiết kế database cho 1 hệ thống quản lý thư viện sách, cho biết thư viện này có hàng trăm giá sách khác nhau, sách được để ở bất kì giá nào không theo danh mục nào.
 * Mỗi cuốn sách có 1 mã khác nhau.
 * Hệ thống cho phép đăng ký người dùng mới, một người có thể mượn nhiều sách khác nhau trong một khoảng thời gian hữu hạn.
 * Hệ thống có thể lưu lịch sử ai đã mượn sách nào, bắt đầu mượn từ bao lâu, trả lúc nào.
 * Hệ thống có lưu lại số ngày quá hạn tổng cộng của 1 người dùng, ví dụ sách A quá 2 ngày, sách B quá 3 ngày -> tổng 5 ngày
 */
function Book(id, name, author, type) {
    this.id = id;
    this.name = name;
    this.author = author;
    this.type = type;
}

function User(id, name) {
    this.id = id;
    this.name = name;
}

function BookUser(userId, bookId, startTime, endTime,actualTime) {
    this.userId = userId;
    this.bookId = bookId;
    this.startTime = startTime;
    this.endTime = endTime;
    this.actualTime = actualTime;
}
var book1 = new Book('1','truyen kieu','nguyen du','van hoc');
var book2 = new Book('2','truyen thieu nhi','tran dang khoa','thieu nhi');
var book3 = new Book('3','toan lop1','nguyen van an','toan');
var book4 = new Book('4','van hoc lop 1','nguyen van tai','van hoc');

var books = [book1,book2,book3,book4];

var user1 = new User('1','dang le van');
var user2 = new User('2','nguyen van an');
var user3 = new User('3','nguyen van bar');
var user4 = new User('4','le van dai');

var users = [user1,user2,user3,user4];

var bookUser1 = new BookUser('1','1','2019-01-01','2019-01-05');
var bookUser2 = new BookUser('1','2','2019-01-01','2019-01-05');
var bookUser3 = new BookUser('2','3','2019-01-01','2019-01-05');
var bookUser4 = new BookUser('2','4','2019-01-01','2019-01-05');

var bookUsers = [bookUser1,bookUser2,bookUser3,bookUser4];