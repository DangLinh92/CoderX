/**
 * Sử dụng kiến thức đã học, tạo ra một ứng dụng danh bạ điện thoại, có các chức năng:
 * - Nhập dữ liệu contact (name, phone number)
 * - Sửa dữ liệu contact
 * - Xoá contact
 * - Tìm kiếm contact: có thể nhập vào tên (không dấu hoặc có dấu, chữ hoa hoặc chữ thường vẫn cho ra kết quả) hoặc 1 phần số điện thoại
 */
var fs = require('fs');
var readlineSync = require('readline-sync'); 
var contacts = [];
function createContact()
{
    var name = readlineSync.question('name:');
    var phoneNumber = readlineSync.question('phone:');

    var contact = 
    {
        name:name,
        phone:phoneNumber
    }
    contacts.push(contact);
    fs.writeFileSync("./ContactData.json",JSON.stringify(contacts));
}

function updateContact(){
    var name = readlineSync.question('name to update:');
    var phone = readlineSync.question('phone to update:');
    var contact = contacts.filter(function(value){
        return value.name === name && value.phone === phone;
    });
    contact.name = readlineSync.question('new name:');
    contact.phone = readlineSync.question('new phone:');
}

function deleteContact()
{
    var name = readlineSync.question('name to delete:');
    var phone = readlineSync.question('phone to delete:');
    var deleteContact = contacts.filter(function(value){
        return value.name === name && value.phone === phone;
    });

    if(deleteContact.length > 0){
        var index = contacts.indexOf(deleteContact[0]);
        contacts.splice(index,1);
        fs.writeFileSync("./ContactData.json",JSON.stringify(contacts));
    }
}

function searchContact()
{
    var searchText = readlineSync.question('searchText:');
    console.log(contacts);
    var contactSearch = contacts.filter(function(value){
        var name = value.name;
        var phone = value.phone;
        return name.toUpperCase().includes(searchText.toUpperCase()) || phone.toUpperCase().includes(searchText.toUpperCase());
    });
    console.log("Search result:",contactSearch);
    console.log('-----------');
}

function reloadData(){
   var data = fs.readFileSync('./contactData.json','utf8');
   contacts = JSON.parse(data);
}

function showMenu()
{
    reloadData();
    console.log('1. Create new contact');
    console.log('2. Update contact');
    console.log('3. Delete contact');
    console.log('4. Search contact');
    console.log('5. Exist');

    var option = readlineSync.question('< ');
    switch (option)
    {
        case '1':
            createContact();
            showMenu();
            break;
        case '2':
            updateContact();
            showMenu();
            break;
        case '3':
            deleteContact();
            showMenu();
            break;
        case '4':
            searchContact();
            showMenu();
            break;
        default:
            console.log('exist contact!');
            break;
    }
}

function Main(){
    showMenu();
}

Main();

